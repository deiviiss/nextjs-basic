import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Página de about.'
}

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Contact Page</h1>
      {children}
    </>
  )
}
