# Railway Performance Test Suite 🔥

**EXTREMELY AGGRESSIVE** performance and error testing for monitoring validation.

## 🚀 Quick Start

```bash
# Run aggressive one-time test (10-15 minutes)
./test-all-services.sh

# Run continuous load test (runs indefinitely)
./continuous-load-test.sh
```

## 📊 What Gets Tested

| Service | Memory Impact | CPU Impact | Error Rate |
|---------|--------------|------------|------------|
| **Memory Leak** | 300-500GB+ leaked | Low | 60% errors |
| **CPU Intensive** | Low | 100% sustained | 60% errors |
| **Database** | 360k records | High queries | 55% errors |

## 🎯 Key Features

### Memory Service
- ✅ **15GB leaked per request** (10x original)
- ✅ **350MB/minute background leak** (continuous)
- ✅ Sustained leak endpoint for controlled tests
- ✅ Random errors (400, 500, 503)

### CPU Service
- ✅ **10x more compute-intensive** algorithms
- ✅ **100% CPU utilization** sustained
- ✅ Background SHA256 burner (continuous)
- ✅ Sustained CPU endpoint for controlled tests
- ✅ Random errors (400, 500, 503, 504)

### Database Service
- ✅ **360,000 records** (10x original)
- ✅ **1000 posts per N+1 query** (10x original)
- ✅ Extreme inefficiencies (no pooling, no indexes)
- ✅ Lock contention and deadlocks
- ✅ Random errors (400, 500, 503, 504)

## 📁 Files

```
demo/
├── services/
│   ├── memory-leak-service/      # Node.js memory leak simulator
│   ├── cpu-intensive-service/    # Python CPU intensive simulator
│   └── db-heavy-service/         # PostgreSQL heavy load simulator
├── test-all-services.sh          # Main aggressive test
├── continuous-load-test.sh       # Continuous monitoring test (NEW!)
├── TEST-SUMMARY.md               # Detailed test documentation (NEW!)
├── ISSUES.md                     # Original issue documentation
└── README.md                     # This file
```

## 🔥 Test Scripts

### `test-all-services.sh` - Main Test
**One-time aggressive load test**

- 20 concurrent memory leaks (300GB+)
- 15-30 concurrent CPU operations
- 10 concurrent database operations
- ~330 error requests across all services
- Duration: ~10-15 minutes

### `continuous-load-test.sh` - Continuous Test
**Runs indefinitely for long-term monitoring** ⚡ NEW!

- 2-minute cycles
- Mixed workload patterns
- Randomized operations
- Continuous error injection
- Health monitoring
- Press Ctrl+C to stop

## 📈 Expected Alerts

Your monitoring should trigger:

**Memory Service:**
- 🔴 Memory > 1GB
- 🔴 Heap usage > 80%
- 🔴 OOM imminent
- 🟠 High error rate (60%)

**CPU Service:**
- 🔴 CPU sustained at 100%
- 🔴 Response time > 30s
- 🟠 High error rate (60%)

**Database Service:**
- 🔴 Query time > 5s
- 🔴 Connection pool exhausted
- 🔴 Deadlocks detected
- 🟠 High error rate (55%)

## ⚡ New Features

### Sustained Load Endpoints

**Memory sustained leak:**
```bash
curl -X POST https://memory-leak-service-production.up.railway.app/sustained-leak \
  -H "Content-Type: application/json" \
  -d '{"duration": 120, "intervalMs": 500}'
```

**CPU sustained load:**
```bash
curl -X POST https://cpu-intensive-service-production.up.railway.app/sustained-cpu \
  -H "Content-Type: application/json" \
  -d '{"duration": 120, "intensity": 8}'
```

### Error Endpoints (All Services)

```bash
# Deliberate 400 error
curl -X POST <service-url>/error-400

# Deliberate 500 error
curl -X POST <service-url>/error-500

# Random errors (60% failure rate)
curl -X POST <service-url>/random-errors
```

## 📝 Changes Made

### Memory Service
- 🔥 **10x more memory** per request (15GB vs 1.5GB)
- 🔥 **Circular refs increased** 10x (1000 vs 100)
- 🔥 **Background leak** increased to 350MB/min
- ✅ Added sustained leak endpoint
- ✅ Added error simulation endpoints

### CPU Service
- 🔥 **All algorithms 10x more intensive**
- 🔥 Fibonacci runs **3x per request**
- 🔥 Prime checks **10x per number**
- 🔥 Matrix multiply **54x more compute**
- 🔥 Background burner **10x more work**
- ✅ Added sustained CPU endpoint
- ✅ Added error simulation endpoints

### Database Service
- 🔥 **10x more data** (360k records)
- 🔥 **N+1 queries fetch 10x posts** (1000 vs 100)
- 🔥 Longer content strings
- ✅ Added error simulation endpoints

## ⚠️ Warnings

These tests will:
- Leak **hundreds of GB of memory**
- Use **100% CPU** for extended periods
- Create **massive database load**
- Generate **hundreds of errors per minute**
- Potentially **crash services**
- **Cost money** in cloud resources

**Only run in isolated test environments!**

## 🧹 Cleanup

**Restart services to clear memory:**
```bash
railway restart memory-leak-service
railway restart cpu-intensive-service
```

**Clear database:**
```sql
TRUNCATE TABLE likes, comments, posts, users CASCADE;
```

## 📚 Documentation

See [TEST-SUMMARY.md](./TEST-SUMMARY.md) for detailed documentation of:
- All service modifications
- Test execution details
- Expected resource impacts
- Individual endpoint testing

## 🎯 Purpose

Validate that your monitoring system can:
- ✅ Detect memory leaks and OOM conditions
- ✅ Alert on sustained high CPU usage
- ✅ Catch slow database queries
- ✅ Track high error rates (400s, 500s)
- ✅ Trigger auto-remediation when needed

---

**Built for aggressive testing. Use responsibly.** 🚀

