'use client'

import { usePathname } from 'next/navigation'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { GoPackage } from 'react-icons/go'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineReviews } from 'react-icons/md'
import { TbNotes } from 'react-icons/tb'

import { navUserItems } from '@/app/(shop)/(favlists)/listy/page'

import { NavUserBody } from './NavUserBody'
import { NavUserHeader } from './NavUserHeader'

const navUserItems: navUserItems[] = [
  {
    title: 'Zamówienia',
    slug: '/logowanie',
    icon: <TbNotes />,
  },
  {
    title: 'Zwroty i reklamacje',
    slug: '/logowanie',
    icon: <GoPackage />,
  },
  {
    title: 'Listy zakupowe',
    slug: '/list',
    icon: <IoMdHeartEmpty />,
    iconActive: <IoMdHeart />,
  },
  {
    title: 'Opinie',
    slug: '/logowanie',
    icon: <MdOutlineReviews />,
  },
  {
    title: 'Dane do zamówienia',
    slug: '/logowanie',
    icon: <HiOutlineLocationMarker />,
  },
  {
    title: 'Ustawienia konta',
    slug: '/logowanie',
    icon: <IoSettingsOutline />,
  },
  {
    title: 'SalesMaster',
    slug: '/logowanie',
    icon: <AiOutlineDollarCircle />,
  },
]

// If active Link add font-bold

export const NavUser = () => {
  const pathname = usePathname()

  return (
    <div className="lg:pl-3">
      <NavUserHeader />
      <NavUserBody activeLink={pathname} links={navUserItems} />
    </div>
  )
}
