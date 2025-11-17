import { EventSchemas, Inngest } from "inngest";
import type { ProjectArchitecture } from "./functions/monitor-project-health/log-architecture";
import type { ServiceContext } from "./types";

type Events = {
	"agent/monitor-project-health": {
		data: Record<string, never>;
	};
	"agent/pull-service-context": {
		data: {
			architectureSummary: string;
			issuesSummary: string;
			affectedServices?: ProjectArchitecture["services"];
		};
	};
	"agent/generate-fix": {
		data: {
			architectureSummary: string;
			issuesSummary: string;
			serviceContexts: ServiceContext[];
		};
	};
};

export const workflowClient = new Inngest({
	id: "agent",
	schemas: new EventSchemas().fromRecord<Events>(),
	eventKey: process.env.INNGEST_EVENT_KEY,
	baseUrl: process.env.INNGEST_BASE_URL,
	isDev: true,
});
