import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from '../drizzle/schema'

const sqlite = new Database('sqlite.db')
const db = drizzle(sqlite, { schema })

async function main() {
  try {
    console.log('Seeding database...')
    await db.delete(schema.users)

    await db.insert(schema.users).values([
      { name: 'Alice', age: 30, email: 'alice@gmail.com', role: 'ADMIN' },
      { name: 'Bob', age: 25, email: 'bob@gmail.com' },
    ])

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}

main()
