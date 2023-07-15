/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { AiOutlineHeart, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { BiMessageDots } from 'react-icons/bi'
import { BsCreditCard2Front } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineClipboardList } from 'react-icons/hi'

import { ButtonOutlined, ButtonPrimary } from '@/features/shared/components/Buttons'

import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from '../../../shared/components/DrawerModal'
import { NavDropdown } from './NavDropdown'

const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="flex h-full w-full items-center justify-center text-gray-700">{icon}</span>
)

const userItem = {
  name: 'Twoje konto',
  icon: <CgProfile />,
  slug: 'konto',
  subMenu: {
    contact: [
      {
        name: 'Twoje konto',
        icon: <AiOutlineUser className="h-full w-full" />,
        slug: 'konto',
      },
      {
        name: 'Zamówienia',
        icon: <HiOutlineClipboardList className="h-full w-full" />,
        slug: 'zamowienia',
      },
      {
        name: 'Listy zakupowe',
        icon: <AiOutlineHeart className="h-full w-full" />,
        slug: 'listy',
      },
      {
        name: 'Opinie',
        icon: <BiMessageDots className="h-full w-full" />,
        slug: 'opinie',
      },
      {
        name: 'Dane do zamówień',
        icon: <BsCreditCard2Front className="h-full w-full" />,
        slug: 'dane-do-zamowienia',
      },
      {
        name: 'Ustawienia konta',
        icon: <AiOutlineSetting className="h-full w-full" />,
        slug: 'ustawienia-konta',
      },
    ],
  },
}

type Props = {
  isScrollDown: boolean
  width: number
}

type DropDownLinkProps = {
  slug: string
  name: string
  icon?: ReactNode
  onClick: () => void
}

const DropdownLink = ({ slug, name, icon, onClick }: DropDownLinkProps) => (
  <li>
    <Link
      onClick={() => onClick()}
      href={`/${slug}`}
      className="flex h-9 items-center px-4 hover:bg-[#f5f5f5] hover:no-underline focus:no-underline active:no-underline"
    >
      {icon && (
        <span className="mr-3 inline-block h-6 w-6" title={name}>
          {icon}
        </span>
      )}
      <p className="flex w-full items-center whitespace-nowrap text-base">{name}</p>
    </Link>
  </li>
)

const UserAccount = ({ isScrollDown, width }: Props) => {
  const [isHover, setIsHover] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  const handleClick = () => {
    if (width >= 1080) {
      setShowDrawer(false)
    } else if (width < 1080 && !showDrawer) {
      setShowDrawer(true)
    } else if (width < 1080 && showDrawer) {
      setShowDrawer(false)
    }
  }

  const handleHover = () => {
    if (width < 1080) {
      return
    } else if (width >= 1080 && !isHover) {
      setIsHover(true)
    } else if (width >= 1080 && isHover) {
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
        <div
          onClick={() => handleClick()}
          className={`flex min-w-[64px] cursor-pointer items-center justify-center md:min-w-[88px] ${
            isHover ? 'rounded-t-lg shadow-xCom' : ''
          }`}
        >
          <Link href="/" className="flex h-full flex-col items-center justify-center max-lg:pointer-events-none">
            <div className="relative flex h-7 w-7 items-center text-2xl md:h-8 md:w-8 2xl:text-3xl">
              <Icon icon={userItem.icon} />
            </div>
            <span
              className={`${
                !isScrollDown
                  ? 'lg:translate-y-0 lg:scale-100 lg:opacity-100'
                  : 'lg:h-0 lg:translate-y-[-20px] lg:scale-0 lg:opacity-0 '
              } mt-1 whitespace-nowrap text-[10px] transition-all duration-500`}
            >
              {userItem.name}
            </span>
          </Link>
        </div>

        {isHover ? (
          <NavDropdown>
            <div className="flex h-full max-h-[616px] min-h-[257px] flex-col justify-between">
              <div className="overflow-hidden">
                {/* Buttons */}
                <div className="p-4 pt-6">
                  <ButtonPrimary onClick={() => setIsHover(false)} slug="logowanie">
                    Zaloguj się
                  </ButtonPrimary>

                  <hr className="relative my-6 h-[1px] w-full border-none bg-[#ddd]" />

                  <p className="absolute left-1/2 top-[78px] -translate-x-1/2 transform bg-white px-4 text-gray-500">
                    Nie masz konta?
                  </p>

                  <ButtonOutlined onClick={() => setIsHover(false)} slug="rejestracja">
                    Załóż Konto
                  </ButtonOutlined>
                </div>

                <hr className="my-3 h-[1px] w-full border-none bg-[#ddd]" />

                {/* Functions */}
                <div>
                  <ul>
                    {userItem?.subMenu?.contact.map((item) => (
                      <DropdownLink
                        onClick={() => setIsHover(false)}
                        key={item.name}
                        slug={item.slug}
                        name={item.name}
                        icon={item.icon}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </NavDropdown>
        ) : (
          ''
        )}
      </div>

      <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
        {showDrawer && (width ?? 0) <= 1080 ? (
          <DrawerModal>
            <DrawerHeader name={userItem.name} closeDrawer={() => setShowDrawer(false)} basketQuantity={0} />

            {/* Tylko Conterner 1 Div */}
            <DrawerBody>
              <div className="flex h-full min-h-[257px] flex-col justify-between">
                <div className="overflow-hidden">
                  {/* Buttons */}
                  <div className="p-4 pt-6">
                    <ButtonPrimary onClick={() => setShowDrawer(false)} slug="logowanie">
                      Zaloguj się
                    </ButtonPrimary>

                    <hr className="relative my-6 h-[1px] w-full border-none bg-[#ddd]" />

                    <p className="absolute left-1/2 top-[72px] -translate-x-1/2 transform bg-white px-4">
                      Nie masz konta?
                    </p>

                    <ButtonOutlined onClick={() => setShowDrawer(false)} slug="rejestracja">
                      Załóż Konto
                    </ButtonOutlined>
                  </div>

                  <hr className="my-3 h-[1px] w-full border-none bg-[#ddd]" />

                  {/* Functions */}
                  <div>
                    <ul>
                      {userItem.subMenu?.contact.map((item) => (
                        <li key={item.name}>
                          <Link
                            onClick={() => setShowDrawer(false)}
                            href={`/${item.slug}`}
                            className="flex h-14 items-center px-5 hover:no-underline focus:no-underline active:no-underline"
                          >
                            <span className="mr-4 inline-block h-6 w-6" title={item.name}>
                              {item.icon}
                            </span>
                            <p className="flex w-full items-center whitespace-nowrap text-base">{item.name}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </DrawerBody>
          </DrawerModal>
        ) : (
          ''
        )}
      </DrawerContainer>
    </>
  )
}

{
  /* DropDown */
}
{
  /* {isHover && item.subMenu ? (
                <NavDropdown
                    index={i}
                    isActiveContent={activeNav}
                    navItem={menuItems[activeNav]} />
            )
                : ''
            }  */
}

{
  /* Portals */
}
{
  /* {
            item.subMenu && (mounted && refPortal.current ? createPortal(
                <Drawer
                    show={isModalShow && activeNav === i}
                    close={() => setIsModalShow(false)}
                    isActiveNum={activeNav}
                    navItem={menuItems[activeNav]}
                />
                , refPortal.current) : null
            )
        } */
}

export default UserAccount
