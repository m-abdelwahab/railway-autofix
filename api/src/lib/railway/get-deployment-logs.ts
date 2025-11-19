import { DEFAULT_QUERY_WINDOW_MS } from "src/lib/jobs/constants";
import { railway } from "./client";
import { DEFAULT_DEPLOYMENT_LOGS_LIMIT } from "./constants";

export const getDeploymentLogs = async (
	deploymentId: string,
	limit: number = DEFAULT_DEPLOYMENT_LOGS_LIMIT,
) => {
	const result = await railway.query({
		deploymentLogs: {
			__args: {
				deploymentId,
				limit,
				startDate: new Date(Date.now() - DEFAULT_QUERY_WINDOW_MS).toISOString(),
				endDate: new Date().toISOString(),
			},
			attributes: {
				key: true,
				value: true,
			},
			message: true,
			severity: true,
			timestamp: true,
		},
	});

	return result.deploymentLogs;
};
