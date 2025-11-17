import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import type { LogEntry } from "src/lib/railway/get-build-logs";
import type { HttpLogEntry } from "src/lib/railway/get-http-logs";
import type { ServiceContext } from "src/lib/workflow/types";
import { z } from "zod";

export type DebugAnalysis = {
	summary: string;
	rootCauses: string[];
	affectedServices: string[];
	recommendations: string[];
	debuggingSteps: string[];
	rawAnalysis: string;
};

const DebugAnalysisSchema = z.object({
	summary: z.string(),
	rootCauses: z.array(z.string()),
	affectedServices: z.array(z.string()),
	recommendations: z.array(z.string()),
	debuggingSteps: z.array(z.string()),
});

type HttpErrorPattern = {
	method: string;
	path: string;
	status: number;
	count: number;
	avgDuration: number | null;
	sample: { timestamp: string; duration: number | null };
};

type LogPattern = {
	severity: string;
	message: string;
	count: number;
	firstSeen: string;
	lastSeen: string;
};

/**
 * Aggregates HTTP logs into error patterns grouped by method, path, and status
 */
function aggregateHttpLogs(logs: HttpLogEntry[]): HttpErrorPattern[] {
	const patternMap = new Map<string, HttpErrorPattern>();

	for (const log of logs) {
		const key = `${log.method}|${log.path}|${log.httpStatus}`;
		const existing = patternMap.get(key);

		if (existing) {
			existing.count++;
			// Update average duration
			if (log.totalDuration !== null && existing.avgDuration !== null) {
				existing.avgDuration =
					(existing.avgDuration * (existing.count - 1) + log.totalDuration) /
					existing.count;
			}
			// Keep the most recent timestamp as sample
			if (log.timestamp > existing.sample.timestamp) {
				existing.sample = {
					timestamp: log.timestamp,
					duration: log.totalDuration,
				};
			}
		} else {
			patternMap.set(key, {
				method: log.method,
				path: log.path,
				status: log.httpStatus ?? 0,
				count: 1,
				avgDuration: log.totalDuration,
				sample: {
					timestamp: log.timestamp,
					duration: log.totalDuration,
				},
			});
		}
	}

	// Sort by count (most frequent first)
	return Array.from(patternMap.values()).sort((a, b) => b.count - a.count);
}

/**
 * Filters logs to ERROR and WARN severity, then aggregates similar messages
 */
function aggregateBuildLogs(logs: LogEntry[]): LogPattern[] {
	// Filter to ERROR and WARN only
	const filteredLogs = logs.filter(
		(log) =>
			log.severity?.toUpperCase() === "ERROR" ||
			log.severity?.toUpperCase() === "WARN" ||
			log.severity?.toUpperCase() === "WARNING",
	);

	const patternMap = new Map<string, LogPattern>();

	for (const log of filteredLogs) {
		// Normalize message by removing timestamps, file paths with line numbers, and hex values
		const normalizedMessage = log.message
			.replace(/\d{4}-\d{2}-\d{2}[T\s]\d{2}:\d{2}:\d{2}(\.\d+)?Z?/g, "[TIME]")
			.replace(/\/[\w\-/.]+:\d+/g, "[FILE:LINE]")
			.replace(/0x[0-9a-fA-F]+/g, "[HEX]")
			.replace(/\d+ms/g, "[TIME]")
			.trim();

		const key = `${log.severity}|${normalizedMessage}`;
		const existing = patternMap.get(key);

		if (existing) {
			existing.count++;
			existing.lastSeen = log.timestamp;
		} else {
			patternMap.set(key, {
				severity: log.severity ?? "UNKNOWN",
				message: normalizedMessage,
				count: 1,
				firstSeen: log.timestamp,
				lastSeen: log.timestamp,
			});
		}
	}

	// Sort by severity (ERROR first) then by count
	return Array.from(patternMap.values()).sort((a, b) => {
		if (a.severity === "ERROR" && b.severity !== "ERROR") return -1;
		if (a.severity !== "ERROR" && b.severity === "ERROR") return 1;
		return b.count - a.count;
	});
}

/**
 * Analyzes infrastructure issues and logs using AI to provide debugging guidance
 */
export async function analyzeWithAI(data: {
	architectureSummary: string;
	issuesSummary: string;
	serviceContexts: ServiceContext[];
}): Promise<DebugAnalysis> {
	const { architectureSummary, issuesSummary, serviceContexts } = data;

	// Aggregate logs into patterns for token efficiency
	const servicesText = serviceContexts
		.map((ctx) => {
			// Aggregate build logs (ERROR and WARN only)
			const buildPatterns = aggregateBuildLogs(ctx.buildLogs);
			const buildLogsText = buildPatterns.length
				? buildPatterns
						.map(
							(p) =>
								`[${p.severity}] ${p.message} (occurred ${p.count}x, first: ${p.firstSeen}, last: ${p.lastSeen})`,
						)
						.join("\n")
				: "No ERROR or WARN build logs";

			// Aggregate deployment logs (ERROR and WARN only)
			const deployPatterns = aggregateBuildLogs(ctx.deploymentLogs);
			const deployLogsText = deployPatterns.length
				? deployPatterns
						.map(
							(p) =>
								`[${p.severity}] ${p.message} (occurred ${p.count}x, first: ${p.firstSeen}, last: ${p.lastSeen})`,
						)
						.join("\n")
				: "No ERROR or WARN deployment logs";

			// Aggregate HTTP error patterns
			const httpPatterns = aggregateHttpLogs(ctx.httpLogs);
			const httpLogsText = httpPatterns.length
				? httpPatterns
						.map(
							(p) =>
								`${p.method} ${p.path} - Status ${p.status} (${p.count}x)${p.avgDuration ? `, avg ${Math.round(p.avgDuration)}ms` : ""}`,
						)
						.join("\n")
				: "No HTTP error logs";

			return `## Service: ${ctx.serviceName} (${ctx.deploymentId})

### Build Log Patterns (ERROR/WARN only)
${buildLogsText}

### Deployment Log Patterns (ERROR/WARN only)
${deployLogsText}

### HTTP Error Patterns
${httpLogsText}`;
		})
		.join("\n\n");

	const prompt = `You are a DevOps and infrastructure expert. Analyze the provided Railway project data and produce a concise, actionable analysis.

## Architecture
${architectureSummary}

## Detected Issues
${issuesSummary}

## Service Log Patterns & Error Analysis
${servicesText}

Note: Log patterns show aggregated error frequencies. Higher occurrence counts indicate systemic issues or repeated failures that need immediate attention.

Analyze this data and provide:
- summary (2-3 sentences)
- rootCauses (bullet items identifying the underlying causes)
- affectedServices (service names)
- recommendations (prioritized, actionable fixes)
- debuggingSteps (step-by-step troubleshooting list)`;

	try {
		const { object } = await generateObject({
			model: openai("gpt-5"),
			prompt,
			schema: DebugAnalysisSchema,
		});

		const analysis = object as z.infer<typeof DebugAnalysisSchema>;
		return {
			summary: analysis.summary,
			rootCauses: analysis.rootCauses,
			affectedServices: analysis.affectedServices,
			recommendations: analysis.recommendations,
			debuggingSteps: analysis.debuggingSteps,
			rawAnalysis: JSON.stringify(analysis),
		};
	} catch (error) {
		console.error("AI analysis failed:", error);
		throw new Error(
			`Failed to analyze issues with AI: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
}
