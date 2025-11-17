import "./lib/env";

import { serve } from "inngest/bun";
import { workflowClient } from "./lib/workflow/client";
import { functions } from "./lib/workflow/functions";

const server = Bun.serve({
	routes: {
		"/api/workflows": serve({
			client: workflowClient,
			functions,
			signingKey: process.env.INNGEST_SIGNING_KEY,
		}),
	},
});

console.log(`Server running at ${server.url}`);
