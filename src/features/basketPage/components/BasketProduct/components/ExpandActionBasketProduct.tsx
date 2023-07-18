'use client'

import { useEffect, useRef, useState } from 'react'
import { AiOutlineMore } from 'react-icons/ai'

import { DeleteBasketBtn } from '@/features/shared/services/basket/components/DeleteBasketBtn'
import { useRemoveBasketItem } from '@/features/shared/services/basket/dataAccess/mutations/removeBasketItem'
import { FavListBtn, ToggleFavList } from '@/features/shared/services/favLists'
import { useLoadingState } from '@/store/LoadingState'

interface ExpandProps {
  productId: string
  basketToken: string
}

export const ExpandActionBasketProduct = ({ productId, basketToken }: ExpandProps) => {
  const { isLiked, isLoading: isLoadingFav, toggleFav } = ToggleFavList(productId)
  const { mutate, isLoading: isLoadingDelete } = useRemoveBasketItem()
  const { setIsLoading } = useLoadingState()

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

  useEffect(() => {
    isLoadingFav || isLoadingDelete ? setIsLoading(true) : setIsLoading(false)
  }, [isLoadingFav, isLoadingDelete, setIsLoading])

  const handleClickFav = () => {
    toggleFav()
    setExpand(false)
  }

  const handleClickDelete = () => {
    mutate({ basketToken, productId })
  }

  return (
    <div className={`${expand ? 'z-[999]' : 'z-[1]'} pointer-events-none relative inline-block md:hidden`}>
      {/* Icon */}
      <div ref={buttonRef}>
        <div className="pointer-events-auto">
          <button
            onClick={() => setExpand(!expand)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#ddd] focus:bg-[#ddd] active:bg-[#ddd]"
          >
            <span className="inline-block w-5 h-5">
              <AiOutlineMore className="w-full h-full text-xl" />
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`${expand ? '' : 'relative overflow-hidden'} pointer-events-auto`}>
        <div
          ref={expandBoxRef}
          className={`${expand ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            } absolute left-auto right-0 top-[calc(100%)] z-[2] flex flex-col rounded-lg bg-white py-2 text-left shadow-xCom`}
        >
          {/* @TODO Fix passed props into components */}
          <FavListBtn onClick={() => handleClickFav()} variant={'FavLong'} isLiked={isLiked} isLoading={isLoadingFav} />

          <DeleteBasketBtn onClick={() => handleClickDelete()} variant={'long'} isLoading={isLoadingDelete} />
        </div>
      </div>
    </div>
  )
}
