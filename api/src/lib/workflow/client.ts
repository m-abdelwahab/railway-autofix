import { PgBoss } from "pg-boss";

export const boss = new PgBoss(process.env.DATABASE_URL);

boss.on("error", (error) => console.error(error));
