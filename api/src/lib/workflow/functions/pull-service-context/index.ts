import { getBuildLogs, type LogEntry } from "src/lib/railway/get-build-logs";
import { getDeploymentLogs } from "src/lib/railway/get-deployment-logs";
import { getHttpLogs, type HttpLogEntry } from "src/lib/railway/get-http-logs";
import { workflowClient } from "src/lib/workflow/client";

export const pullServiceContext = workflowClient.createFunction(
	{ id: "pull-service-context" },
	{ event: "agent/pull-service-context" },
	async ({ step, event }) => {
		const { architectureSummary, issuesSummary, affectedServices } = event.data;

		// Build target tuples of (serviceName, deploymentId, repoUrl) and skip services without a deployment
		const targets = (affectedServices ?? [])
			.map(
				(s) =>
					[
						s.serviceName,
						s.latestDeployment?.id,
						s.source?.repo ?? null,
					] as const,
			)
			.filter((t): t is readonly [string, string, string | null] =>
				Boolean(t[1]),
			);

		if (targets.length === 0) {
			console.log("No affected services found in issues summary");
			return {
				success: false,
				error: "No affected services with deployments identified",
			};
		}

		// Create all step promises without awaiting (for parallel execution)
		const allStepPromises = targets.flatMap(
			([serviceName, deploymentId, _repoUrl]) => [
				step.run(
					`fetch-build-logs-${serviceName}`,
					async () => await getBuildLogs(deploymentId),
				),
				step.run(
					`fetch-deployment-logs-${serviceName}`,
					async () => await getDeploymentLogs(deploymentId),
				),
				step.run(
					`fetch-http-logs-${serviceName}`,
					async () =>
						await getHttpLogs(deploymentId, {
							filter: "status:>=400",
						}),
				),
			],
		);

		// Await all steps in parallel
		const allResults = await Promise.all(allStepPromises);

		// Map results back to service contexts (3 results per service)
		const serviceContexts = targets.map(
			([serviceName, deploymentId, repoUrl], index) => {
				const baseIndex = index * 3;
				return {
					serviceName,
					deploymentId,
					repoUrl,
					buildLogs: (allResults[baseIndex] as LogEntry[] | null) || [],
					deploymentLogs:
						(allResults[baseIndex + 1] as LogEntry[] | null) || [],
					httpLogs: (allResults[baseIndex + 2] as HttpLogEntry[] | null) || [],
				};
			},
		);

		// Trigger generate-fix workflow
		await step.sendEvent("agent/generate-fix", {
			name: "agent/generate-fix",
			data: {
				architectureSummary,
				issuesSummary,
				serviceContexts,
			},
		});

		return {
			success: true,
			affectedServices: affectedServices ?? [],
		};
	},
);
