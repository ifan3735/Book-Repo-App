import "dotenv/config";
import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from './schema';



const sql = neon(process.env.Database_URL as string);

export const db: NeonHttpDatabase<typeof schema> = drizzle(sql, { schema, logger: true });