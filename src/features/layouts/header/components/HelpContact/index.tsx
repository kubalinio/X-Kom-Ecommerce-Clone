/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'

import { helpItem } from '../../dataAccess/HelpContactData'
import { DesktopDropdown } from './DesktopDropdown'
import { MobileDrawer } from './MobileDrawer'


const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="flex items-center justify-center w-full h-full text-gray-700">{icon}</span>
)

type Props = {
  isScrollDown: boolean
  width: number
}

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
          className={`flex min-w-[64px] cursor-pointer items-center justify-center md:min-w-[88px] ${isHover ? 'rounded-t-lg shadow-xCom' : ''
            }`}
        >
          <Link href="/" className="flex flex-col items-center justify-center h-full max-lg:pointer-events-none">
            <div className="relative flex items-center text-2xl h-7 w-7 md:h-8 md:w-8 2xl:text-3xl">
              <Icon icon={helpItem.icon} />
            </div>

            <span
              className={`${!isScrollDown
                ? 'lg:translate-y-0 lg:scale-100 lg:opacity-100'
                : 'lg:h-0 lg:translate-y-[-20px] lg:scale-0 lg:opacity-0 '
                } mt-1 whitespace-nowrap text-[10px] transition-all duration-500`}
            >
              {helpItem.name}
            </span>
          </Link>

        </div>

        {isHover ? (
          <DesktopDropdown
            helpItem={helpItem}
            onClick={() => setIsHover(false)}
          />
        ) : null}
      </div>

      <MobileDrawer
        helpItem={helpItem}
        onClose={() => setShowDrawer(false)}
        showDrawer={showDrawer}
        width={width}
      />


    </>
  )
}