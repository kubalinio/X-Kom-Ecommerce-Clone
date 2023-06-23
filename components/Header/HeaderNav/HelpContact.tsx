/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from '../../DrawerModal'
import { NavDropdown } from './NavDropdown'

const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="flex h-full w-full items-center justify-center text-gray-700">{icon}</span>
)

const helpItem = {
  name: 'Pomoc i kontakt',
  icon: <TfiHeadphoneAlt />,
  slug: 'centrum-pomocy',
  subMenu: {
    popular: [
      {
        name: 'Status przesyłki',
        slug: 'status-przesylki',
      },
      {
        name: 'Dostawa',
        slug: 'dostawa',
      },
      {
        name: 'Raty',
        slug: 'raty',
      },
      {
        name: 'Leasing',
        slug: 'leasing',
      },
      {
        name: 'Ubezpieczenie sprzętu',
        slug: 'ubezpieczenia',
      },
      {
        name: 'Zwroty i reklamacje',
        slug: 'serwis',
      },
      {
        name: 'Najczęsciej zadawane pytania',
        slug: 'centrum-pomocy',
      },
    ],
    contact: [
      {
        name: 'Kontakt',
        icon: <TfiHeadphoneAlt className="h-full w-full" />,
        slug: 'kontakt',
      },
      {
        name: 'Salony',
        icon: <HiOutlineBuildingStorefront className="h-full w-full" />,
        slug: 'salony',
      },
      {
        name: 'x-kom@x-kom.pl',
        icon: <GoMail className="h-full w-full" />,
        slug: 'mailto:x-kom@x-kom.pl',
      },
      {
        name: '12 312 31 23',
        icon: <BsTelephone className="h-full w-full" />,
        slug: 'tel:123123123',
        workTime: [
          {
            days: 'pn. - pt.',
            time: '8:00 - 21:00',
          },
          {
            days: 'sob. - niedz.',
            time: '8:00 - 19:00',
          },
        ],
      },
    ],
  },
}

type Props = {
  isScrollDown: boolean
  width: number
}

const DropdownHeader = ({ title }: { title: string }) => (
  <div className="flex h-9 w-full items-center">
    <p className="ml-4 font-bold text-[#707070]">{title}</p>
  </div>
)

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

export const HelpContact = ({ isScrollDown, width }: Props) => {
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
        className={`relative z-10 hidden h-12 md:flex md:h-16 ${isHover ? 'nav-item-after' : ''}`}
      >
        <div
          onClick={() => handleClick()}
          className={`flex min-w-[64px] cursor-pointer items-center justify-center md:min-w-[88px] ${
            isHover ? 'rounded-t-lg shadow-xCom' : ''
          }`}
        >
          <Link href="/" className="flex h-full flex-col items-center justify-center max-lg:pointer-events-none">
            <div className="relative flex h-7 w-7 items-center text-2xl md:h-8 md:w-8 2xl:text-3xl">
              <Icon icon={helpItem.icon} />
            </div>

            <span
              className={`${
                !isScrollDown
                  ? 'lg:translate-y-0 lg:scale-100 lg:opacity-100'
                  : 'lg:h-0 lg:translate-y-[-20px] lg:scale-0 lg:opacity-0 '
              } mt-1 whitespace-nowrap text-[10px] transition-all duration-500`}
            >
              {helpItem.name}
            </span>
          </Link>
        </div>

        {isHover ? (
          <NavDropdown>
            <div>
              <DropdownHeader title={'Popularne tematy'} />

              <ul>
                {helpItem?.subMenu?.popular?.map((item) => (
                  <DropdownLink onClick={() => setIsHover(false)} key={item.name} slug={item.slug} name={item.name} />
                ))}
              </ul>

              <DropdownHeader title={'Skontaktuj się z nami'} />

              <ul>
                {helpItem?.subMenu?.contact.slice(0, 3).map((item) => (
                  <DropdownLink
                    onClick={() => setIsHover(false)}
                    key={item.name}
                    slug={item.slug}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
              </ul>

              {/* Contact */}
              {helpItem?.subMenu?.contact.slice(3, 4).map((item) => (
                <div key={item.name} className="relative h-[72px]">
                  <a
                    href={`${item.slug}`}
                    className="flex h-full items-center px-4 pb-9 hover:no-underline focus:no-underline active:no-underline"
                  >
                    <span className="mr-3 inline-block h-6 w-6" title={item.name}>
                      {item.icon}
                    </span>
                    {item.name}
                  </a>

                  <div className="absolute top-9 ml-10 flex text-sm text-gray-600">
                    <div className="ml-4 flex flex-col">
                      {item.workTime?.map((item, i) => (
                        <span key={item.days + i} className="mb-1 mr-1 whitespace-nowrap">
                          {item.days}
                        </span>
                      ))}
                    </div>

                    <div className="ml-4 flex flex-col">
                      {item.workTime?.map((item, i) => (
                        <span key={item.days + i} className="mb-1 mr-1 whitespace-nowrap">
                          {item.time}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </NavDropdown>
        ) : (
          ''
        )}
      </div>

      <DrawerContainer close={() => setShowDrawer(false)} openDrawer={showDrawer} direction={'right'}>
        {showDrawer && (width ?? 0) <= 1080 ? (
          <DrawerModal>
            <DrawerHeader name={helpItem.name} closeDrawer={() => setShowDrawer(false)} basketQuantity={0} />

            {/* Tylko Conterner 1 Div */}
            <DrawerBody>
              <div className="flex h-14 w-full items-end">
                <p className="ml-4 font-bold text-[#707070]">Popularne tematy</p>
              </div>
              <ul>
                {helpItem?.subMenu?.popular?.map((item, i) => (
                  <li key={item.name + i}>
                    <Link
                      onClick={() => setShowDrawer(false)}
                      href={`/${item.slug}`}
                      className="flex h-12 items-center px-4 hover:no-underline focus:no-underline active:no-underline"
                    >
                      <p className="flex w-full items-center whitespace-nowrap text-base">{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border border-[#ddd]" />
              <div className="mb-1 flex h-14 w-full items-end">
                <p className="ml-4 font-bold text-[#707070]">Skontaktuj się z nami</p>
              </div>
              <ul>
                {helpItem?.subMenu?.contact.slice(0, 3).map((item, i) => (
                  <li key={item.name + i}>
                    <Link
                      onClick={() => setShowDrawer(false)}
                      href={`/${item.slug}`}
                      className="flex h-14 items-center px-4 hover:no-underline focus:no-underline active:no-underline"
                    >
                      <span className="mr-3 inline-block h-6 w-6" title={item.name}>
                        {item.icon}
                      </span>
                      <p className="flex w-full items-center whitespace-nowrap text-base">{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>

              {helpItem?.subMenu?.contact.slice(3, 4).map((item, i) => (
                <div key={item.name + i} className="relative h-[88px]">
                  <a
                    href={`${item.slug}`}
                    className="flex h-14 items-center px-4 hover:no-underline focus:no-underline active:no-underline"
                  >
                    <span className="mr-3 inline-block h-6 w-6" title={item.name}>
                      {item.icon}
                    </span>
                    {item.name}
                  </a>

                  <div className="absolute top-12 ml-10 flex text-sm text-gray-600">
                    <div className="ml-4 flex flex-col">
                      {item.workTime?.map((item, i) => (
                        <span key={item.days + i} className="mb-1 mr-1 whitespace-nowrap">
                          {item.days}
                        </span>
                      ))}
                    </div>

                    <div className="ml-4 flex flex-col">
                      {item.workTime?.map((item, i) => (
                        <span key={item.days + i} className="mb-1 mr-1 whitespace-nowrap">
                          {item.time}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
