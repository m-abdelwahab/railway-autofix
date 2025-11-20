import { Queue } from "bullmq";
import { redisConnection } from "./client";

const defaultJobOptions = {
	attempts: 3, // Retry 3 times
	backoff: {
		type: "exponential",
		delay: 1000, // Wait 1s, then 2s, then 4s
	},
	removeOnComplete: true, // Keep Redis clean
	removeOnFail: false, // Keep failed jobs for debugging
};

export const monitorQueue = new Queue("agent.monitor-project-health", {
	connection: redisConnection,
	defaultJobOptions,
});

export const pullContextQueue = new Queue("agent.pull-service-context", {
	connection: redisConnection,
	defaultJobOptions,
});

export const generateFixQueue = new Queue("agent.generate-fix", {
	connection: redisConnection,
	defaultJobOptions,
});
