import type { InfrastructureIssue } from "./detect-issues";

/**
 * Formats a number to a reasonable precision based on its magnitude
 */
function formatValue(value: number, unit: string): string {
	if (unit === "GB") {
		// For memory, show 2 decimal places if >= 1 GB, otherwise convert to MB
		if (value >= 1) {
			return value.toFixed(2);
		}
		return `${(value * 1024).toFixed(0)} MB`;
	}

	if (unit === "vCPU" || unit === "%") {
		// For CPU and percentages, show 2 decimal places
		return value.toFixed(2);
	}

	if (unit === "ms") {
		// For latency, show 0 decimal places if >= 100ms, otherwise 2 decimal places
		return value >= 100 ? value.toFixed(0) : value.toFixed(2);
	}

	return value.toString();
}

/**
 * Formats threshold value consistently with the actual value
 */
function formatThreshold(threshold: number, unit: string): string {
	if (unit === "GB" && threshold < 1) {
		return `${(threshold * 1024).toFixed(0)} MB`;
	}
	return formatValue(threshold, unit);
}

/**
 * Logs infrastructure issues in a token-efficient, structured plain-text format
 * optimized for LLM consumption
 */
export function logInfrastructureIssues(issues: InfrastructureIssue[]): string {
	const lines: string[] = [];

	if (issues.length === 0) {
		lines.push("\n=== INFRASTRUCTURE HEALTH CHECK ===");
		lines.push("Status: All metrics within normal thresholds");
		lines.push("=====================================\n");
		return lines.join("\n");
	}

	lines.push("\n=== INFRASTRUCTURE ISSUES DETECTED ===");
	lines.push(`Total Issues: ${issues.length}\n`);

	// Group issues by service for better readability
	const issuesByService = new Map<string, InfrastructureIssue[]>();
	for (const issue of issues) {
		const existing = issuesByService.get(issue.serviceName) || [];
		existing.push(issue);
		issuesByService.set(issue.serviceName, existing);
	}

	// Log issues grouped by service
	for (const [serviceName, serviceIssues] of issuesByService.entries()) {
		lines.push(`Service: ${serviceName}`);
		for (const issue of serviceIssues) {
			const formattedValue = formatValue(issue.value, issue.unit);
			const formattedThreshold = formatThreshold(issue.threshold, issue.unit);
			const valueWithUnit =
				issue.unit === "GB" && issue.value < 1
					? formattedValue
					: `${formattedValue} ${issue.unit}`;
			const thresholdWithUnit =
				issue.unit === "GB" && issue.threshold < 1
					? formattedThreshold
					: `${formattedThreshold} ${issue.unit}`;

			lines.push(
				`  [${issue.severity}] ${issue.metricName}: ${valueWithUnit} (threshold: ${thresholdWithUnit})`,
			);
		}
		lines.push(""); // Empty line between services
	}

	// Summary statistics
	const criticalCount = issues.filter((i) => i.severity === "CRITICAL").length;
	const warningCount = issues.filter((i) => i.severity === "WARNING").length;
	const affectedServices = issuesByService.size;

	lines.push("Summary:");
	lines.push(`  Critical: ${criticalCount}`);
	lines.push(`  Warning: ${warningCount}`);
	lines.push(`  Affected Services: ${affectedServices}`);
	lines.push("======================================\n");

	return lines.join("\n");
}
