import "./lib/env";
import { boss } from "./lib/workflow/client";
import { MONITOR_PROJECT_HEALTH_WORKFLOW_CRON } from "./lib/workflow/constants";
import { generateFix } from "./lib/workflow/functions/generate-fix";
import { monitorProjectHealth } from "./lib/workflow/functions/monitor-project-health";
import { pullServiceContext } from "./lib/workflow/functions/pull-service-context";

async function start() {
	try {
		await boss.start();
		console.log("pg-boss started");

		// Register workers
		await boss.work("agent.monitor-project-health", async () => {
			console.log("Running monitor-project-health");
			await monitorProjectHealth();
		});

		await boss.work("agent.pull-service-context", async (job) => {
			console.log("Running pull-service-context", job.id);
			await pullServiceContext(job);
		});

		await boss.work("agent.generate-fix", async (job) => {
			console.log("Running generate-fix", job.id);
			await generateFix(job);
		});

		// Schedule monitor-project-health every 10 minutes
		await boss.schedule(
			"agent.monitor-project-health",
			MONITOR_PROJECT_HEALTH_WORKFLOW_CRON,
		);
		console.log("Scheduled monitor-project-health");
	} catch (error) {
		console.error("Error starting pg-boss:", error);
		process.exit(1);
	}
}

start();

const server = Bun.serve({
	port: process.env.PORT || 3000,
	fetch(req) {
		if (req.url.endsWith("/health")) {
			return new Response("OK");
		}
		return new Response("Not Found", { status: 404 });
	},
});

console.log(`Server running at ${server.url}`);
