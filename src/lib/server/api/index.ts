import { env } from '$env/dynamic/private';
import { asc, count, eq, getTableColumns, gt, sql } from 'drizzle-orm';
import { swagger } from '@elysiajs/swagger';
import { Elysia, t } from 'elysia';
import { db } from '$lib/db';
import { type SelectUser, userTable } from '$lib/db/schema';
// export async function getUserById(id: SelectUser['id']): Promise<
//   Array<{
//     id: Text;
//   }>
// > {
//   return db.select().from(userTable).where(eq(userTable.id, id));
// }
export const app = new Elysia({ prefix: '/api' })
  .use(await swagger())
  .get('/', () => 'hi')
  .get('/hello', () => 'world');
export type App = typeof app;
