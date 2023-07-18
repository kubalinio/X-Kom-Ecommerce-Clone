'use client'
import { ReactNode } from 'react'

import useWindowDimensions from '@/hooks/useWindowDimensions'

import { BasketNav } from '../components/BasketNav'
import { HelpContact } from '../components/HelpContact'
import { UserAccount } from '../components/UserAccount'
import { YourFavLists } from '../components/YourFavLists'

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
  basketToken: string
}

export const HeaderNav = ({ isScrollDown, basketToken }: Props) => {
  const { width } = useWindowDimensions()

  return (
    <div className="relative flex items-center">
      <HelpContact isScrollDown={isScrollDown} width={width ?? 0} />

      <span className="mb-1 ml-2 mr-3 hidden h-9 self-center border-r-[1px] border-gray-400 md:flex" />

      <UserAccount isScrollDown={isScrollDown} width={width ?? 0} />
      <YourFavLists isScrollDown={isScrollDown} />
      <BasketNav isScrollDown={isScrollDown} basketToken={basketToken} />
    </div>
  )
}
