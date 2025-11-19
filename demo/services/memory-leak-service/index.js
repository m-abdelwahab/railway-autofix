const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// INTENTIONAL BUG: Memory leak - array grows without bounds
const leakyArray = [];
const leakyCache = new Map();

// Health check endpoint
app.get('/health', (req, res) => {
  const memoryUsage = process.memoryUsage();
  res.json({
    status: 'healthy',
    memory: {
      rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
      heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
      heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
      leakyArraySize: leakyArray.length,
      leakyCacheSize: leakyCache.size
    }
  });
});

// INTENTIONAL BUG: Endpoint that causes memory leak (10x MORE IMPACTFUL)
app.post('/process', (req, res) => {
  const data = req.body.data || 'default';

  // Memory leak 1: Keep adding to array without cleanup - INCREASED 10x
  for (let i = 0; i < 10000; i++) {
    leakyArray.push({
      timestamp: new Date(),
      data: Buffer.alloc(1024 * 1000).toString(), // 1MB per entry (was 100KB)
      requestId: Math.random().toString(36),
      metadata: JSON.stringify(req.headers),
      extraData: Buffer.alloc(1024 * 500).toString() // Additional 500KB
    });
  }

  // Memory leak 2: Cache without eviction - INCREASED 10x
  for (let i = 0; i < 10; i++) {
    const cacheKey = Date.now().toString() + i;
    leakyCache.set(cacheKey, {
      largeData: Buffer.alloc(1024 * 5000).toString(), // 5MB per entry (was 500KB)
      timestamp: new Date(),
      request: JSON.stringify(req.body),
      moreData: Buffer.alloc(1024 * 2000).toString() // Additional 2MB
    });
  }

  res.json({
    message: 'Data processed',
    arraySize: leakyArray.length,
    cacheSize: leakyCache.size,
    memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
    leakedMB: Math.round((leakyArray.length * 1.5 + leakyCache.size * 7) / 1024)
  });
});

// INTENTIONAL BUG: Endpoint that creates circular references (10x MORE IMPACTFUL)
app.post('/circular', (req, res) => {
  const circularRefs = [];

  for (let i = 0; i < 1000; i++) { // Increased from 100 to 1000
    const obj1 = { data: Buffer.alloc(1024 * 500).toString() }; // Increased from 50KB to 500KB
    const obj2 = { data: Buffer.alloc(1024 * 500).toString() };
    const obj3 = { data: Buffer.alloc(1024 * 500).toString() };

    // Create circular reference chain
    obj1.ref = obj2;
    obj2.ref = obj3;
    obj3.ref = obj1;

    circularRefs.push(obj1);
  }

  // Store in global array (memory leak)
  leakyArray.push(...circularRefs);

  res.json({
    message: 'Circular references created',
    count: circularRefs.length,
    totalLeaked: leakyArray.length,
    memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`
  });
});

// Simulate continuous memory growth (EVEN MORE AGGRESSIVE)
setInterval(() => {
  // INTENTIONAL BUG: Background task that leaks memory
  for (let i = 0; i < 50; i++) {  // Increased from 10 to 50
    const backgroundData = {
      timestamp: new Date(),
      randomData: Buffer.alloc(1024 * 200).toString(), // 200KB per entry (was 100KB)
      moreData: Buffer.alloc(1024 * 100).toString() // Additional 100KB
    };
    leakyArray.push(backgroundData);
  }

  console.log(`Background leak - Array size: ${leakyArray.length}, Heap: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`);
}, 3000);  // Every 3 seconds instead of 5

// Additional aggressive background leak
setInterval(() => {
  // INTENTIONAL BUG: Even more aggressive memory consumption
  const bigBuffer = Buffer.alloc(1024 * 1024 * 5).toString(); // 5MB
  leakyCache.set(Date.now().toString(), {
    data: bigBuffer,
    timestamp: new Date()
  });
  
  console.log(`Cache leak - Cache size: ${leakyCache.size}, Heap: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`);
}, 2000);  // Every 2 seconds

// Sustained load endpoint - keeps leaking for a specified duration
app.post('/sustained-leak', (req, res) => {
  const duration = req.body.duration || 60; // Default 60 seconds
  const intervalMs = req.body.intervalMs || 1000; // Default 1 second
  
  let count = 0;
  const maxIterations = duration * (1000 / intervalMs);
  
  const leakInterval = setInterval(() => {
    // Leak memory on each interval
    for (let i = 0; i < 100; i++) {
      leakyArray.push({
        timestamp: new Date(),
        data: Buffer.alloc(1024 * 500).toString(), // 500KB per entry
        sustained: true
      });
    }
    
    count++;
    if (count >= maxIterations) {
      clearInterval(leakInterval);
    }
  }, intervalMs);
  
  res.json({
    message: 'Sustained leak started',
    duration: duration,
    intervalMs: intervalMs,
    estimatedLeakMB: (duration * (1000 / intervalMs) * 100 * 0.5),
    memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`
  });
});

// Error simulation endpoints
app.post('/error-400', (req, res) => {
  res.status(400).json({ 
    error: 'Bad Request', 
    message: 'Invalid data format',
    timestamp: new Date()
  });
});

app.post('/error-500', (req, res) => {
  res.status(500).json({ 
    error: 'Internal Server Error', 
    message: 'Simulated server error',
    timestamp: new Date()
  });
});

app.post('/random-errors', (req, res) => {
  const rand = Math.random();
  if (rand < 0.3) {
    return res.status(400).json({ error: 'Bad Request', message: 'Random 400 error' });
  } else if (rand < 0.5) {
    return res.status(500).json({ error: 'Internal Server Error', message: 'Random 500 error' });
  } else if (rand < 0.6) {
    return res.status(503).json({ error: 'Service Unavailable', message: 'Random 503 error' });
  }
  
  // 40% success rate
  res.json({ message: 'Success!', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Memory Leak Service running on port ${PORT}`);
  console.log('Intentional bugs (EXTREMELY AGGRESSIVE):');
  console.log('- POST /process: Leaks ~15GB per request (10,000 entries @ 1.5MB each)');
  console.log('- POST /circular: Creates 1000 circular references @ 1.5MB each');
  console.log('- Background task 1: Leaks ~15MB every 3 seconds');
  console.log('- Background task 2: Leaks ~5MB every 2 seconds (cache)');
  console.log('- Combined background leak: ~350MB per minute');
  console.log('Error simulation:');
  console.log('- POST /error-400: Returns 400 error');
  console.log('- POST /error-500: Returns 500 error');
  console.log('- POST /random-errors: Random errors (60% failure rate)');
});