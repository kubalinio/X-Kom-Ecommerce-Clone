'use client'
import { RootState } from '@/store'
import { title } from 'process'
import { useSelector } from 'react-redux'
import AddToWishList from './AddToWishList'
import BasketProduct from './BasketProduct'
import EmptyBasket from './EmptyBasket'
import RemoveAllFromBasket from './RemoveAllFromBasket'


const BasketPage = () => {

    const basket = useSelector((state: RootState) => state)

    return (
        <main className='mx-auto mt-5 w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:mt-12 lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]'>
            {basket.basketTotalQuantity > 0 ? (
                <div className='flex flex-wrap -mx-2 md:-mx-3'>
                    {/* Basket Items */}
                    <div className='w-full px-2 md:px-3'>
                        <h1 className='mb-4 text-2xl font-bold leading-7 md:hidden'>
                            Koszyk
                            <span className='ml-1 text-[#707070]'>{`(${basket.basketTotalQuantity})`}</span>
                        </h1>
                        {/* HEader & Fav & Clean Basket */}
                        <div className='flex items-center justify-between px-4 -mx-4 h-12 border-y border-[#ddd] md:m-0 md:border-none md:h-auto md:mb-4 md:p-0'>
                            {/* Heading */}
                            <div className='hidden text-3xl font-bold leading-7 md:block'>
                                Koszyk
                                <span className='ml-1 text-[#707070]'>{`(${basket.basketTotalQuantity})`}</span>
                            </div>

                            {/* Fav & Basket */}
                            <div className='flex items-center justify-start h-6 text-[#4d4d4d] w-auto md:pt-2'>
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



                    </div>


                    <div>Wróć do zakupów</div>

                    <div>Services</div>
                </div>

                // More contents...
            ) : (
                <EmptyBasket />
            )}
        </main>
    )
}

export default BasketPage