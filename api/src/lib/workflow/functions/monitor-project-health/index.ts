import {
	getDeploymentHttpMetrics,
	type HttpMetricsSummary,
} from "src/lib/railway/get-deployment-http-metrics";
import {
	getProjectArchitecture,
	type ServiceResourceLimits,
} from "src/lib/railway/get-project-architecture";
import {
	getServiceResourceMetrics,
	type ServiceResourceMetrics,
} from "src/lib/railway/get-service-resource-metrics";
import { workflowClient } from "src/lib/workflow/client";
import { detectInfrastructureIssues } from "./detect-issues";
import { logProjectArchitecture } from "./log-architecture";
import { logInfrastructureIssues } from "./log-issues";

export const monitorProjectHealth = workflowClient.createFunction(
	{ id: "monitor-project-health" },
	// { cron: MONITOR_PROJECT_HEALTH_WORKFLOW_CRON }, // every 10 minutes
	// TODO: switch to cron
	{ event: "agent/monitor-project-health" },
	async ({ step }) => {
		const architecture = await step.run(
			"get-project-architecture",
			async () => await getProjectArchitecture(),
		);

		if (!architecture) {
			throw new Error("Failed to fetch project architecture");
		}

		const { services, databases } = architecture;

		// Create all step promises without awaiting (for parallel execution)
		const serviceResourceMetricSteps = services.map((service) =>
			step.run(
				`get-service-resource-metrics-${service.serviceId}`,
				async () =>
					await getServiceResourceMetrics({
						serviceId: service.serviceId,
					}),
			),
		);

		const servicesWithDeployments = services.filter(
			(
				service,
			): service is (typeof services)[number] & {
				latestDeployment: { id: string };
			} => Boolean(service.latestDeployment?.id),
		);
		const serviceHttpMetricSteps = servicesWithDeployments.map((service) =>
			step.run(
				`get-service-http-metrics-${service.serviceId}`,
				async () =>
					await getDeploymentHttpMetrics({
						deploymentId: service.latestDeployment.id,
					}),
			),
		);

		const databaseResourceMetricSteps = databases.map((database) =>
			step.run(
				`get-database-resource-metrics-${database.service.serviceId}`,
				async () =>
					await getServiceResourceMetrics({
						serviceId: database.service.serviceId,
					}),
			),
		);

		// Await all steps in parallel
		const [
			serviceResourceMetricsData,
			serviceHttpMetricsData,
			databaseResourceMetricsData,
		] = await Promise.all([
			Promise.all(serviceResourceMetricSteps),
			Promise.all(serviceHttpMetricSteps),
			Promise.all(databaseResourceMetricSteps),
		]);

		// Map results back to structured data
		const serviceResourceMetrics: Array<{
			serviceName: string;
			metrics: ServiceResourceMetrics;
			resourceLimits: ServiceResourceLimits;
		}> = services.map((service, index) => ({
			serviceName: service.serviceName,
			metrics: serviceResourceMetricsData[index] as ServiceResourceMetrics,
			resourceLimits: service.resourceLimits,
		}));

		const serviceHttpMetrics: Array<{
			serviceName: string;
			deploymentId: string;
			httpMetrics: HttpMetricsSummary;
		}> = servicesWithDeployments.map((service, index) => ({
			serviceName: service.serviceName,
			deploymentId: service.latestDeployment.id,
			httpMetrics: serviceHttpMetricsData[index] as HttpMetricsSummary,
		}));

		const databaseResourceMetrics: Array<{
			serviceName: string;
			metrics: ServiceResourceMetrics;
			resourceLimits: ServiceResourceLimits;
		}> = databases.map((database, index) => ({
			serviceName: database.service.serviceName,
			metrics: databaseResourceMetricsData[index] as ServiceResourceMetrics,
			resourceLimits: database.service.resourceLimits,
		}));

		const issues = detectInfrastructureIssues({
			serviceResourceMetrics,
			databaseResourceMetrics,
			serviceHttpMetrics,
		});

		if (issues.length > 0) {
			const architectureSummary = logProjectArchitecture(architecture);
			const issuesSummary = logInfrastructureIssues(issues);

			const serviceByName = new Map([
				...services.map((s) => [s.serviceName, s] as const),
				...databases.map((d) => [d.service.serviceName, d.service] as const),
			]);

			const affectedServices = Array.from(
				new Set(
					issues
						.map((issue) => serviceByName.get(issue.serviceName))
						.filter((s): s is (typeof services)[number] => s !== undefined),
				),
			);

			await step.sendEvent("agent/pull-service-context", {
				name: "agent/pull-service-context",
				data: {
					architectureSummary,
					issuesSummary,
					affectedServices,
				},
			});
		}

		return {
			success: true,
			issues,
		};
	},
);
