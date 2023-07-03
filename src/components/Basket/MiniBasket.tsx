'use client'

import Link from 'next/link'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ExtendedBasketItem } from '@/types/db'

import { BasketBottom } from './BasketBottom'
import { BasketInfo } from './BasketInfo'
import { BasketProduct } from './BasketProduct'

const BasketHeader = ({ totalQuantity }: { totalQuantity: number }) => (
  <div className="flex w-full items-center">
    <h3 className="flex-shrink-[6] flex-grow basis-auto whitespace-nowrap pl-2 text-lg font-bold text-black">
      Koszyk
      <span className="ml-1 text-[#707070]">{`(${totalQuantity})`}</span>
    </h3>
    <Link href="/koszyk" className="text-blue-500 hover:text-blue-600 focus:text-blue-600">
      Edytuj
    </Link>
  </div>
)

type MiniBasketProps = {
  onClick: () => void
  basketAmt: number
  products: ExtendedBasketItem[]
  totalPrice: number
}

export const MiniBasket = ({ onClick, products, basketAmt, totalPrice }: MiniBasketProps) => {
  const minLg = useMediaQuery('(min-width: 1080px)')
  console.log(products)
  return (
    <div className="flex h-full min-h-[150px] flex-col justify-center lg:max-h-[610px]">
      {/* 0 in dekstop Heeader Desktop */}
      <div className="hidden min-h-[56px] w-full items-center justify-between rounded-t-lg border-b border-[#ddd] bg-white p-2 pr-4 lg:inline-flex">
        <BasketHeader totalQuantity={basketAmt} />
      </div>

      {/* 15 */}
      {!minLg ? (
        <div className="border-b border-[#ddd] px-2">
          <BasketInfo />
        </div>
      ) : null}

      {/* 3 */}
      <div className="-mb-1 h-full overflow-y-auto break-words px-4">
        {products.map((item) => (
          <BasketProduct
            key={item.productId}
            onClick={() => onClick()}
            name={item.productHeader.name}
            count={item.count}
            price={item.productHeader.price}
            photo={item.productHeader.photo}
            slug={item.productHeader.slug}
          />
        ))}
      </div>

      {/* 5 */}
      <div className="sticky mt-auto rounded-lg border border-[#ddd] bg-[#f5f5f5] p-4 pb-3 ">
        <BasketBottom onClick={() => onClick()} totalAmount={totalPrice} isDesktop={minLg} />
      </div>
    </div>
  )
}
