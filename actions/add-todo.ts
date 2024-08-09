'use server'

import { revalidatePath } from 'next/cache'
import { db } from '~/drizzle/db'
import { Todo, todoTable } from '~/drizzle/schema'

export async function addTodo(todo: Omit<Todo, 'id'>) {
  await db.insert(todoTable).values([todo])

  revalidatePath('/')
}
