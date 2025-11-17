import { z } from "zod";

const zodEnv = z.object({
	RAILWAY_API_TOKEN: z.string(),
	OPENAI_API_KEY: z.string(),
	OPENCODE_BASE_URL: z.string(),
	INNGEST_EVENT_KEY: z.string(),
	INNGEST_SIGNING_KEY: z.string(),
	INNGEST_BASE_URL: z.string(),
	// Provided by Railway
	RAILWAY_PROJECT_ID: z.string(),
	RAILWAY_ENVIRONMENT_ID: z.string(),
	RAILWAY_ENVIRONMENT_NAME: z.string(),
	RAILWAY_PROJECT_NAME: z.string(),
});

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof zodEnv> {}
	}
}

try {
	zodEnv.parse(process.env);
} catch (err) {
	if (err instanceof z.ZodError) {
		const errorMessage = err.issues
			.map((issue) => `${issue.path.join(".")}: ${issue.message}`)
			.join("\n  ");
		throw new Error(`Missing environment variables:\n  ${errorMessage}`);
	}
}
