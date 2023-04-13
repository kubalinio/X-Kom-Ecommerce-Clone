'use client'


import { useSelector } from 'react-redux'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import { RootState } from '@/store'
import { BasketInfo } from '../components/Basket'
import AddToWishList from './components/AddAllToWishList'
import CompletionOrder from './components/CompletionOrder'
import { Information } from './components/Information'
import EmptyBasket from './components/EmptyBasket'
import MethodPayments from './components/MethodPayments'
import RemoveAllFromBasket from './components/RemoveAllFromBasket'
import ReturnBtn from './components/ReturnBtn'
import ServiceItems from './components/ServiceItems'
import { BasketProduct } from './components/BasketProduct'

const BasketPage = () => {

    const basket = useSelector((state: RootState) => state)
    const { width } = useWindowDimensions()

    return (
        <main className='relative mx-auto mt-5 w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:mt-12 lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]'>

            {basket.basketTotalQuantity > 0 ? (
                <div className='flex flex-wrap -mx-2 md:-mx-3 bg:-mx-4'>

                    {/* Basket Items */}
                    <div className='w-full px-2 md:px-3 bg:w-2/3'>
                        <h1 className='mb-4 text-2xl font-bold leading-7 md:hidden'>
                            Koszyk
                            <span className='ml-1 text-[#707070]'>{`(${basket.basketTotalQuantity})`}</span>
                        </h1>

                        {/* HEader & Fav & Clean Basket */}
                        <div className='flex items-center justify-between px-4 -mx-4 h-[48px] border-y border-[#ddd] md:m-0 md:border-none md:h-auto md:mb-4 md:p-0'>

                            {/* Heading */}
                            <div className='hidden text-3xl font-bold leading-7 md:block'>
                                Koszyk
                                <span className='ml-1 text-[#707070]'>{`(${basket.basketTotalQuantity})`}</span>
                            </div>

                            {/* Fav & Basket */}
                            <div className='flex items-center justify-start h-[28px] text-[#4d4d4d] w-auto md:pt-2'>
                                <AddToWishList />
                                <RemoveAllFromBasket />
                            </div>
                        </div>

                        {/* Products List */}
                        <div>
                            <ul>
                                {basket.basketItems.map(product => (

                                    <BasketProduct
                                        key={product.slug}
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        mainImage={product.mainImage}
                                        quantity={product.quantity}
                                        slug={product.slug}
                                    />

                                ))
                                }
                            </ul>
                        </div>

                        {/* Go to Delivery, Calculate Installment */}
                        {width! < 900 ? (<div className='flex flex-wrap mt-8 -mx-2 md:mt-6 md:-mx-3'>
                            <div className='w-0 md:w-[18%] md:px-3' />

                            <div className='w-full md:w-[65%] px-2 md:px-3'>
                                <CompletionOrder totalAmount={basket.basketTotalAmount} />
                            </div>
                        </div>) : ''}

                        {/* Basket Info MD: */}
                        {width! >= 720 && width! < 900 ? (
                            <div className='flex flex-wrap -mx-3'>
                                <div className='w-[18%] px-3' />

                                <div className='w-[65%] px-3 my-3'>
                                    <BasketInfo />
                                </div>
                            </div>

                        ) : ''}


                        <div className='w-full md:pt-1 bg:py-4'>
                            <MethodPayments />
                        </div>

                        {width! >= 900 ? (
                            <div className='mt-3'>
                                <ReturnBtn />
                            </div>
                        ) : ''}

                    </div>

                    {width! >= 900 ? (
                        <div className='bg:w-1/3 bg:px-4'>
                            <CompletionOrder totalAmount={basket.basketTotalAmount} />
                        </div>
                    ) : ''}

                    {/* BG: Out */}
                    {width! < 900 ? (
                        <div className='flex items-end w-full px-2 mt-2 md:px-3 md:w-1/3 md:mt-4'>
                            <ReturnBtn />
                        </div>
                    ) : ''}


                    <div className='w-full px-2 mt-4 md:mt-6 bg:px-4'>
                        <hr className='w-[calc(100%+32px)] h-[1px] bg-[#ddd] -mx-4 md:hidden' />

                        <ServiceItems />
                    </div>

                </div>

                // More contents...
            ) : (
                <EmptyBasket />
            )}

            <hr className='w-[calc(100%+32px)] h-[1px] bg-[#ddd] -mx-4 md:hidden' />

            {/* Are you have questions ? */}
            <div className='flex flex-col w-full border-t border-[#ddd] py-4'>
                <Information />
            </div>

        </main>
    )
}

export default BasketPage