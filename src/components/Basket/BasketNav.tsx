'use client'

import { Basket } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ExtendedBasketItem } from '@/types/db'

import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from '../DrawerModal'
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
  basketToken: string
}

export const BasketNav = ({ isScrollDown, basketToken }: BasketNavProps) => {
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
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        className={`relative z-10 flex h-12 md:h-16 ${isHover ? 'nav-item-after' : ''}`}
      >
        {/* btn */}
        <BasketBtn
          onClick={() => handleClick()}
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
            <div>Here Basket Feed</div>
          </NavDropdown>
        ) : (
          ''
        )}
      </div>

      {/* mobile */}
      <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
        {showDrawer && !maxlg ? (
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
