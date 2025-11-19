import { Worker } from "bullmq";
import { redisConnection } from "./client";
import { type GenerateFixData, generateFix } from "./handlers/generate-fix";
import { monitorProjectHealth } from "./handlers/monitor-project-health";
import {
	type PullServiceContextData,
	pullServiceContext,
} from "./handlers/pull-service-context";
import { generateFixQueue, monitorQueue, pullContextQueue } from "./queues";

export const monitorWorker = new Worker(
	monitorQueue.name,
	async () => {
		console.log("Running monitor-project-health");
		await monitorProjectHealth();
	},
	{ connection: redisConnection },
);

export const pullContextWorker = new Worker<PullServiceContextData>(
	pullContextQueue.name,
	async (job) => {
		console.log("Running pull-service-context", job.id);
		await pullServiceContext(job);
	},
	{ connection: redisConnection },
);

export const generateFixWorker = new Worker<GenerateFixData>(
	generateFixQueue.name,
	async (job) => {
		console.log("Running generate-fix", job.id);
		await generateFix(job);
	},
	{ connection: redisConnection },
);

export const workers = [monitorWorker, pullContextWorker, generateFixWorker];
