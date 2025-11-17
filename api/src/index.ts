import "./lib/env";

import { serve } from "inngest/bun";
import { workflowClient } from "./lib/workflow/client";
import { functions } from "./lib/workflow/functions";

const server = Bun.serve({
	routes: {
		"/api/inngest": serve({ client: workflowClient, functions }),
	},
});

console.log(`Server running at ${server.url}`);
