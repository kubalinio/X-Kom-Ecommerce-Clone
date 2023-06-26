'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="flex h-full w-full items-center justify-center text-gray-700">{icon}</span>
)

const favItem = {
  name: 'Twoje listy',
  icon: <MdOutlineFavoriteBorder />,
  slug: 'listy',
}

type Props = {
  isScrollDown: boolean
}

export const YourFavLists = ({ isScrollDown }: Props) => {
  return (
    <>
      <div className={`relative z-10 flex h-12 md:h-16`}>
        <div className="flex min-w-[64px] cursor-pointer items-center justify-center md:min-w-[88px]">
          <Link href="/listy" className="flex h-full flex-col items-center justify-center">
            <div className="relative flex h-7 w-7 items-center text-2xl md:h-8 md:w-8 2xl:text-3xl">
              <Icon icon={favItem.icon} />
            </div>

            <span
              className={`${
                !isScrollDown
                  ? 'lg:translate-y-0 lg:scale-100 lg:opacity-100'
                  : 'lg:h-0 lg:translate-y-[-20px] lg:scale-0 lg:opacity-0 '
              } mt-1 whitespace-nowrap text-[10px] transition-all duration-500`}
            >
              {favItem.name}
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
