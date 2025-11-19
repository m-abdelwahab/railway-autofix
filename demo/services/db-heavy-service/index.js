const express = require("express");
const { Client } = require("pg");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

// INTENTIONAL BUG: No connection pooling, creating new connections for each request
const getDbClient = () => {
	return new Client({
		host: process.env.PGHOST || "localhost",
		port: process.env.PGPORT || 5432,
		database: process.env.PGDATABASE || "testdb",
		user: process.env.PGUSER || "postgres",
		password: process.env.PGPASSWORD || "postgres",
	});
};

// Initialize database schema
async function initDatabase() {
	const client = await getDbClient();
	await client.connect();

	try {
		// Create tables without indexes (INTENTIONAL BUG)
		await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255),
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

		await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        title VARCHAR(255),
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

		await client.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        post_id INTEGER,
        user_id INTEGER,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

		await client.query(`
      CREATE TABLE IF NOT EXISTS likes (
        id SERIAL PRIMARY KEY,
        post_id INTEGER,
        user_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

		// INTENTIONAL BUG: No indexes on foreign keys
		// Missing: CREATE INDEX ON posts(user_id);
		// Missing: CREATE INDEX ON comments(post_id);
		// Missing: CREATE INDEX ON comments(user_id);
		// Missing: CREATE INDEX ON likes(post_id);
		// Missing: CREATE INDEX ON likes(user_id);

		console.log(
			"Database schema initialized (without indexes - intentional bug)",
		);
	} catch (err) {
		console.error("Error initializing database:", err);
	} finally {
		await client.end();
	}
}

app.get("/health", async (req, res) => {
	const client = getDbClient();

	try {
		await client.connect();
		const result = await client.query("SELECT NOW()");

		res.json({
			status: "healthy",
			database: "connected",
			timestamp: result.rows[0].now,
		});
	} catch (err) {
		res.status(500).json({
			status: "unhealthy",
			database: "error",
			error: err.message,
		});
	} finally {
		// INTENTIONAL BUG: Not always closing connections properly
		// Sometimes forgetting to close (memory leak)
		if (Math.random() > 0.3) {
			await client.end();
		}
	}
});

// INTENTIONAL BUG: N+1 query problem (10x more posts!)
app.get("/posts-with-details", async (req, res) => {
	const client = getDbClient();
	await client.connect();

	try {
		// First query: Get all posts (increased from 100 to 1000)
		const postsResult = await client.query("SELECT * FROM posts LIMIT 1000");
		const posts = postsResult.rows;

		// N+1 Problem: For each post, make separate queries
		for (const post of posts) {
			// Query 1: Get user for each post
			const userResult = await client.query(
				"SELECT * FROM users WHERE id = $1",
				[post.user_id],
			);
			post.user = userResult.rows[0];

			// Query 2: Get comments for each post
			const commentsResult = await client.query(
				"SELECT * FROM comments WHERE post_id = $1",
				[post.id],
			);
			post.comments = commentsResult.rows;

			// Query 3: Get likes count for each post
			const likesResult = await client.query(
				"SELECT COUNT(*) FROM likes WHERE post_id = $1",
				[post.id],
			);
			post.likes_count = likesResult.rows[0].count;

			// N+1 inside N+1: For each comment, get the user
			for (const comment of post.comments) {
				const commentUserResult = await client.query(
					"SELECT * FROM users WHERE id = $1",
					[comment.user_id],
				);
				comment.user = commentUserResult.rows[0];
			}
		}

		res.json({
			posts: posts,
			query_count:
				1 +
				posts.length * 3 +
				posts.reduce((acc, p) => acc + p.comments.length, 0),
			message: "N+1 query problem demonstrated",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	} finally {
		await client.end();
	}
});

// INTENTIONAL BUG: Inefficient JOIN without indexes
app.get("/heavy-join", async (req, res) => {
	const client = getDbClient();
	await client.connect();

	try {
		// Cartesian product followed by filtering (very inefficient)
		const query = `
      SELECT
        u1.name as user1,
        u2.name as user2,
        COUNT(DISTINCT p1.id) as user1_posts,
        COUNT(DISTINCT p2.id) as user2_posts,
        COUNT(DISTINCT c1.id) as user1_comments,
        COUNT(DISTINCT c2.id) as user2_comments
      FROM users u1
      CROSS JOIN users u2
      LEFT JOIN posts p1 ON p1.user_id = u1.id
      LEFT JOIN posts p2 ON p2.user_id = u2.id
      LEFT JOIN comments c1 ON c1.user_id = u1.id
      LEFT JOIN comments c2 ON c2.user_id = u2.id
      WHERE u1.id != u2.id
      GROUP BY u1.id, u2.id, u1.name, u2.name
      LIMIT 100
    `;

		const start = Date.now();
		const result = await client.query(query);
		const duration = Date.now() - start;

		res.json({
			rows: result.rows.length,
			duration_ms: duration,
			sample: result.rows.slice(0, 5),
			message: "Heavy JOIN without indexes",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	} finally {
		await client.end();
	}
});

// INTENTIONAL BUG: Full table scan queries
app.get("/search-unindexed", async (req, res) => {
	const { email } = req.query;
	const client = getDbClient();
	await client.connect();

	try {
		// LIKE query without index on email column
		const query = `
      SELECT u.*,
        (SELECT COUNT(*) FROM posts WHERE user_id = u.id) as post_count,
        (SELECT COUNT(*) FROM comments WHERE user_id = u.id) as comment_count,
        (SELECT COUNT(*) FROM likes WHERE user_id = u.id) as like_count
      FROM users u
      WHERE LOWER(u.email) LIKE LOWER($1)
    `;

		const start = Date.now();
		const result = await client.query(query, [`%${email || "test"}%`]);
		const duration = Date.now() - start;

		res.json({
			results: result.rows,
			duration_ms: duration,
			message: "Full table scan with LIKE query",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	} finally {
		await client.end();
	}
});

// INTENTIONAL BUG: Lock contention creator
app.post("/create-lock-contention", async (req, res) => {
	const promises = [];

	// Create 10 concurrent transactions that will cause lock contention
	for (let i = 0; i < 10; i++) {
		promises.push(
			(async () => {
				const client = getDbClient();
				await client.connect();

				try {
					await client.query("BEGIN");

					// Update same rows in different order to cause deadlocks
					if (i % 2 === 0) {
						await client.query(
							"UPDATE users SET name = name || $1 WHERE id = 1",
							[i],
						);
						await new Promise((resolve) => setTimeout(resolve, 100));
						await client.query(
							"UPDATE users SET name = name || $1 WHERE id = 2",
							[i],
						);
					} else {
						await client.query(
							"UPDATE users SET name = name || $1 WHERE id = 2",
							[i],
						);
						await new Promise((resolve) => setTimeout(resolve, 100));
						await client.query(
							"UPDATE users SET name = name || $1 WHERE id = 1",
							[i],
						);
					}

					await client.query("COMMIT");
					return { success: true, transaction: i };
				} catch (err) {
					await client.query("ROLLBACK");
					return { success: false, transaction: i, error: err.message };
				} finally {
					await client.end();
				}
			})(),
		);
	}

	const results = await Promise.all(promises);

	res.json({
		results: results,
		message: "Lock contention test completed",
	});
});

// INTENTIONAL BUG: Unbounded result set
app.get("/fetch-all", async (req, res) => {
	const client = getDbClient();
	await client.connect();

	try {
		// Fetching everything without pagination
		const posts = await client.query("SELECT * FROM posts");
		const users = await client.query("SELECT * FROM users");
		const comments = await client.query("SELECT * FROM comments");
		const likes = await client.query("SELECT * FROM likes");

		res.json({
			posts: posts.rows,
			users: users.rows,
			comments: comments.rows,
			likes: likes.rows,
			total_rows:
				posts.rowCount + users.rowCount + comments.rowCount + likes.rowCount,
			message: "Fetched all data without pagination",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	} finally {
		await client.end();
	}
});

// INTENTIONAL BUG: Recursive query without depth limit
app.get("/recursive-query", async (req, res) => {
	const client = getDbClient();
	await client.connect();

	try {
		// Self-referencing query that can explode
		const query = `
      WITH RECURSIVE post_tree AS (
        SELECT p1.*, 0 as depth
        FROM posts p1
        WHERE p1.id = 1

        UNION ALL

        SELECT p2.*, pt.depth + 1
        FROM posts p2
        CROSS JOIN post_tree pt
        WHERE p2.user_id = (SELECT user_id FROM posts WHERE id = pt.id)
          AND pt.depth < 100  -- Still allows deep recursion
      )
      SELECT * FROM post_tree;
    `;

		const start = Date.now();
		const result = await client.query(query);
		const duration = Date.now() - start;

		res.json({
			rows: result.rows.length,
			duration_ms: duration,
			message: "Recursive query executed",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	} finally {
		await client.end();
	}
});

// Seed some data (10x MORE DATA!)
app.post("/seed-data", async (req, res) => {
	const client = getDbClient();
	await client.connect();

	try {
		await client.query("BEGIN");

		console.log("Seeding users...");
		// Insert users - 10x more (10,000 users)
		for (let i = 1; i <= 10000; i++) {
			await client.query("INSERT INTO users (email, name) VALUES ($1, $2)", [
				`user${i}@example.com`,
				`User ${i}`,
			]);
			if (i % 1000 === 0) console.log(`  ${i} users inserted...`);
		}

		console.log("Seeding posts...");
		// Insert posts - 10x more (50,000 posts)
		for (let i = 1; i <= 50000; i++) {
			await client.query(
				"INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3)",
				[
					Math.floor(Math.random() * 10000) + 1,
					`Post ${i}`,
					`Content for post ${i}. This is a longer content string to make the data more realistic and increase storage size.`,
				],
			);
			if (i % 5000 === 0) console.log(`  ${i} posts inserted...`);
		}

		console.log("Seeding comments...");
		// Insert comments - 10x more (100,000 comments)
		for (let i = 1; i <= 100000; i++) {
			await client.query(
				"INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3)",
				[
					Math.floor(Math.random() * 50000) + 1,
					Math.floor(Math.random() * 10000) + 1,
					`Comment ${i} - This is a comment with some actual content to make it more realistic.`,
				],
			);
			if (i % 10000 === 0) console.log(`  ${i} comments inserted...`);
		}

		console.log("Seeding likes...");
		// Insert likes - 10x more (200,000 likes)
		for (let i = 1; i <= 200000; i++) {
			await client.query(
				"INSERT INTO likes (post_id, user_id) VALUES ($1, $2)",
				[
					Math.floor(Math.random() * 50000) + 1,
					Math.floor(Math.random() * 10000) + 1,
				],
			);
			if (i % 20000 === 0) console.log(`  ${i} likes inserted...`);
		}

		await client.query("COMMIT");
		console.log("Data seeding completed!");

		res.json({
			message: "Data seeded successfully (10x more data!)",
			users: 10000,
			posts: 50000,
			comments: 100000,
			likes: 200000,
			total_records: 360000,
		});
	} catch (err) {
		await client.query("ROLLBACK");
		res.status(500).json({ error: err.message });
	} finally {
		await client.end();
	}
});

// Error simulation endpoints
app.get("/error-400", (req, res) => {
	res.status(400).json({
		error: "Bad Request",
		message: "Invalid database query parameters",
		timestamp: new Date(),
	});
});

app.post("/error-400", (req, res) => {
	res.status(400).json({
		error: "Bad Request",
		message: "Invalid database query parameters",
		timestamp: new Date(),
	});
});

app.get("/error-500", async (req, res) => {
	res.status(500).json({
		error: "Internal Server Error",
		message: "Database connection failed",
		timestamp: new Date(),
	});
});

app.post("/error-500", async (req, res) => {
	res.status(500).json({
		error: "Internal Server Error",
		message: "Database query execution failed",
		timestamp: new Date(),
	});
});

app.get("/random-errors", (req, res) => {
	const rand = Math.random();
	if (rand < 0.2) {
		return res
			.status(400)
			.json({ error: "Bad Request", message: "Random 400 error" });
	} else if (rand < 0.4) {
		return res
			.status(500)
			.json({ error: "Internal Server Error", message: "Random 500 error" });
	} else if (rand < 0.5) {
		return res
			.status(503)
			.json({ error: "Service Unavailable", message: "Database overloaded" });
	} else if (rand < 0.55) {
		return res
			.status(504)
			.json({ error: "Gateway Timeout", message: "Query timeout" });
	}

	// 45% success rate
	res.json({ message: "Success!", timestamp: new Date() });
});

app.listen(PORT, async () => {
	console.log(`DB Heavy Service running on port ${PORT}`);
	console.log("Intentional bugs (10x MORE IMPACTFUL):");
	console.log("- No connection pooling");
	console.log("- N+1 query problems (1000 posts instead of 100)");
	console.log("- Missing indexes on foreign keys");
	console.log("- Inefficient JOINs");
	console.log("- Full table scans");
	console.log("- Lock contention patterns");
	console.log("- 360,000 records (10x more data)");
	console.log("Error simulation:");
	console.log("- GET/POST /error-400: Returns 400 error");
	console.log("- GET/POST /error-500: Returns 500 error");
	console.log("- GET /random-errors: Random errors (55% failure rate)");

	await initDatabase();
});
