#!/bin/bash

echo "=========================================="
echo "Railway CONTINUOUS Load Test"
echo "=========================================="
echo ""
echo "⚠️  WARNING: This will run indefinitely!"
echo "   Press Ctrl+C to stop"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Service URLs
MEMORY_SERVICE="https://memory-leak-service-production.up.railway.app"
CPU_SERVICE="https://cpu-intensive-service-production.up.railway.app"
DB_SERVICE="https://db-heavy-service-production.up.railway.app"

# Configuration
CYCLE_DURATION=120  # Each cycle runs for 2 minutes
MEMORY_REQUESTS_PER_CYCLE=10
CPU_REQUESTS_PER_CYCLE=8
DB_REQUESTS_PER_CYCLE=5

echo -e "${YELLOW}Configuration:${NC}"
echo "  Cycle Duration: ${CYCLE_DURATION}s"
echo "  Memory requests per cycle: $MEMORY_REQUESTS_PER_CYCLE"
echo "  CPU requests per cycle: $CPU_REQUESTS_PER_CYCLE"
echo "  DB requests per cycle: $DB_REQUESTS_PER_CYCLE"
echo ""
echo "Starting in 3 seconds..."
sleep 3

cycle=1

while true; do
    echo ""
    echo -e "${BLUE}===== CYCLE $cycle - $(date) =====${NC}"
    
    # Memory Service Load
    echo -e "${YELLOW}[Memory]${NC} Triggering memory leaks..."
    for i in $(seq 1 $MEMORY_REQUESTS_PER_CYCLE); do
        (
            curl -s -m 30 -X POST $MEMORY_SERVICE/process \
                -H "Content-Type: application/json" \
                -d '{"data": "continuous"}' > /dev/null 2>&1
        ) &
    done
    
    # Start sustained leak
    curl -s -X POST $MEMORY_SERVICE/sustained-leak \
        -H "Content-Type: application/json" \
        -d "{\"duration\": $CYCLE_DURATION, \"intervalMs\": 1000}" > /dev/null 2>&1 &
    
    # CPU Service Load
    echo -e "${YELLOW}[CPU]${NC} Triggering CPU intensive tasks..."
    for i in $(seq 1 $CPU_REQUESTS_PER_CYCLE); do
        (
            # Mix of different CPU tasks
            case $((i % 4)) in
                0)
                    curl -s -m 60 $CPU_SERVICE/fibonacci/$((38 + RANDOM % 5)) > /dev/null 2>&1
                    ;;
                1)
                    curl -s -m 60 -X POST $CPU_SERVICE/prime-check \
                        -H "Content-Type: application/json" \
                        -d '{"numbers": [10000019, 10000079, 10000103]}' > /dev/null 2>&1
                    ;;
                2)
                    curl -s -m 90 -X POST $CPU_SERVICE/matrix-multiply \
                        -H "Content-Type: application/json" \
                        -d '{"size": 300}' > /dev/null 2>&1
                    ;;
                3)
                    curl -s -m 60 -X POST $CPU_SERVICE/sort \
                        -H "Content-Type: application/json" \
                        -d '{"size": 5000}' > /dev/null 2>&1
                    ;;
            esac
        ) &
    done
    
    # Start sustained CPU
    for i in $(seq 1 2); do
        curl -s -X POST $CPU_SERVICE/sustained-cpu \
            -H "Content-Type: application/json" \
            -d "{\"duration\": $CYCLE_DURATION, \"intensity\": $((6 + RANDOM % 3))}" > /dev/null 2>&1 &
    done
    
    # Database Service Load
    echo -e "${YELLOW}[Database]${NC} Triggering database operations..."
    for i in $(seq 1 $DB_REQUESTS_PER_CYCLE); do
        (
            # Mix of different DB operations
            case $((i % 5)) in
                0)
                    curl -s -m 90 $DB_SERVICE/posts-with-details > /dev/null 2>&1
                    ;;
                1)
                    curl -s -m 90 $DB_SERVICE/heavy-join > /dev/null 2>&1
                    ;;
                2)
                    curl -s -m 60 "$DB_SERVICE/search-unindexed?email=user$((RANDOM % 10000))" > /dev/null 2>&1
                    ;;
                3)
                    curl -s -m 60 $DB_SERVICE/fetch-all > /dev/null 2>&1
                    ;;
                4)
                    curl -s -m 60 -X POST $DB_SERVICE/create-lock-contention > /dev/null 2>&1
                    ;;
            esac
        ) &
    done
    
    # Error simulation (20% of requests)
    echo -e "${YELLOW}[Errors]${NC} Simulating errors..."
    for service_url in "$MEMORY_SERVICE" "$CPU_SERVICE" "$DB_SERVICE"; do
        for i in $(seq 1 5); do
            (
                rand=$((RANDOM % 3))
                case $rand in
                    0) curl -s -m 10 -X POST $service_url/random-errors > /dev/null 2>&1 ;;
                    1) curl -s -m 10 -X POST $service_url/error-400 > /dev/null 2>&1 ;;
                    2) curl -s -m 10 -X POST $service_url/error-500 > /dev/null 2>&1 ;;
                esac
            ) &
        done
    done
    
    # Health check
    echo -e "${GREEN}[Status]${NC} Checking health..."
    mem_health=$(curl -s -m 5 $MEMORY_SERVICE/health 2>/dev/null | jq -r '.memory.heapUsed' 2>/dev/null || echo "N/A")
    cpu_health=$(curl -s -m 5 $CPU_SERVICE/health 2>/dev/null | jq -r '.cpu.system_percent' 2>/dev/null || echo "N/A")
    db_health=$(curl -s -m 5 $DB_SERVICE/health 2>/dev/null | jq -r '.database' 2>/dev/null || echo "N/A")
    
    echo "  Memory: $mem_health | CPU: $cpu_health% | DB: $db_health"
    
    echo -e "${GREEN}Cycle $cycle complete. Waiting for next cycle...${NC}"
    
    # Wait for cycle duration
    sleep $CYCLE_DURATION
    
    ((cycle++))
done

