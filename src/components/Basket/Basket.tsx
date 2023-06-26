/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
import { useSelector } from 'react-redux'

import { RootState } from '@/store'

import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from '../../components/DrawerModal'
import { NavDropdown } from '../Header/HeaderNav/NavDropdown'
import { EmptyMiniBasket } from './EmptyMiniBasket'
import { MiniBasket } from './MiniBasket'

const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="flex h-full w-full items-center justify-center text-gray-700">{icon}</span>
)

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
}

export const BasketNav = ({ isScrollDown, width }: BasketNavProps) => {
  const [isHover, setIsHover] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const pathname = usePathname()

  const basket = useSelector((state: RootState) => state.basket)
  const basketQuantity = basket.basketTotalQuantity

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
        <div
          className={`flex min-w-[64px] cursor-pointer items-center justify-center md:min-w-[88px] ${
            isHover ? 'rounded-t-lg shadow-xCom' : ''
          }`}
        >
          <Link href="/koszyk" className="flex h-full flex-col items-center justify-center max-lg:pointer-events-none">
            <div className="relative flex h-7 w-7 items-center text-2xl md:h-8 md:w-8 2xl:text-3xl">
              {basketQuantity > 0 ? (
                <div className="absolute -right-1 top-0">
                  <div className="flex w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-xs text-white shadow-sm-xCom shadow-white">
                    {basketQuantity || 0}
                  </div>
                </div>
              ) : null}

              <Icon icon={basketItem.icon} />
            </div>

            <span
              className={`${
                !isScrollDown
                  ? 'lg:translate-y-0 lg:scale-100 lg:opacity-100'
                  : 'lg:h-0 lg:translate-y-[-20px] lg:scale-0 lg:opacity-0 '
              } mt-1 whitespace-nowrap text-[10px] transition-all duration-500`}
            >
              {basketItem.name}
            </span>
          </Link>
        </div>

        {isHover ? (
          <NavDropdown last={true}>
            {basketQuantity > 0 ? (
              <MiniBasket onClick={() => setIsHover(false)} />
            ) : (
              <EmptyMiniBasket onClick={() => setIsHover(false)} />
            )}
          </NavDropdown>
        ) : (
          ''
        )}
      </div>

      <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
        {showDrawer && (width ?? 0) <= 1080 ? (
          <DrawerModal>
            <DrawerHeader
              name={basketItem.name}
              closeDrawer={() => setShowDrawer(false)}
              basketQuantity={basketQuantity}
            />

            {/* Tylko Conterner 1 Div */}
            <DrawerBody>
              {basketQuantity > 0 ? (
                <MiniBasket onClick={() => setShowDrawer(false)} />
              ) : (
                <EmptyMiniBasket onClick={() => setShowDrawer(false)} />
              )}
            </DrawerBody>
          </DrawerModal>
        ) : (
          ''
        )}
      </DrawerContainer>
    </>
  )
}
