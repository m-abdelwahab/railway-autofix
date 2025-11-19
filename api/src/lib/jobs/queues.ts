import { Queue } from "bullmq";
import { redisConnection } from "./client";

export const monitorQueue = new Queue("agent.monitor-project-health", {
	connection: redisConnection,
});

export const pullContextQueue = new Queue("agent.pull-service-context", {
	connection: redisConnection,
});

export const generateFixQueue = new Queue("agent.generate-fix", {
	connection: redisConnection,
});
