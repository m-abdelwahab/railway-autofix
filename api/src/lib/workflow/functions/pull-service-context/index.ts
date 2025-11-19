import type { Job } from "pg-boss";
import { getBuildLogs, type LogEntry } from "src/lib/railway/get-build-logs";
import { getDeploymentLogs } from "src/lib/railway/get-deployment-logs";
import { getHttpLogs, type HttpLogEntry } from "src/lib/railway/get-http-logs";
import { boss } from "src/lib/workflow/client";
import type { ProjectArchitecture } from "src/lib/workflow/functions/monitor-project-health/log-architecture";

export type PullServiceContextData = {
	architectureSummary: string;
	issuesSummary: string;
	affectedServices?: ProjectArchitecture["services"];
};

export const pullServiceContext = async (job: Job<PullServiceContextData>) => {
	const { architectureSummary, issuesSummary, affectedServices } = job.data;

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

	const allStepPromises = targets.flatMap(
		([_serviceName, deploymentId, _repoUrl]) => [
			getBuildLogs(deploymentId),
			getDeploymentLogs(deploymentId),
			getHttpLogs(deploymentId, {
				filter: "status:>=400",
			}),
		],
	);

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
				deploymentLogs: (allResults[baseIndex + 1] as LogEntry[] | null) || [],
				httpLogs: (allResults[baseIndex + 2] as HttpLogEntry[] | null) || [],
			};
		},
	);

	// Trigger generate-fix workflow
	await boss.send("agent.generate-fix", {
		architectureSummary,
		issuesSummary,
		serviceContexts,
	});

	return {
		success: true,
		affectedServices: affectedServices ?? [],
	};
};
