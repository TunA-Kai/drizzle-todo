'use client'

import React from 'react'
import { AssignSelect } from './assign-select'
import { TagSelect } from './tag-select'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Tag, User } from '~/drizzle/schema'
import { addTodo } from '~/actions/add-todo'

interface AddTodoSectionProps {
  tags: Tag[]
  users: User[]
}

export function AddTodoSection({ tags, users }: AddTodoSectionProps) {
  const [content, setContent] = React.useState<string>('')
  const [tagId, setTagId] = React.useState<number | undefined>(undefined)
  const [assignId, setAssignId] = React.useState<number | undefined>(undefined)

  function handleAddTodo() {
    if (!content || !tagId || !assignId) {
      console.error('Content, tag, and assign are required')
      return
    }
    addTodo({ content, tagId, assignId })
    setContent('')
    setTagId(undefined)
    setAssignId(undefined)
  }

  return (
    <div className='mt-4 flex gap-2'>
      <TagSelect tags={tags} setTagId={setTagId} />
      <Input value={content} onChange={e => setContent(e.target.value)} />
      <AssignSelect users={users} setAssignId={setAssignId} />
      <Button onClick={handleAddTodo}>Add</Button>
    </div>
  )
}
