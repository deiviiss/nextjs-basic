'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  name: string
  path: string
}

export const ActiveLink = ({ name, path }: Props) => {
  const pathname = usePathname()
  console.log(pathname, path)

  return (
    <Link className={`hover:underline hover:text-blue-400 mr-2 transition-all ${(pathname === path) && 'text-blue-500'}`} href={path}>{name}</Link>
  )
}
