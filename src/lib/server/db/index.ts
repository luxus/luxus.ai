import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

export const libSQLClient = createClient({
	url: env.DATABASE_URL || '', // Ensure env.DATABASE_URL is always a string
	authToken: env.DATABASE_AUTH_TOKEN
});
export const db = drizzle(libSQLClient, { schema });
