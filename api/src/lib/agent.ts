import { createOpencodeClient } from "@opencode-ai/sdk";

/**
 * OpenCode client for creating isolated sessions and sending tasks to the agent
 */
export const agent = createOpencodeClient({
	baseUrl: process.env.OPENCODE_BASE_URL,
});
