import { createClient } from "./generated";

export const railway = createClient({
	url: "https://backboard.railway.com/graphql/v2",
	headers: {
		Authorization: `Bearer ${process.env.RAILWAY_API_TOKEN}`,
	},
});

export const unwrapEdges = <T>(edges: { node: T }[]) =>
	edges.map((e) => e.node);
