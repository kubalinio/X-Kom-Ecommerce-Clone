'use client'
import { FC } from 'react'

import { ExtendedBasketItem } from '@/types/db'

import { ButtonOutlined } from '../Buttons'
import { MiniBasket } from './MiniBasket'

const EmptyMiniBasket = ({ onClick }: { onClick: () => void }) => {
  // const pathname = usePathname()

  return (
    <div className="flex h-full min-h-[150px] flex-col justify-center">
      <div className="flex flex-col items-center px-4 py-8">
        <p className="mb-1 text-2xl font-bold">Twój koszyk jest pusty</p>
        <p className="mb-2">Szukasz inspiracji?</p>
        {/* @TODO Logic for other page */}
        <ButtonOutlined onClick={() => onClick()} slug={'promocje'}>
          Przejdź do {'promocji'}
        </ButtonOutlined>
      </div>
    </div>
  )
}

interface BasketFeedProps {
  onClick: () => void
  basketQuantity: number
  totalPrice: number
  products: ExtendedBasketItem[]
}

export const BasketFeed: FC<BasketFeedProps> = ({ onClick, basketQuantity, products, totalPrice }) => {
  return basketQuantity <= 0 ? (
    <EmptyMiniBasket onClick={() => onClick()} />
  ) : (
    <MiniBasket onClick={() => onClick()} products={products} basketAmt={basketQuantity} totalPrice={totalPrice} />
  )
}
