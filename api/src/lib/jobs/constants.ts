export const DEFAULT_QUERY_WINDOW_MS = 30 * 60 * 1000; // 30 minutes
export const MONITOR_PROJECT_HEALTH_JOB_CRON = "*/10 * * * *"; // every 10 minutes

// Infrastructure Issue Detection Thresholds
// Resource Usage (CPU and Memory) - Percentage-based thresholds
export const RESOURCE_WARNING_THRESHOLD_PERCENT = 70; // 70% of max resource limit
export const RESOURCE_CRITICAL_THRESHOLD_PERCENT = 90; // 90% of max resource limit

// HTTP 5xx Error Rate (percentage of 5xx responses - server errors)
export const ERROR_5XX_RATE_WARNING_THRESHOLD = 1; // 1%
export const ERROR_5XX_RATE_CRITICAL_THRESHOLD = 5; // 5%

// HTTP 4xx Error Rate (percentage of 4xx responses - client errors)
export const ERROR_4XX_RATE_WARNING_THRESHOLD = 10; // 10%
export const ERROR_4XX_RATE_CRITICAL_THRESHOLD = 25; // 25%

// HTTP Latency p95 (milliseconds)
export const LATENCY_P95_WARNING_THRESHOLD = 1000; // 1 second
export const LATENCY_P95_CRITICAL_THRESHOLD = 3000; // 3 seconds
