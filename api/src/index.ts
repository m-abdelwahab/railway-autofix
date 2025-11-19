import type { Job } from "pg-boss";
import "./lib/env";
import { boss } from "./lib/workflow/client";
import { MONITOR_PROJECT_HEALTH_WORKFLOW_CRON } from "./lib/workflow/constants";
import {
	type GenerateFixData,
	generateFix,
} from "./lib/workflow/functions/generate-fix";
import { monitorProjectHealth } from "./lib/workflow/functions/monitor-project-health";
import {
	type PullServiceContextData,
	pullServiceContext,
} from "./lib/workflow/functions/pull-service-context";

async function start() {
	try {
		await boss.start();
		console.log("pg-boss started");

		// Create queues
		await boss.createQueue("agent.monitor-project-health");
		await boss.createQueue("agent.pull-service-context");
		await boss.createQueue("agent.generate-fix");

		// Register workers
		await boss.work("agent.monitor-project-health", async () => {
			console.log("Running monitor-project-health");
			await monitorProjectHealth();
		});

		await boss.work("agent.pull-service-context", async (job: any) => {
			const j = job as Job<PullServiceContextData>;
			console.log("Running pull-service-context", j.id);
			await pullServiceContext(j);
		});

		await boss.work("agent.generate-fix", async (job: any) => {
			const j = job as Job<GenerateFixData>;
			console.log("Running generate-fix", j.id);
			await generateFix(j);
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
	port: process.env["PORT"] || 3000,
	fetch(req) {
		if (req.url.endsWith("/health")) {
			return new Response("OK");
		}
		return new Response("Not Found", { status: 404 });
	},
});

console.log(`Server running at ${server.url}`);
