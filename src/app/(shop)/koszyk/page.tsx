'use client'

import { useSelector } from 'react-redux'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import { RootState } from '@/store'

import { BasketInfo } from '../../../components/Basket'
import CompletionOrder from '../koszyk/components/CompletionOrder'
import EmptyBasket from '../koszyk/components/EmptyBasket'
import { Information } from '../koszyk/components/Information'
import MethodPayments from '../koszyk/components/MethodPayments'
import RemoveAllFromBasket from '../koszyk/components/RemoveAllFromBasket'
import ReturnBtn from '../koszyk/components/ReturnBtn'
import ServiceItems from '../koszyk/components/ServiceItems'
import AddToWishList from './components/AddAllToWishList'
import { BasketProduct } from './components/BasketProduct'

const BasketPage = () => {
  const basket = useSelector((state: RootState) => state.basket)
  const { width } = useWindowDimensions()

  return (
    <main className="relative mx-auto mt-5 w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:mt-12 lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
      {basket.basketTotalQuantity > 0 ? (
        <div className="-mx-2 flex flex-wrap md:-mx-3 bg:-mx-4">
          {/* Basket Items */}
          <div className="w-full px-2 md:px-3 bg:w-2/3">
            <h1 className="mb-4 text-2xl font-bold leading-7 md:hidden">
              Koszyk
              <span className="ml-1 text-[#707070]">{`(${basket.basketTotalQuantity})`}</span>
            </h1>

            {/* HEader & Fav & Clean Basket */}
            <div className="-mx-4 flex h-[48px] items-center justify-between border-y border-[#ddd] px-4 md:m-0 md:mb-4 md:h-auto md:border-none md:p-0">
              {/* Heading */}
              <div className="hidden text-3xl font-bold leading-7 md:block">
                Koszyk
                <span className="ml-1 text-[#707070]">{`(${basket.basketTotalQuantity})`}</span>
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
                {basket.basketItems.map((product) => (
                  <BasketProduct key={product._id} product={product} />
                ))}
              </ul>
            </div>

            {/* Go to Delivery, Calculate Installment */}
            {width ?? 0 < 900 ? (
              <div className="-mx-2 mt-8 flex flex-wrap md:-mx-3 md:mt-6">
                <div className="w-0 md:w-[18%] md:px-3" />

                <div className="w-full px-2 md:w-[65%] md:px-3">
                  <CompletionOrder totalAmount={basket.basketTotalAmount} />
                </div>
              </div>
            ) : (
              ''
            )}

            {/* Basket Info MD: */}
            {(width ?? 0) >= 720 && (width ?? 0) < 900 ? (
              <div className="-mx-3 flex flex-wrap">
                <div className="w-[18%] px-3" />

                <div className="my-3 w-[65%] px-3">
                  <BasketInfo />
                </div>
              </div>
            ) : (
              ''
            )}

            <div className="w-full md:pt-1 bg:py-4">
              <MethodPayments />
            </div>

            {width ?? 0 >= 900 ? (
              <div className="mt-3">
                <ReturnBtn />
              </div>
            ) : (
              ''
            )}
          </div>

          {width ?? 0 >= 900 ? (
            <div className="bg:w-1/3 bg:px-4">
              <CompletionOrder totalAmount={basket.basketTotalAmount} />
            </div>
          ) : (
            ''
          )}

          {/* BG: Out */}
          {width ?? 0 < 900 ? (
            <div className="mt-2 flex w-full items-end px-2 md:mt-4 md:w-1/3 md:px-3">
              <ReturnBtn />
            </div>
          ) : (
            ''
          )}

          <div className="mt-4 w-full px-2 md:mt-6 bg:px-4">
            <hr className="-mx-4 h-[1px] w-[calc(100%+32px)] bg-[#ddd] md:hidden" />

            <ServiceItems />
          </div>
        </div>
      ) : (
        // More contents...
        <EmptyBasket />
      )}

      <hr className="-mx-4 h-[1px] w-[calc(100%+32px)] bg-[#ddd] md:hidden" />

      {/* Are you have questions ? */}
      <div className="flex w-full flex-col border-t border-[#ddd] py-4">
        <Information />
      </div>
    </main>
  )
}

export default BasketPage
