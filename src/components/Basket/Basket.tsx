/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import { Basket } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'

import { ExtendedBasketItem } from '@/types/db'

import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from '../../components/DrawerModal'
import { NavDropdown } from '../Header/HeaderNav/NavDropdown'
import { BasketBtn } from './BasketBtn'
import { BasketFeed } from './BasketFeed'

const basketItem = {
  name: 'Koszyk',
  icon: <SlBasket />,
  slug: 'koszyk',
  subMenu: {
    contact: [
      {
        name: 'Twoje konto',
        icon: <AiOutlineUser className="h-full w-full" />,
        slug: 'konto',
      },
    ],
  },
}

type BasketNavProps = {
  isScrollDown: boolean
  width: number
  basketToken: string
}

export const BasketNav = ({ isScrollDown, width, basketToken }: BasketNavProps) => {
  const [isHover, setIsHover] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const pathname = usePathname()

  const {
    data: basketProducts,
    isFetching,
    // refetch,
    // isFetched,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(`/api/baskets/${basketToken}/basicData`)

      return data as Basket[]
    },
    queryKey: ['basketProducts'],
    refetchOnWindowFocus: false,
    // enabled: false,
  })

  const basket = basketProducts?.find((item) => item.id === item.id) as Basket & { Items: ExtendedBasketItem[] }
  const productCount = basket?.productCount ?? 0
  const totalPrice = basket?.totalPrice ?? 0
  const { Items: products } = basket ?? []

  const handleClick = () => {
    if (width >= 1080 && pathname === '/koszyk') {
      setIsHover(false)
      setShowDrawer(false)
    } else if (width < 1080 && !showDrawer && pathname !== '/koszyk') {
      setShowDrawer(true)
    } else if (width < 1080 && showDrawer) {
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
    if (width < 1080 && pathname === '/koszyk') {
      setIsHover(false)
    } else if (width >= 1080 && !isHover && pathname !== '/koszyk') {
      setIsHover(true)
    } else if (width >= 1080 && isHover) {
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
          <NavDropdown last={true}>
            <BasketFeed
              onClick={() => setIsHover(false)}
              basketQuantity={productCount}
              totalPrice={totalPrice}
              products={products}
            />
          </NavDropdown>
        ) : (
          ''
        )}
      </div>

      {/* mobile */}
      <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
        {showDrawer && (width ?? 0) <= 1080 ? (
          <DrawerModal>
            <DrawerHeader
              name={basketItem.name}
              closeDrawer={() => setShowDrawer(false)}
              basketQuantity={productCount}
            />

            {/* Tylko Conterner 1 Div */}
            <DrawerBody>
              <BasketFeed
                totalPrice={totalPrice}
                basketQuantity={productCount}
                onClick={() => setIsHover(false)}
                products={products}
              />
            </DrawerBody>
          </DrawerModal>
        ) : (
          ''
        )}
      </DrawerContainer>
    </>
  )
}
