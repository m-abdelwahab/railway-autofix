import { DEFAULT_QUERY_WINDOW_MS } from "src/lib/workflow/constants";
import { railway } from "./client";

const CPU_USAGE_MEASUREMENT = "CPU_USAGE" as const;
const MEMORY_USAGE_MEASUREMENT = "MEMORY_USAGE_GB" as const;

type ResourceMeasurementType =
	| typeof CPU_USAGE_MEASUREMENT
	| typeof MEMORY_USAGE_MEASUREMENT;

type MetricStats = {
	average: number | null;
	max: number | null;
	min: number | null;
	sampleCount: number | null;
};

export type ServiceResourceMetrics = {
	cpu: MetricStats | null;
	memory: MetricStats | null;
	timeRange: {
		start: string;
		end: string;
		startReadable: string;
		endReadable: string;
		duration: string;
	};
	sampleRateSeconds?: number | null;
	averagingWindowSeconds?: number | null;
	summary: string;
};

type MetricsQueryArgs = {
	projectId: string;
	serviceId: string;
	startDate: string;
	measurements: ResourceMeasurementType[];
	endDate?: string;
	environmentId?: string;
	sampleRateSeconds?: number;
	averagingWindowSeconds?: number;
};

const formatMemoryValue = (valueGb: number) => {
	if (!Number.isFinite(valueGb)) {
		return "0 GB";
	}

	if (valueGb >= 1) {
		return `${valueGb.toFixed(2)} GB`;
	}

	return `${(valueGb * 1024).toFixed(0)} MB`;
};

const formatNumber = (value: number, fractionDigits = 2) =>
	Number.isFinite(value) ? value.toFixed(fractionDigits) : "0";

const formatReadableDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZoneName: "short",
	};
	return date.toLocaleString("en-US", options);
};

const getTimeDuration = (startDate: Date, endDate: Date): string => {
	const diffMs = endDate.getTime() - startDate.getTime();
	const hours = Math.floor(diffMs / (1000 * 60 * 60));
	const days = Math.floor(hours / 24);

	if (days >= 1) {
		return `${days} day${days > 1 ? "s" : ""}`;
	}
	return `${hours} hour${hours !== 1 ? "s" : ""}`;
};

const calculateSeriesStats = (
	values: { ts: number; value: number }[],
): MetricStats | null => {
	if (!values || values.length === 0) {
		return null;
	}

	const totals = values.reduce(
		(acc, point) => {
			const max = Math.max(acc.max, point.value);
			const min = Math.min(acc.min, point.value);
			return {
				sum: acc.sum + point.value,
				max,
				min,
			};
		},
		{ sum: 0, max: -Infinity, min: Infinity },
	);

	return {
		average: totals.sum / values.length,
		max: totals.max,
		min: totals.min,
		sampleCount: values.length,
	};
};

export const getServiceResourceMetrics = async (options: {
	serviceId: string;
	environmentId?: string;
	projectId?: string;
	startDate?: Date;
	endDate?: Date;
	sampleRateSeconds?: number;
	averagingWindowSeconds?: number;
}): Promise<ServiceResourceMetrics> => {
	const {
		serviceId,
		environmentId,
		projectId = process.env.RAILWAY_PROJECT_ID,
		endDate = new Date(),
		startDate = new Date(endDate.getTime() - DEFAULT_QUERY_WINDOW_MS),
		sampleRateSeconds,
		averagingWindowSeconds,
	} = options;

	if (!projectId) {
		throw new Error("RAILWAY_PROJECT_ID is not defined.");
	}

	const metricsArgs: MetricsQueryArgs = {
		projectId,
		serviceId,
		startDate: startDate.toISOString(),
		measurements: [CPU_USAGE_MEASUREMENT, MEMORY_USAGE_MEASUREMENT],
	};

	if (environmentId) {
		metricsArgs.environmentId = environmentId;
	}

	if (endDate) {
		metricsArgs.endDate = endDate.toISOString();
	}

	if (typeof sampleRateSeconds === "number") {
		metricsArgs.sampleRateSeconds = sampleRateSeconds;
	}

	if (typeof averagingWindowSeconds === "number") {
		metricsArgs.averagingWindowSeconds = averagingWindowSeconds;
	}

	const response = await railway.query({
		metrics: {
			__args: metricsArgs,
			measurement: true,
			values: {
				ts: true,
				value: true,
			},
		},
	});

	const metrics = (response.metrics ?? []) as Array<{
		measurement: ResourceMeasurementType;
		values?: { ts: number; value: number }[];
	}>;

	const cpuResult = metrics.find(
		(metric) => metric.measurement === CPU_USAGE_MEASUREMENT,
	);
	const memoryResult = metrics.find(
		(metric) => metric.measurement === MEMORY_USAGE_MEASUREMENT,
	);

	const cpuStats = cpuResult
		? calculateSeriesStats(cpuResult.values ?? [])
		: null;
	const memoryStats = memoryResult
		? calculateSeriesStats(memoryResult.values ?? [])
		: null;

	const duration = getTimeDuration(startDate, endDate);
	const startReadable = formatReadableDate(startDate);
	const endReadable = formatReadableDate(endDate);

	const summaryParts: string[] = [];
	if (cpuStats && cpuStats.sampleCount > 0) {
		summaryParts.push(
			`CPU usage averaged ${formatNumber(cpuStats.average)} vCPU (max ${formatNumber(cpuStats.max)} vCPU, min ${formatNumber(cpuStats.min)} vCPU, ${cpuStats.sampleCount} samples).`,
		);
	} else {
		summaryParts.push("No CPU usage samples were returned.");
	}
	if (memoryStats && memoryStats.sampleCount > 0) {
		summaryParts.push(
			`Memory usage averaged ${formatMemoryValue(memoryStats.average)} (max ${formatMemoryValue(memoryStats.max)}, min ${formatMemoryValue(memoryStats.min)}, ${memoryStats.sampleCount} samples).`,
		);
	} else {
		summaryParts.push("No memory usage samples were returned.");
	}
	summaryParts.push(
		`Measured over ${duration} (${startReadable} to ${endReadable}).`,
	);
	const summary = summaryParts.join(" ");

	return {
		cpu: cpuStats,
		memory: memoryStats,
		timeRange: {
			start: startDate.toISOString(),
			end: endDate.toISOString(),
			startReadable,
			endReadable,
			duration,
		},
		...(sampleRateSeconds !== undefined && { sampleRateSeconds }),
		...(averagingWindowSeconds !== undefined && {
			averagingWindowSeconds,
		}),
		summary,
	};
};
