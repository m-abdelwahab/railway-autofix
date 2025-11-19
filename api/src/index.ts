import "./lib/env";
import { MONITOR_PROJECT_HEALTH_JOB_CRON } from "./lib/jobs/constants";
import { monitorQueue } from "./lib/jobs/queues";
import "./lib/jobs/workers";

async function start() {
	try {
		// Schedule monitor-project-health
		await monitorQueue.add(
			"monitor-project-health",
			{},
			{
				repeat: {
					pattern: MONITOR_PROJECT_HEALTH_JOB_CRON,
				},
			},
		);
		console.log("Scheduled monitor-project-health");
	} catch (error) {
		console.error("Error starting background jobs:", error);
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
