import { createOpencodeServer } from "@opencode-ai/sdk";

let server: Awaited<ReturnType<typeof createOpencodeServer>> | null = null;

async function shutdown(reason: string, exitCode: number = 1) {
	console.error(`Shutting down: ${reason}`);
	if (server) {
		try {
			server.close();
			console.log("Server closed successfully");
		} catch (error) {
			console.error("Error closing server:", error);
		}
	}
	process.exit(exitCode);
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
	shutdown("Unhandled promise rejection", 1);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
	console.error("Uncaught Exception:", error);
	shutdown("Uncaught exception", 1);
});

// Handle graceful shutdown signals
process.on("SIGINT", () => shutdown("SIGINT signal received", 0));
process.on("SIGTERM", () => shutdown("SIGTERM signal received", 0));

try {
	server = await createOpencodeServer({
		port: 4096,
		hostname: "0.0.0.0",
		config: {
			$schema: "https://opencode.ai/config.json",
			provider: {
				openai: {
					options: {
						apiKey: process.env.OPENAI_API_KEY,
					},
				},
			},
		},
	});

	console.log(`Server started successfully at ${server.url}`);
} catch (error) {
	console.error("Failed to start server:", error);
	await shutdown("Server initialization failed", 1);
}
