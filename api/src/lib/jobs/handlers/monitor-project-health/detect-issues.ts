import type { HttpMetricsSummary } from "src/lib/railway/get-deployment-http-metrics";
import type { ServiceResourceLimits } from "src/lib/railway/get-project-architecture";
import type { ServiceResourceMetrics } from "src/lib/railway/get-service-resource-metrics";
import {
	ERROR_4XX_RATE_CRITICAL_THRESHOLD,
	ERROR_4XX_RATE_WARNING_THRESHOLD,
	ERROR_5XX_RATE_CRITICAL_THRESHOLD,
	ERROR_5XX_RATE_WARNING_THRESHOLD,
	LATENCY_P95_CRITICAL_THRESHOLD,
	LATENCY_P95_WARNING_THRESHOLD,
	RESOURCE_CRITICAL_THRESHOLD_PERCENT,
	RESOURCE_WARNING_THRESHOLD_PERCENT,
} from "../../constants";

export type IssueSeverity = "WARNING" | "CRITICAL";

export type InfrastructureIssue = {
	severity: IssueSeverity;
	serviceName: string;
	metricType:
		| "CPU_AVERAGE"
		| "CPU_MAX"
		| "MEMORY_AVERAGE"
		| "MEMORY_MAX"
		| "ERROR_4XX_RATE"
		| "ERROR_5XX_RATE"
		| "LATENCY_P95";
	metricName: string;
	value: number;
	threshold: number;
	unit: string;
};

type ResourceIssueCheckResult = InfrastructureIssue[];

/**
 * Analyzes resource metrics (CPU and Memory) and detects threshold violations
 * Uses percentage-based thresholds relative to the service's resource limits
 */
export function analyzeResourceMetrics(
	serviceName: string,
	metrics: ServiceResourceMetrics,
	resourceLimits: ServiceResourceLimits,
): ResourceIssueCheckResult {
	const issues: InfrastructureIssue[] = [];

	// Calculate dynamic thresholds based on resource limits
	const cpuWarningThreshold = resourceLimits.maxCpu
		? resourceLimits.maxCpu * (RESOURCE_WARNING_THRESHOLD_PERCENT / 100)
		: null;
	const cpuCriticalThreshold = resourceLimits.maxCpu
		? resourceLimits.maxCpu * (RESOURCE_CRITICAL_THRESHOLD_PERCENT / 100)
		: null;
	const memoryWarningThreshold = resourceLimits.maxMemory
		? resourceLimits.maxMemory * (RESOURCE_WARNING_THRESHOLD_PERCENT / 100)
		: null;
	const memoryCriticalThreshold = resourceLimits.maxMemory
		? resourceLimits.maxMemory * (RESOURCE_CRITICAL_THRESHOLD_PERCENT / 100)
		: null;

	// Check CPU Average
	if (
		metrics.cpu?.average !== undefined &&
		metrics.cpu.average !== null &&
		cpuCriticalThreshold !== null &&
		cpuWarningThreshold !== null
	) {
		const cpuAvg = metrics.cpu.average;
		if (cpuAvg >= cpuCriticalThreshold) {
			issues.push({
				severity: "CRITICAL",
				serviceName,
				metricType: "CPU_AVERAGE",
				metricName: "CPU Average",
				value: cpuAvg,
				threshold: cpuCriticalThreshold,
				unit: "vCPU",
			});
		} else if (cpuAvg >= cpuWarningThreshold) {
			issues.push({
				severity: "WARNING",
				serviceName,
				metricType: "CPU_AVERAGE",
				metricName: "CPU Average",
				value: cpuAvg,
				threshold: cpuWarningThreshold,
				unit: "vCPU",
			});
		}
	}

	// Check CPU Max
	if (
		metrics.cpu?.max !== undefined &&
		metrics.cpu.max !== null &&
		cpuCriticalThreshold !== null &&
		cpuWarningThreshold !== null
	) {
		const cpuMax = metrics.cpu.max;
		if (cpuMax >= cpuCriticalThreshold) {
			issues.push({
				severity: "CRITICAL",
				serviceName,
				metricType: "CPU_MAX",
				metricName: "CPU Max",
				value: cpuMax,
				threshold: cpuCriticalThreshold,
				unit: "vCPU",
			});
		} else if (cpuMax >= cpuWarningThreshold) {
			issues.push({
				severity: "WARNING",
				serviceName,
				metricType: "CPU_MAX",
				metricName: "CPU Max",
				value: cpuMax,
				threshold: cpuWarningThreshold,
				unit: "vCPU",
			});
		}
	}

	// Check Memory Average
	if (
		metrics.memory?.average !== undefined &&
		metrics.memory.average !== null &&
		memoryCriticalThreshold !== null &&
		memoryWarningThreshold !== null
	) {
		const memAvg = metrics.memory.average;
		if (memAvg >= memoryCriticalThreshold) {
			issues.push({
				severity: "CRITICAL",
				serviceName,
				metricType: "MEMORY_AVERAGE",
				metricName: "Memory Average",
				value: memAvg,
				threshold: memoryCriticalThreshold,
				unit: "GB",
			});
		} else if (memAvg >= memoryWarningThreshold) {
			issues.push({
				severity: "WARNING",
				serviceName,
				metricType: "MEMORY_AVERAGE",
				metricName: "Memory Average",
				value: memAvg,
				threshold: memoryWarningThreshold,
				unit: "GB",
			});
		}
	}

	// Check Memory Max
	if (
		metrics.memory?.max !== undefined &&
		metrics.memory.max !== null &&
		memoryCriticalThreshold !== null &&
		memoryWarningThreshold !== null
	) {
		const memMax = metrics.memory.max;
		if (memMax >= memoryCriticalThreshold) {
			issues.push({
				severity: "CRITICAL",
				serviceName,
				metricType: "MEMORY_MAX",
				metricName: "Memory Max",
				value: memMax,
				threshold: memoryCriticalThreshold,
				unit: "GB",
			});
		} else if (memMax >= memoryWarningThreshold) {
			issues.push({
				severity: "WARNING",
				serviceName,
				metricType: "MEMORY_MAX",
				metricName: "Memory Max",
				value: memMax,
				threshold: memoryWarningThreshold,
				unit: "GB",
			});
		}
	}

	return issues;
}

/**
 * Analyzes HTTP metrics (error rate and latency) and detects threshold violations
 */
export function analyzeHttpMetrics(
	serviceName: string,
	metrics: HttpMetricsSummary,
): ResourceIssueCheckResult {
	const issues: InfrastructureIssue[] = [];

	// Only analyze if we have requests
	if (!metrics.totalRequests || metrics.totalRequests === 0) {
		return issues;
	}

	// Check 5xx Error Rate (server errors - more critical)
	const error5xxRate = metrics.error5xxRatePercent;
	if (error5xxRate !== null && error5xxRate !== undefined) {
		if (error5xxRate >= ERROR_5XX_RATE_CRITICAL_THRESHOLD) {
			issues.push({
				severity: "CRITICAL",
				serviceName,
				metricType: "ERROR_5XX_RATE",
				metricName: "HTTP 5xx Error Rate",
				value: error5xxRate,
				threshold: ERROR_5XX_RATE_CRITICAL_THRESHOLD,
				unit: "%",
			});
		} else if (error5xxRate >= ERROR_5XX_RATE_WARNING_THRESHOLD) {
			issues.push({
				severity: "WARNING",
				serviceName,
				metricType: "ERROR_5XX_RATE",
				metricName: "HTTP 5xx Error Rate",
				value: error5xxRate,
				threshold: ERROR_5XX_RATE_WARNING_THRESHOLD,
				unit: "%",
			});
		}
	}

	// Check 4xx Error Rate (client errors - less critical, higher thresholds)
	const error4xxRate = metrics.error4xxRatePercent;
	if (error4xxRate !== null && error4xxRate !== undefined) {
		if (error4xxRate >= ERROR_4XX_RATE_CRITICAL_THRESHOLD) {
			issues.push({
				severity: "CRITICAL",
				serviceName,
				metricType: "ERROR_4XX_RATE",
				metricName: "HTTP 4xx Error Rate",
				value: error4xxRate,
				threshold: ERROR_4XX_RATE_CRITICAL_THRESHOLD,
				unit: "%",
			});
		} else if (error4xxRate >= ERROR_4XX_RATE_WARNING_THRESHOLD) {
			issues.push({
				severity: "WARNING",
				serviceName,
				metricType: "ERROR_4XX_RATE",
				metricName: "HTTP 4xx Error Rate",
				value: error4xxRate,
				threshold: ERROR_4XX_RATE_WARNING_THRESHOLD,
				unit: "%",
			});
		}
	}

	// Check Latency p95
	if (metrics.latencyMs.p95 !== null && metrics.latencyMs.p95 !== undefined) {
		const p95 = metrics.latencyMs.p95;
		if (p95 >= LATENCY_P95_CRITICAL_THRESHOLD) {
			issues.push({
				severity: "CRITICAL",
				serviceName,
				metricType: "LATENCY_P95",
				metricName: "HTTP Latency p95",
				value: p95,
				threshold: LATENCY_P95_CRITICAL_THRESHOLD,
				unit: "ms",
			});
		} else if (p95 >= LATENCY_P95_WARNING_THRESHOLD) {
			issues.push({
				severity: "WARNING",
				serviceName,
				metricType: "LATENCY_P95",
				metricName: "HTTP Latency p95",
				value: p95,
				threshold: LATENCY_P95_WARNING_THRESHOLD,
				unit: "ms",
			});
		}
	}

	return issues;
}

/**
 * Main function to detect all infrastructure issues from collected metrics
 */
export function detectInfrastructureIssues(data: {
	serviceResourceMetrics: Array<{
		serviceName: string;
		metrics: ServiceResourceMetrics;
		resourceLimits: ServiceResourceLimits;
	}>;
	databaseResourceMetrics: Array<{
		serviceName: string;
		metrics: ServiceResourceMetrics;
		resourceLimits: ServiceResourceLimits;
	}>;
	serviceHttpMetrics: Array<{
		serviceName: string;
		deploymentId: string;
		httpMetrics: HttpMetricsSummary;
	}>;
}): InfrastructureIssue[] {
	const allIssues: InfrastructureIssue[] = [];

	// Analyze service resource metrics
	for (const service of data.serviceResourceMetrics) {
		const issues = analyzeResourceMetrics(
			service.serviceName,
			service.metrics,
			service.resourceLimits,
		);
		allIssues.push(...issues);
	}

	// Analyze database resource metrics
	for (const database of data.databaseResourceMetrics) {
		const issues = analyzeResourceMetrics(
			database.serviceName,
			database.metrics,
			database.resourceLimits,
		);
		allIssues.push(...issues);
	}

	// Analyze HTTP metrics
	for (const service of data.serviceHttpMetrics) {
		const issues = analyzeHttpMetrics(service.serviceName, service.httpMetrics);
		allIssues.push(...issues);
	}

	return allIssues;
}
