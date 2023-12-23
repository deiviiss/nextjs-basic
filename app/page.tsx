import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/about')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  )
}
