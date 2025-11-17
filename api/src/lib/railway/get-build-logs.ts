import { DEFAULT_QUERY_WINDOW_MS } from "src/lib/workflow/constants";
import { railway } from "./client";
import { DEFAULT_BUILD_LOGS_LIMIT } from "./constants";

export type LogEntry = {
	message: string;
	severity?: string | null;
	timestamp: string;
	attributes?: Array<{ key: string; value: string }> | null;
};

export const getBuildLogs = async (
	deploymentId: string,
	limit: number = DEFAULT_BUILD_LOGS_LIMIT,
) => {
	const result = await railway.query({
		buildLogs: {
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

	return result.buildLogs;
};
