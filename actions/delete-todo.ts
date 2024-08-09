'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { db } from '~/drizzle/db'
import { Todo, todoTable } from '~/drizzle/schema'

export async function deleteTodo(id: number) {
  await db.delete(todoTable).where(eq(todoTable.id, id))

  revalidatePath('/')
}
