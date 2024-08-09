import { AddTodoSection } from '~/components/add-todo-section'
import { TodoList } from '~/components/todo-list'
import { db } from '~/drizzle/db'

export default async function Home() {
  const tags = await db.query.tagsTable.findMany()
  const users = await db.query.usersTable.findMany()
  const todos = await db.query.todoTable.findMany({
    columns: { id: true, content: true },
    with: {
      tag: { columns: { name: true } },
      assign: { columns: { name: true } },
    },
  })

  return (
    <div className='mx-auto max-w-5xl p-4'>
      <p>Please add to-dos item(s) through the input field</p>
      <AddTodoSection tags={tags} users={users} />

      <TodoList todos={todos} />
    </div>
  )
}
