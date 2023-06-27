/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'

import { useEffect, useRef, useState } from 'react'
import { AiOutlineMore } from 'react-icons/ai'

// import { AddToFavListBtn } from '@/components/AddToFavList'
// import { BasketItem } from '@/store/basketSlice'

// import { RemoveBasketProductExpand } from './RemoveBasketProduct'

// export const ExpandActionBasketProduct = ({ product }: { product: BasketItem }) => {
// @TODO Upper correct props
export const ExpandActionBasketProduct = () => {
  const [expand, setExpand] = useState(false)

  const buttonRef = useRef<HTMLDivElement>(null)
  const expandBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!buttonRef.current?.contains(e.target as Node) || !buttonRef.current) {
        setExpand(false)
      }
    }
    window.addEventListener('click', listener)
    return () => window.removeEventListener('click', listener)
  }, [])

  return (
    <div className={`${expand ? 'z-[999]' : 'z-[1]'} pointer-events-none relative inline-block md:hidden`}>
      {/* Icon */}
      <div ref={buttonRef}>
        <div className="pointer-events-auto">
          <button
            onClick={() => setExpand(!expand)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#ddd] focus:bg-[#ddd] active:bg-[#ddd]"
          >
            <span className="inline-block h-5 w-5">
              <AiOutlineMore className="h-full w-full text-xl" />
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`${expand ? '' : 'relative overflow-hidden'} pointer-events-auto`}>
        <div
          ref={expandBoxRef}
          className={`${
            expand ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          } absolute left-auto right-0 top-[calc(100%)] z-[2] flex flex-col rounded-lg bg-white py-2 text-left shadow-xCom`}
        >
          {/* @TODO Fix passed props into components */}
          {/* <AddToFavListBtn product={product} versionBtn={'LongFavBtn'} showInfo={() => setExpand(false)} /> */}

          {/* <RemoveBasketProductExpand id={product._id!} closeExpand={() => setExpand(false)} /> */}
        </div>
      </div>
    </div>
  )
}
