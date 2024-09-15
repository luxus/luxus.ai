import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
export const user = sqliteTable(
  'user',
  {
    id: text('id').unique().notNull(),
    email: text('email').unique().notNull(),
    firstName: text('name').notNull(),
    lastName: text('last_name').notNull(),
    providerId: text('provider_id').notNull(),
    provider: text('provider').notNull()
  },
  (userTable) => ({
    pk: primaryKey({ columns: [userTable.provider, userTable.providerId] })
  })
);
export const session = sqliteTable('session', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  expiresAt: integer('expires_at').notNull()
});
export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  createdAt: text('created_at')
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date())
});
export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;
export type SelectPost = typeof posts.$inferSelect;
