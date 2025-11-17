import { DEFAULT_QUERY_WINDOW_MS } from "src/lib/workflow/constants";
import { DEFAULT_HTTP_METRICS_LIMIT } from "./constants";
import { getHttpLogs } from "./get-http-logs";

type HttpStatusBucket = "2xx" | "3xx" | "4xx" | "5xx" | "other";

type HttpLatencyPercentiles = {
	p50: number | null;
	p90: number | null;
	p95: number | null;
	p99: number | null;
};

export type HttpMetricsSummary = {
	totalRequests: number | null;
	statusCounts: Record<HttpStatusBucket, number | null>;
	error4xxRatePercent: number | null;
	error5xxRatePercent: number | null;
	latencyMs: HttpLatencyPercentiles;
	timeframe: {
		start: string | null;
		end: string | null;
	};
	methodCounts: Record<string, number | null>;
	summary: string;
};

const calculatePercentile = (
	sortedValues: number[],
	percentile: number,
): number | null => {
	if (sortedValues.length === 0) {
		return null;
	}

	if (sortedValues.length === 1) {
		return sortedValues[0] ?? null;
	}

	const index = (percentile / 100) * (sortedValues.length - 1);
	const lowerIndex = Math.floor(index);
	const upperIndex = Math.ceil(index);

	const singleValue = sortedValues[lowerIndex];
	if (lowerIndex === upperIndex) {
		return singleValue ?? null;
	}

	const lowerValue = sortedValues[lowerIndex];
	const upperValue = sortedValues[upperIndex];

	if (lowerValue === undefined || upperValue === undefined) {
		return null;
	}

	const weight = index - lowerIndex;

	return lowerValue + (upperValue - lowerValue) * weight;
};

export const getDeploymentHttpMetrics = async (options: {
	deploymentId: string;
	startDate?: Date;
	endDate?: Date;
	limit?: number;
	filter?: string;
}): Promise<HttpMetricsSummary> => {
	const {
		deploymentId,
		endDate = new Date(),
		startDate = new Date(endDate.getTime() - DEFAULT_QUERY_WINDOW_MS),
		limit = DEFAULT_HTTP_METRICS_LIMIT,
		filter,
	} = options;

	const logOptions = {
		limit,
		...(startDate ? { startDate } : {}),
		...(endDate ? { endDate } : {}),
		...(filter ? { filter } : {}),
	};

	const logs = await getHttpLogs(deploymentId, logOptions);

	const totalRequests = logs.length;
	const statusCounts: Record<HttpStatusBucket, number> = {
		"2xx": 0,
		"3xx": 0,
		"4xx": 0,
		"5xx": 0,
		other: 0,
	};

	const methodCounts: Record<string, number> = {};
	const latencies: number[] = [];

	let earliestTimestamp: string | null = null;
	let latestTimestamp: string | null = null;

	for (const log of logs) {
		const status = log.httpStatus;
		const bucket: HttpStatusBucket =
			status >= 200 && status < 300
				? "2xx"
				: status >= 300 && status < 400
					? "3xx"
					: status >= 400 && status < 500
						? "4xx"
						: status >= 500 && status < 600
							? "5xx"
							: "other";
		statusCounts[bucket] += 1;

		if (log.method) {
			methodCounts[log.method] = (methodCounts[log.method] ?? 0) + 1;
		}

		if (typeof log.totalDuration === "number") {
			latencies.push(log.totalDuration);
		}

		if (log.timestamp) {
			if (!earliestTimestamp || log.timestamp < earliestTimestamp) {
				earliestTimestamp = log.timestamp;
			}
			if (!latestTimestamp || log.timestamp > latestTimestamp) {
				latestTimestamp = log.timestamp;
			}
		}
	}

	const error4xxRate =
		totalRequests > 0 ? (statusCounts["4xx"] / totalRequests) * 100 : 0;
	const error5xxRate =
		totalRequests > 0 ? (statusCounts["5xx"] / totalRequests) * 100 : 0;

	const sortedLatencies = [...latencies].sort((a, b) => a - b);
	const latencyPercentiles: HttpLatencyPercentiles = {
		p50: calculatePercentile(sortedLatencies, 50),
		p90: calculatePercentile(sortedLatencies, 90),
		p95: calculatePercentile(sortedLatencies, 95),
		p99: calculatePercentile(sortedLatencies, 99),
	};

	let summary: string;
	if (totalRequests === 0) {
		summary = "No HTTP logs were returned for the selected window.";
	} else {
		const parts: string[] = [
			`${totalRequests} requests observed (${statusCounts["2xx"]} 2xx, ${statusCounts["3xx"]} 3xx, ${statusCounts["4xx"]} 4xx, ${statusCounts["5xx"]} 5xx).`,
			`4xx rate: ${error4xxRate.toFixed(2)}%, 5xx rate: ${error5xxRate.toFixed(2)}%.`,
		];
		const latencyParts: string[] = [];
		if (latencyPercentiles.p50 !== null) {
			latencyParts.push(`p50 ${latencyPercentiles.p50.toFixed(2)}ms`);
		}
		if (latencyPercentiles.p90 !== null) {
			latencyParts.push(`p90 ${latencyPercentiles.p90.toFixed(2)}ms`);
		}
		if (latencyPercentiles.p95 !== null) {
			latencyParts.push(`p95 ${latencyPercentiles.p95.toFixed(2)}ms`);
		}
		if (latencyPercentiles.p99 !== null) {
			latencyParts.push(`p99 ${latencyPercentiles.p99.toFixed(2)}ms`);
		}
		if (latencyParts.length > 0) {
			parts.push(`Latency percentiles: ${latencyParts.join(", ")}.`);
		}
		if (earliestTimestamp && latestTimestamp) {
			parts.push(
				`Observation window: ${earliestTimestamp} → ${latestTimestamp}.`,
			);
		}
		summary = parts.join(" ");
	}

	return {
		totalRequests,
		statusCounts,
		error4xxRatePercent: error4xxRate,
		error5xxRatePercent: error5xxRate,
		latencyMs: latencyPercentiles,
		timeframe: {
			start: earliestTimestamp,
			end: latestTimestamp,
		},
		methodCounts,
		summary,
	};
};
