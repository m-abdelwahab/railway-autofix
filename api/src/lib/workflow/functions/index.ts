import { generateFix } from "./generate-fix";
import { monitorProjectHealth } from "./monitor-project-health";
import { pullServiceContext } from "./pull-service-context";

export const functions = [monitorProjectHealth, pullServiceContext, generateFix];
