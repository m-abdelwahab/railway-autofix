# Performance Test Project - Intentional Issues Documentation

This project contains multiple services with **intentional performance issues** designed to test monitoring and auto-remediation systems.

## Services Overview

### 1. Memory Leak Service (Port 3001)
**Technology:** Node.js/Express
**Location:** `/services/memory-leak-service`

#### Intentional Issues:
1. **Unbounded Array Growth**
   - **Location:** `index.js:11-12`
   - **Problem:** Global arrays `leakyArray` and `leakyCache` grow without bounds
   - **Symptoms:** RSS memory increases linearly with requests
   - **Trigger:** POST `/process` adds 100MB per request
   - **Fix:** Implement array size limits or circular buffer

2. **Cache Without Eviction**
   - **Location:** `index.js:38-43`
   - **Problem:** `leakyCache` Map never removes entries
   - **Symptoms:** Heap memory grows continuously
   - **Fix:** Implement LRU cache with max size

3. **Circular References**
   - **Location:** `index.js:55-70`
   - **Problem:** Creates circular references that prevent garbage collection
   - **Trigger:** POST `/circular`
   - **Fix:** Break circular references before storing

4. **Background Memory Leak**
   - **Location:** `index.js:78-85`
   - **Problem:** Background task adds 10KB every 5 seconds
   - **Fix:** Implement cleanup or rotation mechanism

#### Monitoring Thresholds:
- Memory > 500MB: Warning
- Memory > 1GB: Critical
- Heap usage > 80%: Alert

### 2. CPU Intensive Service (Port 3002)
**Technology:** Python/Flask
**Location:** `/services/cpu-intensive-service`

#### Intentional Issues:
1. **Inefficient Fibonacci**
   - **Location:** `app.py:12-17`
   - **Problem:** Recursive implementation with O(2^n) complexity
   - **Trigger:** GET `/fibonacci/<n>` with n > 30
   - **Fix:** Use memoization or iterative approach

2. **Inefficient Prime Checking**
   - **Location:** `app.py:20-26`
   - **Problem:** Checks all numbers up to n-1 instead of sqrt(n)
   - **Trigger:** POST `/prime-check` with large numbers
   - **Fix:** Check only up to sqrt(n)

3. **Triple Nested Bubble Sort**
   - **Location:** `app.py:29-38`
   - **Problem:** Bubble sort with unnecessary extra iterations
   - **Trigger:** POST `/sort` with large arrays
   - **Fix:** Use efficient sorting algorithm (quicksort, mergesort)

4. **CPU Burner Background Task**
   - **Location:** `app.py:41-47`
   - **Problem:** Continuously computes SHA256 hashes
   - **Fix:** Remove or reduce frequency

5. **Inefficient Matrix Multiplication**
   - **Location:** `app.py:119-139`
   - **Problem:** Triple nested loop instead of numpy optimization
   - **Trigger:** POST `/matrix-multiply`
   - **Fix:** Use numpy.dot() or @ operator

#### Monitoring Thresholds:
- CPU > 70%: Warning
- CPU > 90%: Critical
- Response time > 5s: Alert

### 3. Database Heavy Service (Port 3003)
**Technology:** Node.js/Express + PostgreSQL
**Location:** `/services/db-heavy-service`

#### Intentional Issues:
1. **No Connection Pooling**
   - **Location:** `index.js:12-20`
   - **Problem:** Creates new connection for each request
   - **Symptoms:** Connection exhaustion, slow responses
   - **Fix:** Use pg.Pool instead of pg.Client

2. **N+1 Query Problem**
   - **Location:** `index.js:94-131`
   - **Problem:** Separate queries for each related record
   - **Trigger:** GET `/posts-with-details`
   - **Fix:** Use JOIN queries or batch fetching

3. **Missing Indexes**
   - **Location:** `index.js:22-53`
   - **Problem:** No indexes on foreign key columns
   - **Symptoms:** Full table scans, slow queries
   - **Fix:** Add indexes on user_id, post_id columns

4. **Inefficient JOINs**
   - **Location:** `index.js:135-166`
   - **Problem:** CROSS JOIN creating Cartesian products
   - **Trigger:** GET `/heavy-join`
   - **Fix:** Use proper INNER/LEFT JOINs

5. **Full Table Scans**
   - **Location:** `index.js:170-196`
   - **Problem:** LIKE queries without indexes
   - **Trigger:** GET `/search-unindexed`
   - **Fix:** Add indexes or use full-text search

6. **Lock Contention**
   - **Location:** `index.js:200-239`
   - **Problem:** Updates same rows in different order
   - **Trigger:** POST `/create-lock-contention`
   - **Fix:** Consistent update order or row-level locking

7. **Connection Leaks**
   - **Location:** `index.js:84-90`
   - **Problem:** 30% chance of not closing connections
   - **Fix:** Always close connections in finally block

#### Monitoring Thresholds:
- Query time > 1s: Warning
- Query time > 5s: Critical
- Connection count > 50: Alert
- Database CPU > 80%: Critical


## Suggested Fixes

### Memory Leak Service Fixes

```javascript
// Fix 1: Implement array size limit
const MAX_ARRAY_SIZE = 1000;
if (leakyArray.length > MAX_ARRAY_SIZE) {
  leakyArray.shift(); // Remove oldest entry
}

// Fix 2: Use LRU cache
const LRU = require('lru-cache');
const cache = new LRU({ max: 500 });

// Fix 3: Clear circular references
delete obj1.ref;
delete obj2.ref;
```

### CPU Service Fixes

```python
# Fix 1: Memoized Fibonacci
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_efficient(n):
    if n <= 1:
        return n
    return fibonacci_efficient(n - 1) + fibonacci_efficient(n - 2)

# Fix 2: Efficient prime check
import math

def is_prime_efficient(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

# Fix 3: Use numpy for matrix operations
result = np.dot(matrix_a, matrix_b)
```

### Database Service Fixes

```javascript
// Fix 1: Use connection pool
const { Pool } = require('pg');
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Fix 2: Use JOIN instead of N+1
const query = `
  SELECT
    p.*,
    u.name as user_name,
    COUNT(c.id) as comment_count,
    COUNT(l.id) as like_count
  FROM posts p
  LEFT JOIN users u ON p.user_id = u.id
  LEFT JOIN comments c ON c.post_id = p.id
  LEFT JOIN likes l ON l.post_id = p.id
  GROUP BY p.id, u.name
  LIMIT 100
`;

// Fix 3: Add indexes
await client.query('CREATE INDEX idx_posts_user_id ON posts(user_id)');
await client.query('CREATE INDEX idx_comments_post_id ON comments(post_id)');
```
