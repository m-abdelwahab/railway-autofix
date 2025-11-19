import { pullContextQueue } from "src/lib/jobs/queues";
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
import { detectInfrastructureIssues } from "./detect-issues";
import { logProjectArchitecture } from "./log-architecture";
import { logInfrastructureIssues } from "./log-issues";

export const monitorProjectHealth = async () => {
	const architecture = await getProjectArchitecture();

	if (!architecture) {
		throw new Error("Failed to fetch project architecture");
	}

	const { services, databases } = architecture;

	const serviceResourceMetricSteps = services.map((service) =>
		getServiceResourceMetrics({
			serviceId: service.serviceId,
		}),
	);

	const servicesWithDeployments = services.filter(
		(
			service,
		): service is (typeof services)[number] & {
			latestDeployment: { id: string };
		} => Boolean(service.latestDeployment?.id),
	);
	const serviceHttpMetricSteps = servicesWithDeployments.map((service) =>
		getDeploymentHttpMetrics({
			deploymentId: service.latestDeployment.id,
		}),
	);

	const databaseResourceMetricSteps = databases.map((database) =>
		getServiceResourceMetrics({
			serviceId: database.service.serviceId,
		}),
	);

	const [
		serviceResourceMetricsData,
		serviceHttpMetricsData,
		databaseResourceMetricsData,
	] = await Promise.all([
		Promise.all(serviceResourceMetricSteps),
		Promise.all(serviceHttpMetricSteps),
		Promise.all(databaseResourceMetricSteps),
	]);

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

		await pullContextQueue.add("pull-service-context", {
			architectureSummary,
			issuesSummary,
			affectedServices,
		});
	}

	return {
		success: true,
		issues,
	};
};
