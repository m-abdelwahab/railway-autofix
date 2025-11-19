import type { LogEntry } from "src/lib/railway/get-build-logs";
import type { HttpLogEntry } from "src/lib/railway/get-http-logs";

export type ServiceContext = {
	serviceName: string;
	deploymentId: string;
	repoUrl: string | null;
	buildLogs: LogEntry[];
	deploymentLogs: LogEntry[];
	httpLogs: HttpLogEntry[];
};
