import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import useDebounce from '@/hooks/useDebounce'

import { categorieMainProps } from '../../dataAccess/CategoriesData'

type CategoryDropdownProps = {
  category: categorieMainProps
  index: number
}

export const CategorieBarDropdown = ({ category, index }: CategoryDropdownProps) => {
  const { name, icon, recommendProduct, subMenu } = category
  const [isHover, setIsHover] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useDebounce(
    () => {
      setIsActive(isHover)
    },
    150,
    [isHover]
  )

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
    setIsHover(false)
  }

  const newName = name.replace('i ', 'i\u00a0')

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={name + index}
      className={`${
        isActive ? 'nav-item-after z-[4] rounded-t-lg bg-white shadow-xCom ' : 'z-[3]'
      } relative flex-grow last:flex-grow-0 last:text-pink-800`}
    >
      <Link
        href="/"
        className={`flex h-14 w-min items-center px-3 ${index === 8 ? 'text-[#be0064]' : 'text-[#1a1a1a]'}`}
      >
        <div className="flex items-center max-xl:hidden">
          <span className="mr-2 inline-block h-7 w-7 overflow-hidden">{icon}</span>
        </div>

        <span className={`text-[13px] ${index === 8 ? 'min-w-[110px]' : ''}`}>{newName}</span>
      </Link>

      {/* scaleY & visible do Animacji */}
      <section
        className={`${isActive ? 'block' : 'hidden'} ${
          index >= 4 ? 'right-0 rounded-tr-none' : 'left-0 rounded-tl-none'
        } absolute rounded-lg bg-white pb-6 pt-2  shadow-xCom`}
      >
        <div className="flex w-auto">
          {/* Left Section */}
          <div className="h-[416px] w-[290px]">
            {/* Heading */}
            <div className="flex items-center justify-between lg:w-full">
              {/* Pokaż całą kategorię Button ??? od 1024px hidden */}
              <div></div>
              {/* Heading Dektop  */}
              <div className="lg:flex lg:h-8 lg:w-full lg:items-center lg:justify-between">
                <div className="ml-6 font-bold text-[#707070]">{name}</div>
                <Link href={`/slug`} className="mr-6 text-[#707070]">
                  Wszystkie
                </Link>
              </div>
            </div>

            {/* List Box */}
            <div className="lg:flex lg:h-full lg:flex-col">
              {/* UL LIST */}
              <ul className="h-full">
                {/* SubMenu Items */}
                {subMenu?.map((category, i) => (
                  <li key={category.name + i}>
                    <Link
                      href={`/`}
                      className="flex w-full items-center rounded-r-full bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] lg:h-9 lg:pl-6 lg:pr-[22px]"
                    >
                      <p className="flex w-full items-center whitespace-nowrap">{category.name}</p>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/products`}
                    className="flex w-full items-center rounded-r-full bg-white font-bold text-[#1a1a1a] hover:bg-[#f5f5f5] lg:h-9 lg:pl-6 lg:pr-[22px]"
                  >
                    <p className="flex w-full items-center whitespace-nowrap">Więcej...</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="h-[416px] w-[372px]">
            {/* Heading */}
            <div className="lg:flex lg:h-8 lg:w-full lg:items-center lg:justify-between">
              <div className="ml-6 font-bold text-[#707070]">Polecany produkt</div>
            </div>

            {/* Img */}
            <div className="flex flex-col">
              <Link href={`/slug`} className="ml-6 mt-2">
                <span className="inline-flex items-center justify-center overflow-hidden">
                  <Image
                    loading="lazy"
                    src={recommendProduct}
                    width={480}
                    height={320}
                    alt=""
                    className="h-auto w-auto max-w-none object-contain"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </li>
  )
}
