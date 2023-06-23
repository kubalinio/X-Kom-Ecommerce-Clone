'use client'

import { ReactNode } from 'react'

import useWindowDimensions from '@/hooks/useWindowDimensions'

import { BasketNav } from '../../Basket/Basket'
import { HelpContact } from './HelpContact'
import UserAccount from './UserAccount'
import { YourFavLists } from './YourFavLists'

export type MenuItemsProps = {
  name: string
  icon: JSX.Element
  slug: string
  subMenu?: {
    popular?: {
      name: string
      slug: string
    }[]
    contact: {
      name: string
      icon: ReactNode
      slug: string
      workTime?: {
        days: string
        time: string
      }[]
    }[]
  }
}

type Props = {
  isScrollDown: boolean
}

export const HeaderNav = ({ isScrollDown }: Props) => {
  const { width } = useWindowDimensions()

  return (
    <div className="relative flex items-center">
      <HelpContact isScrollDown={isScrollDown} width={width ?? 0} />

      <span className="mb-1 ml-2 mr-3 hidden h-9 self-center border-r-[1px] border-gray-400 md:flex" />

      <UserAccount isScrollDown={isScrollDown} width={width ?? 0} />
      <YourFavLists isScrollDown={isScrollDown} />
      <BasketNav isScrollDown={isScrollDown} width={width ?? 0} />
    </div>
  )
}

// const handleHoverNav = (width: number | undefined, num: number) => {
//     if (width! < 1027) {
//         return
//     } else if (num === 0 || num === 1 || num === 3) {
//         setActiveNav(num)
//         setIsHover(true)
//     } else {
//         setIsHover(false)
//     }
// }

// const handleActiveNav = (width: number | undefined, num: number, link: string) => {

//     if (width! > 1027) {
//         setIsModalShow(false)
//         // Check better solution
//         router.replace(`/${link}`)
//     } else if (num === 0 || num === 1 || num === 3 && width! < 1027) {
//         setActiveNav(num)
//         setIsModalShow(true)
//     } else {
//         setIsModalShow(false)
//         // Check better solution
//         router.replace(`/${link}`)
//     }
// }

// useEffect(() => {
//     refPortal.current = document.body.querySelector<HTMLElement>('#react-portals')!;
//     setMounted(true)

// }, [])
