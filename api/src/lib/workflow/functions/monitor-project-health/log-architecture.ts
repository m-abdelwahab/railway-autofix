/**
 * Type definitions for architecture data
 */
type Service = {
	serviceId: string;
	serviceName: string;
	builder: string | null;
	region: string | null;
	rootDirectory: string | null;
	buildCommand: string | null;
	startCommand: string | null;
	dockerfilePath: string | null;
	numReplicas: number | null;
	source: {
		image: string | null;
		repo: string | null;
	} | null;
	latestDeployment: {
		id: string;
		status: string;
	} | null;
};

type Volume = {
	volumeId: string;
	currentSizeMB: number | null;
	state: string | null;
	region: string | null;
	serviceId: string | null;
	environmentId: string;
};

type Database = {
	service: Service;
	volume: Volume;
};

export type ProjectArchitecture = {
	projectName: string;
	projectId: string;
	environmentName: string;
	environmentId: string;
	services: Service[];
	volumes: Volume[];
	databases: Database[];
};

/**
 * Formats deployment status with appropriate indicator
 */
function formatStatus(status: string): string {
	const statusMap: Record<string, string> = {
		SUCCESS: "✓",
		DEPLOYING: "⟳",
		FAILED: "✗",
		CRASHED: "✗",
		BUILDING: "⟳",
	};
	return statusMap[status] || status;
}

/**
 * Logs project architecture in a token-efficient, structured plain-text format
 * optimized for LLM consumption
 */
export function logProjectArchitecture(
	architecture: ProjectArchitecture,
): string {
	const lines: string[] = [];

	lines.push("\n=== PROJECT ARCHITECTURE ===");
	lines.push(`Project: ${architecture.projectName}`);
	lines.push(`Environment: ${architecture.environmentName}`);
	lines.push(
		`Services: ${architecture.services.length} | Databases: ${architecture.databases.length} | Volumes: ${architecture.volumes.length}\n`,
	);

	// Log Services
	if (architecture.services.length > 0) {
		lines.push("SERVICES:");
		for (const service of architecture.services) {
			const status = service.latestDeployment
				? formatStatus(service.latestDeployment.status)
				: "No deployment";
			const replicas = service.numReplicas ? `x${service.numReplicas}` : "x1";

			lines.push(`  ${service.serviceName} [${status}] ${replicas}`);

			// Source information
			if (service.source?.repo) {
				lines.push(`    Source: GitHub (${service.source.repo})`);
			} else if (service.source?.image) {
				lines.push(`    Source: Docker (${service.source.image})`);
			}

			// Build configuration
			if (service.builder) {
				lines.push(`    Builder: ${service.builder}`);
			}
			if (service.rootDirectory) {
				lines.push(`    Root: ${service.rootDirectory}`);
			}
			if (service.buildCommand) {
				lines.push(`    Build: ${service.buildCommand}`);
			}
			if (service.startCommand) {
				lines.push(`    Start: ${service.startCommand}`);
			}
			if (service.dockerfilePath) {
				lines.push(`    Dockerfile: ${service.dockerfilePath}`);
			}

			// Deployment information
			if (service.region) {
				lines.push(`    Region: ${service.region}`);
			}

			lines.push(""); // Empty line between services
		}
	}

	// Log Databases
	if (architecture.databases.length > 0) {
		lines.push("DATABASES:");
		for (const database of architecture.databases) {
			const status = database.service.latestDeployment
				? formatStatus(database.service.latestDeployment.status)
				: "No deployment";
			const volumeSize = database.volume.currentSizeMB
				? `${(database.volume.currentSizeMB / 1024).toFixed(2)} GB`
				: "Unknown size";

			lines.push(`  ${database.service.serviceName} [${status}]`);
			lines.push(`    Volume: ${volumeSize}`);

			if (database.volume.state) {
				lines.push(`    State: ${database.volume.state}`);
			}
			if (database.volume.region) {
				lines.push(`    Region: ${database.volume.region}`);
			}

			// Source information
			if (database.service.source?.image) {
				lines.push(`    Image: ${database.service.source.image}`);
			}

			lines.push(""); // Empty line between databases
		}
	}

	// Log Orphaned Volumes (if any)
	if (architecture.volumes.length > 0) {
		lines.push("ORPHANED VOLUMES:");
		for (const volume of architecture.volumes) {
			const volumeSize = volume.currentSizeMB
				? `${(volume.currentSizeMB / 1024).toFixed(2)} GB`
				: "Unknown size";
			lines.push(`  Volume ${volume.volumeId.slice(0, 8)}... [${volumeSize}]`);
			if (volume.state) {
				lines.push(`    State: ${volume.state}`);
			}
			if (volume.region) {
				lines.push(`    Region: ${volume.region}`);
			}
			lines.push(""); // Empty line between volumes
		}
	}

	// Summary
	const totalDeployments = [
		...architecture.services,
		...architecture.databases.map((db) => db.service),
	].filter((s) => s.latestDeployment).length;
	const activeDeployments = [
		...architecture.services,
		...architecture.databases.map((db) => db.service),
	].filter((s) => s.latestDeployment?.status === "SUCCESS").length;
	const totalReplicas = architecture.services.reduce(
		(sum, s) => sum + (s.numReplicas ?? 1),
		0,
	);

	lines.push("Summary:");
	lines.push(`  Total Services: ${architecture.services.length}`);
	lines.push(`  Total Databases: ${architecture.databases.length}`);
	lines.push(`  Total Replicas: ${totalReplicas}`);
	lines.push(`  Active Deployments: ${activeDeployments}/${totalDeployments}`);
	lines.push("============================\n");

	return lines.join("\n");
}
