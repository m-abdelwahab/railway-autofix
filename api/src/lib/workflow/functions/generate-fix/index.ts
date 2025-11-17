import { agent } from "src/lib/agent";
import { workflowClient } from "src/lib/workflow/client";
import type { ServiceContext } from "src/lib/workflow/types";
import { analyzeWithAI } from "./analyze-with-ai";

export const generateFix = workflowClient.createFunction(
	{ id: "generate-fix" },
	{ event: "agent/generate-fix" },
	async ({ step, event }) => {
		const { architectureSummary, issuesSummary, serviceContexts } =
			event.data as {
				architectureSummary: string;
				issuesSummary: string;
				serviceContexts: ServiceContext[];
			};

		// Step 1: Analyze with AI to generate fix recommendations
		const analysis = await step.run("analyze-with-ai", async () => {
			return await analyzeWithAI({
				architectureSummary,
				issuesSummary,
				serviceContexts,
			});
		});

		// Group services by repository URL
		const servicesByRepo = new Map<string, ServiceContext[]>();
		for (const ctx of serviceContexts) {
			if (ctx.repoUrl) {
				const existing = servicesByRepo.get(ctx.repoUrl) || [];
				servicesByRepo.set(ctx.repoUrl, [...existing, ctx]);
			}
		}

		if (servicesByRepo.size === 0) {
			console.log("No repository URLs found in service contexts");
			return {
				success: false,
				analysis,
				opencodeResults: [],
				error: "No repository URLs found in service contexts",
			};
		}

		// Process each repository separately
		const opencodeResults = [];

		for (const [repoUrl, repoServices] of servicesByRepo.entries()) {
			// Create a sanitized step name by replacing special characters
			const stepSuffix = repoUrl.replace(/[^a-zA-Z0-9]/g, "-");

			// Filter affected services to only those in this repo
			const repoServiceNames = repoServices.map((s) => s.serviceName);
			const affectedServicesInRepo = analysis.affectedServices.filter((name) =>
				repoServiceNames.includes(name),
			);

			// Step 2a: Create OpenCode session for this repository
			const sessionResult = await step.run(
				`create-session-${stepSuffix}`,
				async () => {
					try {
						const sessionId = Bun.randomUUIDv7();

						const session = await agent.session.create({
							body: { title: `Fix infrastructure issues for ${repoUrl}` },
							query: { directory: `/workspace/session-${sessionId}` },
						});

						// Check for errors in response (SDK uses fields response style by default)
						if (session.error) {
							console.error(
								`OpenCode API error creating session for ${repoUrl}:`,
								session.error,
							);
							return {
								success: false,
								error: `API error: ${JSON.stringify(session.error)}`,
								sessionId: null,
							};
						}

						if (!session.data) {
							console.error(
								`No data in session create response for ${repoUrl}:`,
								session,
							);
							return {
								success: false,
								error: "No data returned from OpenCode API",
								sessionId: null,
							};
						}

						console.log(
							`Created OpenCode session ${session.data.id} for ${repoUrl}`,
						);

						return {
							success: true,
							sessionId: session.data.id,
							workspaceDir: `/workspace/session-${sessionId}`,
						};
					} catch (error) {
						console.error(`Failed to create session for ${repoUrl}:`, error);
						return {
							success: false,
							error:
								error instanceof Error
									? error.message
									: "Unknown error occurred",
							sessionId: null,
						};
					}
				},
			);

			if (!sessionResult.success || !sessionResult.sessionId) {
				opencodeResults.push({
					repoUrl,
					success: false,
					error:
						"error" in sessionResult
							? sessionResult.error
							: "Failed to create session",
					sessionId: null,
				});
				continue;
			}

			// Step 2b: Warmup the session
			await step.run(`warmup-${stepSuffix}`, async () => {
				await agent.session.prompt({
					path: { id: sessionResult.sessionId },
					body: {
						parts: [{ type: "text", text: "Hello! Ready to help." }],
					},
				});
			});

			// Step 2c: Send fix task to the session
			const promptResult = await step.run(
				`send-prompt-${stepSuffix}`,
				async () => {
					try {
						// Build task prompt with AI analysis and recommendations filtered for this repo
						const task = `
You are tasked with fixing infrastructure issues in a Railway project.

## Repository
https://github.com/${repoUrl}

## Analysis Summary
${analysis.summary}

## Root Causes
${analysis.rootCauses.map((cause, i) => `${i + 1}. ${cause}`).join("\n")}

## Affected Services in This Repository
${affectedServicesInRepo.length > 0 ? affectedServicesInRepo.join(", ") : "All services"}

## Recommendations
${analysis.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join("\n")}

## Debugging Steps
${analysis.debuggingSteps.map((step, i) => `${i + 1}. ${step}`).join("\n")}

## Your Task
1. Clone the repository: https://github.com/${repoUrl}
2. Implement ALL the recommendations listed above in a single PR
3. Make the necessary code changes to address the root causes
4. Run tests if available (npm test, bun test, etc.) to verify your changes
5. Commit your changes with a descriptive message
6. Use GitHub CLI to open a pull request with the following:
   - Title: "fix: address infrastructure issues detected by monitoring agent"
   - Body should include the analysis summary, root causes, and what was fixed
   - Add appropriate labels if possible (e.g., --label bug,infrastructure)

Please proceed with implementing these fixes.
					`.trim();

						const response = await agent.session.prompt({
							path: { id: sessionResult.sessionId },
							body: {
								parts: [
									{
										type: "text",
										text: task,
									},
								],
							},
						});

						// Check for errors in response (SDK uses fields response style by default)
						if (response.error) {
							console.error(
								`OpenCode API error for ${repoUrl}:`,
								response.error,
							);
							return {
								success: false,
								error: `API error: ${JSON.stringify(response.error)}`,
							};
						}

						if (!response.data) {
							console.error(`No data in response for ${repoUrl}:`, response);
							return {
								success: false,
								error: "No data returned from OpenCode API",
							};
						}

						console.log(`Task sent to OpenCode agent for ${repoUrl}`);

						return {
							success: true,
						};
					} catch (error) {
						console.error(`Failed to send prompt for ${repoUrl}:`, error);
						return {
							success: false,
							error:
								error instanceof Error
									? error.message
									: "Unknown error occurred",
						};
					}
				},
			);

			opencodeResults.push({
				repoUrl,
				success: promptResult.success,
				sessionId: sessionResult.sessionId,
				workspaceDir: sessionResult.workspaceDir,
				affectedServices: affectedServicesInRepo,
				error: "error" in promptResult ? promptResult.error : undefined,
			});
		}

		return {
			success: true,
			analysis,
			opencodeResults,
		};
	},
);
