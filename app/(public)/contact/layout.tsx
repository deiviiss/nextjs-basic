import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Página de contacto.'
}

export default function ContactLayout({
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
