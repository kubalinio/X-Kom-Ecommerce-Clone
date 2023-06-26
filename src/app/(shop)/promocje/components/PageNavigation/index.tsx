'use client'

import { useEffect } from 'react'

import NavItem from './NavItem'

const navItemData = [
  {
    title: 'Promocje',
    number: 10,
  },
  {
    title: 'Przedsprzedaże',
    number: 4,
  },
  {
    title: 'Konkursy',
    number: 0,
  },
]

export const PageNavigation = () => {
  useEffect(() => {
    document.body.style.height = '100%'
    document.body.style.overflowX = 'hidden'
  }, [])

  return (
    <nav className="sticky top-[0px] z-[100] mx-[calc(50%-50vw)] mb-8 mt-4 w-screen bg-white transition-[top] duration-300 lg:top-[56px]">
      {/* Shadow */}
      <div className="absolute z-[-1] ml-[calc(50%-50vw)] h-[48px] w-screen shadow-sm-xCom" />

      <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1156px] items-center justify-center sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        <div className="flex h-[48px] flex-1 overflow-x-hidden">
          <div className="relative flex min-w-full basis-auto">
            {/* NavItems Component */}
            {navItemData.map((item) => (
              <NavItem key={item.title + Math.random()} title={item.title} number={item.number} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
