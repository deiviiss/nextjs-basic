import Link from 'next/link'
import { GoHome } from 'react-icons/go'
import { ActiveLink } from '@/components'

export const Navbar = () => {
  const navItems = [
    {
      path: '/about',
      name: 'Acerca de'
    },
    {
      path: '/contact',
      name: 'Contacto'
    },
    {
      path: '/pricing',
      name: 'Precios'
    }
  ]

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

      <Link className='flex items-center gap-2' href="/">
        <GoHome />
        <span>Inicio</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map((navItem) => (
          <ActiveLink key={navItem.name}{...navItem} />
        ))
      }
    </nav>
  )
}
