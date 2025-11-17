import { railway } from "./client";
import { DEFAULT_HTTP_LOGS_LIMIT } from "./constants";

export type HttpLogEntry = {
	method: string;
	path: string;
	httpStatus: number | null;
	totalDuration: number | null;
	timestamp: string;
	responseDetails?: string | null;
};

type NullableDate = Date | null | undefined;

const toISOStringOrUndefined = (value: NullableDate) =>
	value ? value.toISOString() : undefined;

type HttpLogsQueryArgs = {
	deploymentId: string;
	limit?: number;
	startDate?: string;
	endDate?: string;
	beforeDate?: string;
	afterDate?: string;
	filter?: string;
};

export const getHttpLogs = async (
	deploymentId: string,
	options: {
		limit?: number;
		startDate?: Date;
		endDate?: Date;
		filter?: string;
		beforeDate?: Date;
		afterDate?: Date;
	} = {},
) => {
	const {
		limit = DEFAULT_HTTP_LOGS_LIMIT,
		startDate,
		endDate,
		filter,
		beforeDate,
		afterDate,
	} = options;

	const args: HttpLogsQueryArgs = {
		deploymentId,
		limit,
	};

	const start = toISOStringOrUndefined(startDate);
	const end = toISOStringOrUndefined(endDate);
	const before = toISOStringOrUndefined(beforeDate);
	const after = toISOStringOrUndefined(afterDate);

	if (start) {
		args.startDate = start;
	}
	if (end) {
		args.endDate = end;
	}
	if (before) {
		args.beforeDate = before;
	}
	if (after) {
		args.afterDate = after;
	}
	if (filter) {
		args.filter = filter;
	}

	const result = await railway.query({
		httpLogs: {
			__args: {
				...args,
			},
			httpStatus: true,
			method: true,
			path: true,
			responseDetails: true,
			timestamp: true,
			totalDuration: true,
		},
	});

	return result.httpLogs;
};
