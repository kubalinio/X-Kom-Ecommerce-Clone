/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client'

import { Basket } from '@prisma/client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'

import { useGetBasketProducts } from '@/features/shared/services/basket'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ExtendedBasketItem } from '@/types/db'

import { BasketBtn } from './BasketBtn'
import BasketDrawer from './BasketDrawer'
import { BasketDropdown } from './BasketDropdown'


const basketItem = {
  name: 'Koszyk',
  icon: <SlBasket />,
  slug: 'koszyk',
  subMenu: {
    contact: [
      {
        name: 'Twoje konto',
        icon: <AiOutlineUser className="w-full h-full" />,
        slug: 'konto',
      },
    ],
  },
}

type BasketNavProps = {
  isScrollDown: boolean
  basketToken?: string
}

export const BasketNav = ({ isScrollDown }: BasketNavProps) => {
  const [isHover, setIsHover] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const pathname = usePathname()
  const { data: basketProducts, isFetching } = useGetBasketProducts()

  // @ts-expect-error react query type @TODO find resolve of problem
  const basket = basketProducts?.find((item: { id: string }) => item.id === item.id) as Basket & { Items: ExtendedBasketItem[] }

  const productCount = basket?.productCount ?? 0
  const totalPrice = basket?.totalPrice ?? 0
  const { Items: products } = basket ?? []

  const maxlg = useMediaQuery('(max-width: 1080px)')

  const handleClick = () => {
    if (!maxlg && pathname === '/koszyk') {
      setIsHover(false)
      setShowDrawer(false)
    } else if (maxlg && !showDrawer && pathname !== '/koszyk') {
      setShowDrawer(true)
    } else if (maxlg && showDrawer) {
      setShowDrawer(false)
    }
  }

  useEffect(() => {
    if (pathname === '/koszyk') {
      setIsHover(false)
      setShowDrawer(false)
    }
  }, [pathname])

  const handleHover = () => {
    if (maxlg && pathname === '/koszyk') {
      setIsHover(false)
    } else if (!maxlg && !isHover && pathname !== '/koszyk') {
      setIsHover(true)
    } else if (!maxlg && isHover) {
      setIsHover(false)
    }
  }

  return (
    <>
      <div
        onClick={() => handleClick()}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        className={`relative z-10 flex h-12 md:h-16 ${isHover ? 'nav-item-after' : ''}`}
      >
        {/* btn */}
        <BasketBtn
          isLoading={isFetching}
          isHover={isHover}
          basketQuantity={productCount}
          icon={basketItem.icon}
          isScrollDown={isScrollDown}
        />

        {/* ToDo setishover false z feed containera */}
        {isHover ? (
          <BasketDropdown
            onClick={() => setIsHover(false)}
            productCount={productCount}
            products={products}
            totalPrice={totalPrice}
          />
        ) : null}
      </div>

      {/* mobile */}
      {maxlg ? (
        <BasketDrawer
          onClick={() => setShowDrawer(false)}
          basketName={basketItem.name}
          productCount={productCount}
          products={products}
          totalPrice={totalPrice}
          showDrawer={showDrawer}
        />
      ) : null
      }
    </>
  )
}
