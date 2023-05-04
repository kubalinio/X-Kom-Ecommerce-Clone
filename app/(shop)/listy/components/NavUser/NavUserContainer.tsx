'use client'


import { usePathname } from "next/navigation"
import { BiHeart } from "react-icons/bi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { navUserItems } from "../../page"
import { NavUserBody } from "./NavUserBody";
import { NavUserHeader } from "./NavUserHeader";

const navUserItems: navUserItems[] = [
    {
        title: 'Zamówienia',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'Zwroty i reklamacje',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'Listy zakupowe',
        slug: 'listy',
        icon: <IoMdHeartEmpty />,
        iconActive: <IoMdHeart />
    },
    {
        title: 'Opinie',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'Dane do zamówienia',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'Ustawienia konta',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'SalesMaster',
        slug: '',
        icon: <BiHeart />
    },

]

// If active Link add font-bold

export const NavUser = () => {
    const pathname = usePathname()

    return (

        <div className='lg:pl-3'>
            <NavUserHeader />
            <NavUserBody activeLink={pathname} links={navUserItems} />
        </div>

    )
}

