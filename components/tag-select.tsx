import { Tag } from '~/drizzle/schema'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface TagSelectProps {
  tags: Tag[]
  setTagId: (tagId: number) => void
}

export function TagSelect({ tags, setTagId }: TagSelectProps) {
  return (
    <Select onValueChange={id => setTagId(Number(id))}>
      <SelectTrigger className='w-[220px]'>
        <SelectValue placeholder='Tag' />
      </SelectTrigger>
      <SelectContent>
        {tags.map(tag => (
          <SelectItem key={tag.id} value={String(tag.id)}>
            {tag.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
