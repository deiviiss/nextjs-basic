import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Página de pricing.'
}

export default function PricingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Página de precios</h1>
      {children}
    </>
  )
}
