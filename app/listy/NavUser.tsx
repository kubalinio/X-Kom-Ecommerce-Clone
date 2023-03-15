'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react";
import { navUserItems } from "./page"

export const IconNavUser = ({ icon }: { icon: ReactNode }) => <span className='inline-block w-6 h-6 text-2xl md:mr-3'>{icon}</span>;

const NavUserHeader = () => (
    // Prop name user
    <div className="min-h-[52px]">
        <p className="text-[#4d4d4d]">
            Cześć,
            {/* Dynamicznie nazwy when auth */}
        </p>
        <Link href='/logowanie' className="text-lg font-bold lg:mb-3">
            Zaloguj się
        </Link>
    </div>
)

type UserBody = {
    activeLink: string | null
    links: navUserItems[]
}

const NavUserBody = ({ activeLink, links }: UserBody) => {

    return (
        <div className="-mx-4">
            {links.map(link => (
                <Link
                    key={link.slug + Math.random()}
                    href={link.slug}
                    title={link.title}
                    className={`${activeLink === `/${link.slug}` ? 'font-bold' : 'font-normal'} flex items-center py-3 px-4 hover:bg-gray-100`}>

                    <IconNavUser icon={link.icon} />

                    <span>
                        {link.title}
                    </span>
                </Link>
            ))}
        </div>
    )
}

type Props = {
    items: navUserItems[]
}

// If active Link add font-bold

const NavUser = ({ items }: Props) => {
    const pathname = usePathname()

    return (

        <div className='lg:pl-3'>
            <NavUserHeader />
            <NavUserBody activeLink={pathname} links={items} />
        </div>

    )
}

export default NavUser