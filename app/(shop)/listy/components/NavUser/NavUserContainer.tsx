'use client'


import { usePathname } from "next/navigation"
import { navUserItems } from "../../page"
import { NavUserBody } from "./NavUserBody";
import { NavUserHeader } from "./NavUserHeader";


type Props = {
    items: navUserItems[]
}

// If active Link add font-bold

export const NavUser = ({ items }: Props) => {
    const pathname = usePathname()

    return (

        <div className='lg:pl-3'>
            <NavUserHeader />
            <NavUserBody activeLink={pathname} links={items} />
        </div>

    )
}

