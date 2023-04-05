'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

type DropDownLinkProps = {
    slug: string
    name: string
    icon?: ReactNode
}

const DropdownLink = ({ slug, name, icon }: DropDownLinkProps) => (

    <li>
        <Link href={`/${slug}`} className='flex items-center h-9 px-4 hover:no-underline active:no-underline focus:no-underline hover:bg-[#f5f5f5]'>
            {icon && <span className='inline-block w-6 h-6 mr-3' title={name}>{icon}</span>}
            <p className='flex items-center w-full text-base whitespace-nowrap'>{name}</p>
        </Link>
    </li>
)


type NavDropdownProps = {
    children: ReactNode
    last?: boolean
}

export const NavDropdown = ({ children, last }: NavDropdownProps) => {


    return (
        <div className={`lg:block hidden  absolute top-[95%] z-[11] bg-white rounded-lg shadow-xCom min-w-[256px] pt-2 pb-4 md:min-w-[256px] ${last ? 'right-0 w-[360px] rounded-tr-none lg:p-0' : 'left-0 rounded-tl-none'}`}>

            {children}

        </div>
    )
}


