import { Button } from '~/components/ui/button'
import { db } from '~/drizzle/db'

export default async function Home() {
  const users = await db.query.users.findMany()

  return (
    <>
      <h1 className='text-3xl font-bold'>Hello</h1>
      <Button>Button</Button>
      <p>{JSON.stringify(users, null, 10)}</p>
    </>
  )
}
