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
MEMORY_SERVICE="https://problematic-service-production.up.railway.app"

# Configuration
CYCLE_DURATION=120  # Each cycle runs for 2 minutes
MEMORY_REQUESTS_PER_CYCLE=100

echo -e "${YELLOW}Configuration:${NC}"
echo "  Cycle Duration: ${CYCLE_DURATION}s"
echo "  Memory requests per cycle: $MEMORY_REQUESTS_PER_CYCLE"
echo "  ${GREEN}Target: Memory Leak Service ONLY${NC}"
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
    
    # Error simulation
    echo -e "${YELLOW}[Errors]${NC} Simulating errors..."
    for i in $(seq 1 5); do
        (
            rand=$((RANDOM % 3))
            case $rand in
                0) curl -s -m 10 -X POST $MEMORY_SERVICE/random-errors > /dev/null 2>&1 ;;
                1) curl -s -m 10 -X POST $MEMORY_SERVICE/error-400 > /dev/null 2>&1 ;;
                2) curl -s -m 10 -X POST $MEMORY_SERVICE/error-500 > /dev/null 2>&1 ;;
            esac
        ) &
    done
    
    # Health check
    echo -e "${GREEN}[Status]${NC} Checking health..."
    mem_health=$(curl -s -m 5 $MEMORY_SERVICE/health 2>/dev/null | jq -r '.memory.heapUsed' 2>/dev/null || echo "N/A")
    
    echo "  Memory Heap Used: $mem_health"
    
    echo -e "${GREEN}Cycle $cycle complete. Waiting for next cycle...${NC}"
    
    # Wait for cycle duration
    sleep $CYCLE_DURATION
    
    ((cycle++))
done

