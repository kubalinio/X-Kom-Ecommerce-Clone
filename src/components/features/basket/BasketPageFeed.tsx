'use client'

import { Basket } from '@prisma/client'
import { FC } from 'react'

import { ExtendedBasketItem } from '@/types/db'

import AddToWishList from './AddAllToWishList'
import { BasketInfoBox } from './BasketInfoBox'
import { BasketProduct } from './BasketProduct'
import { CompletionOrder } from './CompletionOrder'
import MethodPayments from './MethodPayments'
import RemoveAllFromBasket from './RemoveAllFromBasket'
import { ReturnBtn } from './ReturnBtn'
import ServiceItems from './ServiceItems'

interface BasketPageFeedProps {
  basketData: Basket & {
    Items: ExtendedBasketItem[]
  }
}

export const BasketPageFeed: FC<BasketPageFeedProps> = ({ basketData }) => {
  const { productCount, totalPrice } = basketData
  console.log(basketData)

  return (
    <div className="-mx-2 flex flex-wrap md:-mx-3 bg:-mx-4">
      {/* Basket Items */}
      <div className="w-full px-2 md:px-3 bg:w-2/3">
        <h1 className="mb-4 text-2xl font-bold leading-7 md:hidden">
          Koszyk
          <span className="ml-1 text-[#707070]">{`(${productCount})`}</span>
        </h1>

        {/* HEader & Fav & Clean Basket */}
        <div className="-mx-4 flex h-[48px] items-center justify-between border-y border-[#ddd] px-4 md:m-0 md:mb-4 md:h-auto md:border-none md:p-0">
          {/* Heading */}
          <div className="hidden text-3xl font-bold leading-7 md:block">
            Koszyk
            <span className="ml-1 text-[#707070]">{`(${productCount})`}</span>
          </div>

          {/* Fav & Basket */}
          <div className="flex h-[28px] w-auto items-center justify-start text-[#4d4d4d] md:pt-2">
            <AddToWishList />
            <RemoveAllFromBasket />
          </div>
        </div>

        {/* Products List */}
        <div>
          <ul>
            {basketData.Items.map((product) => (
              <BasketProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>

        <CompletionOrder totalPrice={totalPrice} mobile={true} />

        {/* Basket Info MD: */}
        <BasketInfoBox />

        <MethodPayments />

        <ReturnBtn mobile={false} />
      </div>

      {/* desktop */}
      <CompletionOrder mobile={false} totalPrice={totalPrice} />

      <ReturnBtn mobile={true} />

      <div className="mt-4 w-full px-2 md:mt-6 bg:px-4">
        <hr className="-mx-4 h-[1px] w-[calc(100%+32px)] bg-[#ddd] md:hidden" />
        <ServiceItems />
      </div>
    </div>
  )
}
