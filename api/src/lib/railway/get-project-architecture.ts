import { railway, unwrapEdges } from "./client";

export type ServiceResourceLimits = {
	maxCpu: number | null;
	maxMemory: number | null;
};

export const getProjectArchitecture = async () => {
	const result = await railway.query({
		project: {
			__args: {
				id: process.env.RAILWAY_PROJECT_ID,
			},
			id: true,
			name: true,
			environments: {
				edges: {
					node: {
						id: true,
						name: true,
						serviceInstances: {
							edges: {
								node: {
									id: true,
									serviceId: true,
									serviceName: true,
									builder: true,
									region: true,
									rootDirectory: true,
									buildCommand: true,
									startCommand: true,
									dockerfilePath: true,
									numReplicas: true,
									source: {
										image: true,
										repo: true,
									},
									latestDeployment: {
										id: true,
										status: true,
									},
								},
							},
						},
						volumeInstances: {
							edges: {
								node: {
									id: true,
									volumeId: true,
									currentSizeMB: true,
									state: true,
									region: true,
									serviceId: true,
									environmentId: true,
								},
							},
						},
					},
				},
			},
		},
	});

	const environments = unwrapEdges(result.project.environments.edges ?? []);
	const targetEnvironment = environments.find(
		(env) => env.name === process.env.RAILWAY_ENVIRONMENT_NAME,
	);

	if (!targetEnvironment) {
		throw new Error(
			`Environment "${process.env.RAILWAY_ENVIRONMENT_NAME}" not found`,
		);
	}

	const allServices = unwrapEdges(
		targetEnvironment.serviceInstances.edges ?? [],
	);
	const allVolumes = unwrapEdges(targetEnvironment.volumeInstances.edges ?? []);

	// Fetch resource limits for all services
	const serviceLimitsMap = new Map<string, ServiceResourceLimits>();
	for (const service of allServices) {
		try {
			const limitsResult = await railway.query({
				serviceInstanceLimits: {
					__args: {
						environmentId: targetEnvironment.id,
						serviceId: service.serviceId,
					},
				},
			});

			const limits = limitsResult.serviceInstanceLimits as any;
			serviceLimitsMap.set(service.serviceId, {
				maxCpu: limits?.maxCpu ?? null,
				maxMemory: limits?.maxMemory ?? null,
			});
		} catch (error) {
			console.error(
				`Failed to fetch limits for service ${service.serviceName}:`,
				error,
			);
			// Set default limits if query fails
			serviceLimitsMap.set(service.serviceId, {
				maxCpu: null,
				maxMemory: null,
			});
		}
	}

	// Databases are service+volume pairs
	const databases = allVolumes
		.map((volume) => {
			const service = allServices.find((s) => s.serviceId === volume.serviceId);
			return service ? { service, volume } : null;
		})
		.filter((db): db is NonNullable<typeof db> => db !== null);

	// Get IDs of services and volumes that are part of databases
	const databaseServiceIds = new Set(
		databases.map((db) => db.service.serviceId),
	);
	const databaseVolumeIds = new Set(databases.map((db) => db.volume.volumeId));

	// Services = only non-database services, enriched with resource limits
	const services = allServices
		.filter((service) => !databaseServiceIds.has(service.serviceId))
		.map((service) => ({
			...service,
			resourceLimits: serviceLimitsMap.get(service.serviceId) ?? {
				maxCpu: null,
				maxMemory: null,
			},
		}));

	// Databases enriched with resource limits
	const databasesWithLimits = databases.map((db) => ({
		...db,
		service: {
			...db.service,
			resourceLimits: serviceLimitsMap.get(db.service.serviceId) ?? {
				maxCpu: null,
				maxMemory: null,
			},
		},
	}));

	// Volumes = only orphaned volumes (not attached to any service)
	const volumes = allVolumes.filter(
		(volume) => !databaseVolumeIds.has(volume.volumeId),
	);

	const architecture = {
		projectName: result.project.name,
		projectId: result.project.id,
		environmentName: targetEnvironment.name,
		environmentId: targetEnvironment.id,
		services,
		volumes,
		databases: databasesWithLimits,
	};

	return architecture;
};
