'use client'

import { Tag, Todo, User } from '~/drizzle/schema'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { deleteTodo } from '~/actions/delete-todo'

interface TodoListProps {
  todos: (Pick<Todo, 'id' | 'content'> & { tag: Pick<Tag, 'name'> } & {
    assign: Pick<User, 'name'>
  })[]
}

export function TodoList({ todos }: TodoListProps) {
  function handleDelete(id: number) {
    deleteTodo(id)
  }

  return (
    <ul className='mt-8 space-y-2'>
      {todos.map(todo => (
        <li key={todo.id} className='grid grid-cols-5 items-center'>
          <Checkbox />
          <p>{todo.tag.name}</p>
          <p>{todo.content}</p>
          <p>{todo.assign.name}</p>
          <Button variant='destructive' onClick={() => handleDelete(todo.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}
