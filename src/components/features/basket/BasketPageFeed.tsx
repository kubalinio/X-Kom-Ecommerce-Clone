'use client'

import { Basket } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'

import { ExtendedBasketItem } from '@/types/db'

import AddToWishList from './AddAllToWishList'
import { BasketInfoBox } from './BasketInfoBox'
import { BasketProduct } from './BasketProduct'
import { CompletionOrder } from './CompletionOrder'
import MethodPayments from './MethodPayments'
import RemoveAllFromBasket from './RemoveAllFromBasket'
import { ReturnBtn } from './ReturnBtn'
import ServiceItems from './ServiceItems'

type LoadingContextType = {
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => undefined,
})

interface BasketPageFeedProps {
  basketData: Basket & {
    Items: ExtendedBasketItem[]
  }
}

type BasketData = Basket & { Items: ExtendedBasketItem[] }

export const BasketPageFeed: FC<BasketPageFeedProps> = ({ basketData: initialBasketData }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { data, isFetching } = useQuery({
    queryKey: ['basketPageData'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/baskets/${initialBasketData.basketToken}/basicData`)
      // @ts-expect-error object error type
      return data.find((b) => b.id === b.id) as BasketData
    },
    initialData: initialBasketData,
  })

  const basketData: BasketData = data ?? initialBasketData

  const { productCount, totalPrice } = basketData

  return (
    <>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
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
                {basketData?.Items?.map((product) => (
                  <BasketProduct key={product.id} product={product} />
                ))}
              </ul>
            </div>

            <CompletionOrder totalPrice={totalPrice} mobile={true} />

            <BasketInfoBox />

            <MethodPayments />

            <ReturnBtn mobile={false} />
          </div>

          <CompletionOrder mobile={false} totalPrice={totalPrice} />

          <ReturnBtn mobile={true} />

          <ServiceItems />
        </div>
      </LoadingContext.Provider>

      {isLoading || isFetching ? (
        <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-slate-300 opacity-30">
          <Loader2 className="h-[200px] w-[200px] animate-spin" />
        </div>
      ) : null}
    </>
  )
}

export const useLoadingContext = () => useContext(LoadingContext)
