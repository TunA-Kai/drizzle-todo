import { InferSelectModel, relations } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const todoTable = sqliteTable('todos', {
  id: integer('id').primaryKey(),
  content: text('content').notNull(),
  tagId: integer('tag_id')
    .notNull()
    .references(() => tagsTable.id, { onDelete: 'set null' }),
  assignId: integer('assign_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
})

export const todoRelations = relations(todoTable, ({ one }) => ({
  tag: one(tagsTable, {
    fields: [todoTable.tagId],
    references: [tagsTable.id],
  }),
  assign: one(usersTable, {
    fields: [todoTable.assignId],
    references: [usersTable.id],
  }),
}))

export const tagsTable = sqliteTable('tags', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
})

export const tagsRelations = relations(tagsTable, ({ many }) => ({
  todos: many(todoTable),
}))

export const usersTable = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
})

export const usersRelations = relations(usersTable, ({ many }) => ({
  todos: many(todoTable),
}))

// TYPE DEFINITIONS
export type User = InferSelectModel<typeof usersTable>
export type Tag = InferSelectModel<typeof tagsTable>
export type Todo = InferSelectModel<typeof todoTable>
