import { User } from '~/drizzle/schema'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface AssignSelectProps {
  users: User[]
  setAssignId: (assignId: number) => void
}

export function AssignSelect({ users, setAssignId }: AssignSelectProps) {
  return (
    <Select onValueChange={id => setAssignId(Number(id))}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Assign' />
      </SelectTrigger>
      <SelectContent>
        {users.map(user => (
          <SelectItem key={user.id} value={String(user.id)}>
            {user.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
