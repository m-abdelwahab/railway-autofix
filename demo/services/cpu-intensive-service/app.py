from flask import Flask, jsonify, request
import psutil
import time
import threading
import hashlib
import numpy as np
from datetime import datetime

app = Flask(__name__)

# INTENTIONAL BUG: Inefficient recursive Fibonacci without memoization
def fibonacci_recursive(n):
    if n <= 1:
        return n
    # This has O(2^n) time complexity - extremely inefficient
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

# INTENTIONAL BUG: Inefficient prime checking
def is_prime_inefficient(n):
    if n < 2:
        return False
    # Checking all numbers up to n-1 instead of sqrt(n)
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

# INTENTIONAL BUG: Inefficient sorting with bubble sort
def bubble_sort_inefficient(arr):
    n = len(arr)
    # O(n^2) complexity, and we're making it worse
    for i in range(n):
        for j in range(n - 1):
            # Extra unnecessary comparisons
            for k in range(3):  # Triple the work for no reason
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# INTENTIONAL BUG: CPU-intensive background task (10x more impactful)
def cpu_burner():
    while True:
        # Continuously compute hashes (10x more work)
        data = str(time.time()).encode()
        for _ in range(100000):  # Increased from 10k to 100k
            hashlib.sha256(data).hexdigest()
        time.sleep(0.05)  # Reduced pause from 0.1 to 0.05 for more continuous load

# Start background CPU burner thread
background_thread = threading.Thread(target=cpu_burner, daemon=True)
background_thread.start()

@app.route('/health')
def health():
    cpu_percent = psutil.cpu_percent(interval=1)
    process = psutil.Process()

    return jsonify({
        'status': 'healthy',
        'cpu': {
            'system_percent': cpu_percent,
            'process_percent': process.cpu_percent(),
            'cpu_count': psutil.cpu_count()
        },
        'memory': {
            'process_mb': process.memory_info().rss / 1024 / 1024
        },
        'timestamp': datetime.now().isoformat()
    })

@app.route('/fibonacci/<int:n>')
def fibonacci(n):
    # INTENTIONAL BUG: Increased limit for more CPU impact
    if n > 45:  # Increased from 40 to 45 for 10x more computation
        return jsonify({
            'error': 'Input too large (would take forever)',
            'max_allowed': 45
        }), 400

    start_time = time.time()
    # Run multiple times to increase impact
    results = []
    for _ in range(3):  # Run 3 times
        result = fibonacci_recursive(n)
        results.append(result)
    elapsed = time.time() - start_time

    return jsonify({
        'input': n,
        'result': results[0],
        'computation_time': f'{elapsed:.3f} seconds',
        'cpu_percent': psutil.cpu_percent(interval=0.1)
    })

@app.route('/prime-check', methods=['POST'])
def prime_check():
    data = request.get_json()
    numbers = data.get('numbers', [])

    # INTENTIONAL BUG: Check large numbers inefficiently (10x more work)
    results = []
    start_time = time.time()

    # Run checks multiple times for more CPU impact
    for num in numbers:
        for _ in range(10):  # Check each number 10 times
            is_prime = is_prime_inefficient(num)
        results.append({
            'number': num,
            'is_prime': is_prime
        })

    elapsed = time.time() - start_time

    return jsonify({
        'results': results,
        'computation_time': f'{elapsed:.3f} seconds',
        'cpu_percent': psutil.cpu_percent(interval=0.1)
    })

@app.route('/matrix-multiply', methods=['POST'])
def matrix_multiply():
    data = request.get_json()
    size = data.get('size', 300)  # Increased default from 100 to 300

    # INTENTIONAL BUG: Inefficient matrix multiplication (10x more impactful)
    # Using nested loops instead of numpy's optimized methods
    matrix_a = [[i + j for j in range(size)] for i in range(size)]
    matrix_b = [[i * j for j in range(size)] for i in range(size)]
    result = [[0 for _ in range(size)] for _ in range(size)]

    start_time = time.time()

    # Triple nested loop - O(n^3) complexity
    # Do it twice for more impact
    for _ in range(2):
        for i in range(size):
            for j in range(size):
                for k in range(size):
                    result[i][j] += matrix_a[i][k] * matrix_b[k][j]

    elapsed = time.time() - start_time

    return jsonify({
        'matrix_size': f'{size}x{size}',
        'computation_time': f'{elapsed:.3f} seconds',
        'cpu_percent': psutil.cpu_percent(interval=0.1),
        'result_sample': result[0][:5] if size > 0 else []
    })

@app.route('/sort', methods=['POST'])
def sort_array():
    data = request.get_json()
    size = data.get('size', 5000)  # Increased default from 1000 to 5000

    # Generate random array
    arr = np.random.randint(0, 10000, size=size).tolist()

    start_time = time.time()
    # INTENTIONAL BUG: Using extremely inefficient sorting (sort twice for more impact)
    sorted_arr = bubble_sort_inefficient(arr.copy())
    sorted_arr = bubble_sort_inefficient(sorted_arr)  # Sort again for more CPU usage
    elapsed = time.time() - start_time

    return jsonify({
        'array_size': size,
        'computation_time': f'{elapsed:.3f} seconds',
        'cpu_percent': psutil.cpu_percent(interval=0.1),
        'first_10_sorted': sorted_arr[:10]
    })

@app.route('/cpu-bomb', methods=['POST'])
def cpu_bomb():
    # INTENTIONAL BUG: Spawn multiple threads doing intensive work (10x more impactful)
    data = request.get_json()
    duration = data.get('duration', 10)  # Increased from 5 to 10 seconds
    threads = data.get('threads', 8)  # Increased from 4 to 8 threads

    def intensive_work():
        end_time = time.time() + duration
        while time.time() < end_time:
            # Compute intensive operations (10x more work)
            _ = sum(i ** 3 for i in range(100000))  # Increased from 10k to 100k and squared to cubed

    thread_list = []
    for _ in range(threads):
        t = threading.Thread(target=intensive_work)
        t.start()
        thread_list.append(t)

    # Wait for all threads to complete
    for t in thread_list:
        t.join()

    return jsonify({
        'message': 'CPU bomb completed',
        'duration': duration,
        'threads': threads,
        'cpu_percent': psutil.cpu_percent(interval=0.1)
    })

@app.route('/sustained-cpu', methods=['POST'])
def sustained_cpu():
    """Sustained CPU load for monitoring purposes"""
    data = request.get_json() or {}
    duration = data.get('duration', 60)  # Default 60 seconds
    intensity = data.get('intensity', 5)  # 1-10 scale
    
    def cpu_work(work_duration, work_intensity):
        end_time = time.time() + work_duration
        while time.time() < end_time:
            # Scale work based on intensity
            iterations = work_intensity * 10000
            _ = sum(i ** 3 for i in range(iterations))
    
    # Start in background thread
    thread = threading.Thread(target=cpu_work, args=(duration, intensity))
    thread.start()
    
    return jsonify({
        'message': 'Sustained CPU load started',
        'duration': duration,
        'intensity': intensity,
        'timestamp': datetime.now().isoformat()
    })

# Error simulation endpoints
@app.route('/error-400', methods=['GET', 'POST'])
def error_400():
    return jsonify({
        'error': 'Bad Request',
        'message': 'Invalid computation parameters',
        'timestamp': datetime.now().isoformat()
    }), 400

@app.route('/error-500', methods=['GET', 'POST'])
def error_500():
    return jsonify({
        'error': 'Internal Server Error',
        'message': 'CPU computation failed catastrophically',
        'timestamp': datetime.now().isoformat()
    }), 500

@app.route('/random-errors', methods=['GET', 'POST'])
def random_errors():
    import random
    rand = random.random()
    
    if rand < 0.25:
        return jsonify({'error': 'Bad Request', 'message': 'Random 400 error'}), 400
    elif rand < 0.45:
        return jsonify({'error': 'Internal Server Error', 'message': 'Random 500 error'}), 500
    elif rand < 0.55:
        return jsonify({'error': 'Service Unavailable', 'message': 'Random 503 error'}), 503
    elif rand < 0.6:
        return jsonify({'error': 'Gateway Timeout', 'message': 'Random 504 error'}), 504
    
    # 40% success rate
    return jsonify({
        'message': 'Success!',
        'timestamp': datetime.now().isoformat(),
        'cpu_percent': psutil.cpu_percent(interval=0.1)
    })

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 3002))
    app.run(host='0.0.0.0', port=port, debug=False)