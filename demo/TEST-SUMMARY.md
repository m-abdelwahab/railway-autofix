# Aggressive Performance Test Suite - Summary

## Overview
This test suite creates **EXTREME** resource usage across memory, CPU, and database services to trigger monitoring alerts and test auto-remediation systems.

## Test Scripts

### 1. `test-all-services.sh` - Main Aggressive Test
**Duration:** ~10-15 minutes  
**Purpose:** One-time aggressive load test with comprehensive error simulation

**What it does:**
- Leaks **300-500GB+ of memory** across multiple services
- Maxes out **CPU at 100%** for extended periods
- Creates **360,000 database records** with inefficient queries
- Simulates **hundreds of errors** (400s, 500s, 503s, 504s)

### 2. `continuous-load-test.sh` - Continuous Monitoring Test
**Duration:** Runs indefinitely (Ctrl+C to stop)  
**Purpose:** Sustained load for long-term monitoring validation

**What it does:**
- Runs 2-minute cycles continuously
- Mixed workload across all services
- Randomized request patterns
- Continuous error injection
- Health monitoring between cycles

---

## Service Modifications

### Memory Leak Service (Node.js)

#### Changes Made:
1. **10x more memory per request**
   - `/process`: Leaks **~15GB** per request (was ~1.5GB)
   - 10,000 entries × 1.5MB each
   
2. **Circular references increased**
   - `/circular`: Creates 1000 circular refs (was 100)
   - Each reference is 1.5MB (was 150KB)
   
3. **Aggressive background leaks**
   - Background task 1: **~15MB every 3 seconds**
   - Background task 2: **~5MB every 2 seconds** (cache)
   - **Combined: ~350MB per minute** continuously

4. **New sustained leak endpoint**
   - `POST /sustained-leak`: Configurable duration and interval
   - Default: 60 seconds, leaks 50MB/second

5. **Error simulation**
   - `POST /error-400`: Returns 400 error
   - `POST /error-500`: Returns 500 error
   - `POST /random-errors`: 60% failure rate (400, 500, 503)

#### Resource Impact:
- Single `/process` request: **15GB leaked**
- 20 concurrent requests: **300GB+ leaked**
- Background leak: **350MB/minute** (21GB/hour)
- Test suite total: **300-500GB+**

---

### CPU Intensive Service (Python/Flask)

#### Changes Made:
1. **Fibonacci increased**
   - Max limit: 45 (was 40) = **5.5x more work**
   - Runs **3 times per request** (was 1)
   
2. **Prime checking intensified**
   - Each number checked **10 times** (was 1)
   - Same inefficient O(n) algorithm
   
3. **Matrix multiplication boosted**
   - Default size: **300×300** (was 100×100) = **27x more work**
   - Runs **twice** (was once)
   
4. **Bubble sort doubled**
   - Default size: **5000 elements** (was 1000)
   - Sorts **twice** (double inefficiency)
   
5. **CPU bomb enhanced**
   - Duration: **10 seconds** (was 5)
   - Threads: **8** (was 4)
   - Work per iteration: **100k iterations** (was 10k)
   - Cubed instead of squared: **10x more compute**

6. **Background burner intensified**
   - **100k SHA256 hashes** (was 10k)
   - Interval: **0.05s** (was 0.1s)
   - **Runs continuously**

7. **New sustained CPU endpoint**
   - `POST /sustained-cpu`: Configurable duration and intensity
   - Scale: 1-10 intensity
   - Runs in background thread

8. **Error simulation**
   - `GET/POST /error-400`: Returns 400 error
   - `GET/POST /error-500`: Returns 500 error
   - `GET/POST /random-errors`: 60% failure rate (400, 500, 503, 504)

#### Resource Impact:
- Fibonacci(40): ~1-2 seconds, Fibonacci(45): **~30 seconds**
- Prime check: **10x longer** than before
- Matrix multiply: **54x longer** (27x size + 2x runs)
- CPU bomb: **80x more work** (2x duration × 2x threads × 10x iterations × 2x compute)
- Background: **10x more continuous CPU usage**

---

### Database Heavy Service (Node.js + PostgreSQL)

#### Changes Made:
1. **10x more data seeded**
   - Users: **10,000** (was 1,000)
   - Posts: **50,000** (was 5,000)
   - Comments: **100,000** (was 10,000)
   - Likes: **200,000** (was 20,000)
   - **Total: 360,000 records**

2. **N+1 queries intensified**
   - `GET /posts-with-details`: Fetches **1000 posts** (was 100)
   - Each post triggers 3 queries
   - Each comment triggers 1 query
   - **Average: 3000+ queries per request**

3. **Longer content**
   - Posts have longer content strings
   - Comments have longer content
   - Increases storage and transfer size

4. **All existing inefficiencies remain**
   - No connection pooling
   - No indexes on foreign keys
   - Cartesian product JOINs
   - Full table scans
   - Lock contention patterns
   - 30% connection leak rate

5. **Error simulation**
   - `GET/POST /error-400`: Returns 400 error
   - `GET/POST /error-500`: Returns 500 error
   - `GET /random-errors`: 55% failure rate (400, 500, 503, 504)

#### Resource Impact:
- Seeding: **Takes 5-10 minutes** (360k inserts)
- N+1 query: **10-30 seconds per request** (1000 posts)
- Heavy JOIN: **30-60+ seconds** (cartesian products)
- Database size: **~500MB-1GB**
- Connection exhaustion: **Highly likely**

---

## Test Execution Summary

### Main Test (`test-all-services.sh`)

**Memory Service Tests:**
- Phase 1: 20 concurrent massive leaks = **300GB+**
- Phase 2: 10 concurrent circular refs = **15GB**
- Phase 3: 60s sustained load = **~12GB**
- Phase 4: 2-min background leak = **~6GB**
- Error tests: 110 requests with 60-70% failures

**CPU Service Tests:**
- Phase 1: 15 concurrent Fibonacci = **7-8 minutes total compute**
- Phase 2: 15 concurrent prime checks = **8-10 minutes total**
- Phase 3: 8 concurrent matrix ops = **20+ minutes total**
- Phase 4: 5 CPU bombs (staggered) = **15s each, overlapping**
- Phase 5: 6 concurrent sorts = **15-30 minutes total**
- Phase 6: 3 sustained CPU loads = **2 minutes at 80-100% CPU**
- Error tests: 110 requests with 60-70% failures

**Database Tests:**
- Phase 1: Seed 360k records
- Phase 2: 10 concurrent N+1 queries
- Phase 3: 10 concurrent heavy JOINs
- Phase 4: 15 concurrent unindexed searches
- Phase 5: 5 concurrent lock contention tests
- Phase 6: 5 concurrent fetch-all requests
- Error tests: 110 requests with 55-60% failures

**Total Errors Generated:** ~330 error responses across all services

---

## Continuous Test (`continuous-load-test.sh`)

**Per Cycle (2 minutes):**
- Memory: 10 process requests + sustained leak
- CPU: 8 mixed intensive tasks + 2 sustained loads
- DB: 5 mixed query operations
- Errors: 45 error requests across all services

**Per Hour:**
- ~30 cycles
- ~300 memory leak requests = **4.5TB leaked**
- ~240 CPU intensive tasks
- ~150 database operations
- ~1350 error requests

---

## Expected Monitoring Alerts

### Memory Service
✅ Memory usage > 500MB (warning)  
✅ Memory usage > 1GB (critical)  
✅ Heap usage > 80%  
✅ Memory leak detected  
✅ OOM (Out of Memory) imminent  
✅ High error rate (60%)

### CPU Service
✅ CPU > 70% (warning)  
✅ CPU > 90% (critical)  
✅ CPU sustained at 100%  
✅ Response time > 5s  
✅ Response time > 30s  
✅ High error rate (60%)

### Database Service
✅ Query time > 1s (warning)  
✅ Query time > 5s (critical)  
✅ Connection count high  
✅ Connection pool exhausted  
✅ Slow query log full  
✅ Lock timeouts  
✅ Deadlocks detected  
✅ High error rate (55%)

### All Services
✅ High HTTP error rate (400s, 500s)  
✅ Service degradation  
✅ Response time degradation  
✅ Potential service crash

---

## How to Run

### Quick Aggressive Test
```bash
./test-all-services.sh
```
Duration: ~10-15 minutes

### Continuous Monitoring Test
```bash
./continuous-load-test.sh
```
Duration: Runs indefinitely (Ctrl+C to stop)

### Individual Service Testing

**Memory leak:**
```bash
curl -X POST https://memory-leak-service-production.up.railway.app/process \
  -H "Content-Type: application/json" \
  -d '{"data": "test"}'
```

**Sustained memory leak (60 seconds):**
```bash
curl -X POST https://memory-leak-service-production.up.railway.app/sustained-leak \
  -H "Content-Type: application/json" \
  -d '{"duration": 60, "intervalMs": 1000}'
```

**CPU intensive:**
```bash
curl https://cpu-intensive-service-production.up.railway.app/fibonacci/42
```

**Sustained CPU (60 seconds, high intensity):**
```bash
curl -X POST https://cpu-intensive-service-production.up.railway.app/sustained-cpu \
  -H "Content-Type: application/json" \
  -d '{"duration": 60, "intensity": 9}'
```

**Database heavy:**
```bash
curl https://db-heavy-service-production.up.railway.app/posts-with-details
```

**Random errors:**
```bash
curl -X POST https://memory-leak-service-production.up.railway.app/random-errors
```

---

## Cleanup

### Reset Database
To clear the 360k records:
```sql
TRUNCATE TABLE likes, comments, posts, users CASCADE;
```

### Restart Services
Memory and CPU services will need restart to clear leaked memory:
```bash
railway restart memory-leak-service
railway restart cpu-intensive-service
```

---

## Notes

⚠️ **WARNING:** These tests are EXTREMELY aggressive and will:
- Leak hundreds of GB of memory
- Max out CPU for extended periods
- Create massive database load
- Generate hundreds of errors
- Potentially crash services
- Cost money in cloud resources

💡 **Use responsibly:** Only run these tests in isolated test environments with proper monitoring in place.

🎯 **Purpose:** These tests are designed to validate that your monitoring system can detect and alert on severe performance issues and high error rates.

