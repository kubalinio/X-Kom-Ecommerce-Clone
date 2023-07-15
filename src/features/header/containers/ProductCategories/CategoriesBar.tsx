'use client'

import { useState } from 'react'

import useDebounce from '@/hooks/useDebounce'

import Overlay from '../../../shared/components/Overlay'
import { categorieItems } from '../../dataAccess/CategoriesData'
import { CategorieBarDropdown } from './CategorieBarDropdown'

type CategoriesDesktop = {
  isScroll: boolean
  width: number | undefined
}

export const CategoriesDesktopBar = ({ isScroll, width }: CategoriesDesktop) => {
  const [isActive, setIsActive] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useDebounce(
    () => {
      if (isHover) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    },
    150,
    [isHover]
  )

  return (
    <div
      className={`${
        isScroll ? '-translate-y-1/2 scale-y-0 opacity-0' : 'translate-y-0 scale-y-100 opacity-100'
      } relative z-[1] transition-all duration-300`}
    >
      <div>
        {/* Product Categories Container */}
        <div className="relative z-[1] hidden w-full bg-[#f5f5f5] pt-[1px] shadow-md lg:block">
          {width ?? 0 >= 1080 ? (
            <div className="relative mx-auto flex items-center justify-center bg-inherit lg:w-[calc(100%-64px)] lg:max-w-[1156px]  2xl:max-w-[1444px]">
              {/* Product Categories */}
              <nav onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="w-full">
                <ul className="flex justify-between">
                  {categorieItems.map((category, i) => (
                    <CategorieBarDropdown key={category.slug + i} category={category} index={i} />
                  ))}
                </ul>
              </nav>
              {isActive ? <Overlay /> : ''}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
