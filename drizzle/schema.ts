import { relations, sql } from 'drizzle-orm'
import { text, integer, sqliteTable, primaryKey } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name', { length: 255 }).notNull(),
  age: integer('age').notNull(),
  email: text('email', { length: 255 }).unique().notNull(),
  role: text('userRole', { enum: ['ADMIN', 'BASIC'] })
    .notNull()
    .default('BASIC'),
})
