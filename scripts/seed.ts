import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from '../drizzle/schema'

const sqlite = new Database('sqlite.db')
const db = drizzle(sqlite, { schema })

async function main() {
  try {
    console.log('Seeding database...')

    await db.insert(schema.usersTable).values([{ name: 'Alice' }, { name: 'Bob' }])

    await db
      .insert(schema.tagsTable)
      .values([{ name: 'Drizzle ORM' }, { name: 'Next.js' }, { name: 'Tailwind CSS' }])

    await db.insert(schema.todoTable).values([
      {
        content: 'Learn Drizzle ORM',
        tagId: 1,
        assignId: 1,
      },
      {
        content: 'Learn Next.js',
        tagId: 2,
        assignId: 2,
      },
      {
        content: 'Learn Tailwind CSS',
        tagId: 3,
        assignId: 1,
      },
    ])

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}

main()
