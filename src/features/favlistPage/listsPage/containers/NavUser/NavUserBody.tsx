import Link from 'next/link'
import { ReactNode } from 'react'

import { navUserItems } from '@/app/(shop)/(favlists)/listy/page'

const IconNavUser = ({ icon }: { icon: ReactNode }) => (
  <span className="inline-block w-6 h-6 text-2xl md:mr-3">{icon}</span>
)

type UserBody = {
  activeLink: string | null
  links: navUserItems[]
}

export const NavUserBody = ({ activeLink, links }: UserBody) => {
  return (
    <div className="-mx-4">
      {links.map((link) => (
        <Link
          key={link.slug + Math.random()}
          href={link.slug}
          title={link.title}
          className={`${activeLink?.includes(link.slug) ? 'font-bold' : 'font-normal'
            } flex items-center px-4 py-3 hover:bg-gray-100`}
        >
          <IconNavUser icon={activeLink?.includes(link.slug) ? link.iconActive : link.icon} />

          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  )
}
