'use client'

import { Basket } from '@prisma/client'
import { Loader2 } from 'lucide-react'
import { FC, useEffect } from 'react'

import { useGetBasketProducts } from '@/features/shared/services/basket/dataAccess/getBasketProducts'
import { useLoadingState } from '@/store/LoadingState'
import { ExtendedBasketItem } from '@/types/db'

import AddToWishList from '../components/AddAllToWishList'
import { BasketInfoBox } from '../components/BasketInfoBox'
import { BasketProduct } from '../components/BasketProduct/BasketProduct'
import { CompletionOrder } from '../components/CompletionOrder'
import MethodPayments from '../components/MethodPayments'
import RemoveAllFromBasket from '../components/RemoveAllFromBasket'
import { ReturnBtn } from '../components/ReturnBtn'
import ServiceItems from '../components/ServiceItems'

interface BasketPageFeedProps {
  basketData: Basket & {
    Items: ExtendedBasketItem[]
  }
}

export const BasketPageFeed: FC<BasketPageFeedProps> = ({ basketData: initialBasketData }) => {

  const { isLoading, setIsLoading } = useLoadingState()
  const { data, isLoading: isLoadingBasket } = useGetBasketProducts(initialBasketData)

  useEffect(() => {
    setIsLoading(isLoadingBasket)
  }, [isLoadingBasket, setIsLoading])

  // @ts-expect-error react query type @TODO find resolve of problem
  const basketData: BasketData = data?.find((item) => item.id === item.id) ?? initialBasketData

  const { productCount, totalPrice, basketToken } = basketData

  return (
    <>
      <div className="flex flex-wrap -mx-2 md:-mx-3 bg:-mx-4">
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
              <span className="ml-1 text-[#707070]">{`(${productCount ?? 0})`}</span>
            </div>

            {/* Fav & Basket */}
            <div className="flex h-[28px] w-auto items-center justify-start text-[#4d4d4d] md:pt-2">
              <AddToWishList />
              <RemoveAllFromBasket basketToken={basketToken} />
            </div>
          </div>

          {/* Products List */}
          <div>
            <ul>
              {basketData?.Items?.map((product: ExtendedBasketItem) => (
                <BasketProduct key={product.productId} product={product} />
              ))}
            </ul>
          </div>

          <CompletionOrder variant="mobile" totalPrice={totalPrice} />

          <BasketInfoBox />

          <MethodPayments />

          <ReturnBtn mobile={false} />
        </div>

        <CompletionOrder variant="desktop" totalPrice={totalPrice ?? 0} />

        <ReturnBtn mobile={true} />

        <ServiceItems />
      </div>

      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-slate-300 opacity-30">
          <Loader2 className="h-[200px] w-[200px] animate-spin" />
        </div>
      ) : null}
    </>
  )
}
