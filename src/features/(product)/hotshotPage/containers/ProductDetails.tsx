'use client'

import { Product } from '@prisma/client'
import { FC, useState } from 'react'

import { CounterProductBar } from '@/features/shared/components/hotshotCounter/CounterProductBar'

import { AddToBasketBox } from '../../productDetailPage/components/AddToBasketBox'
import HeadingProduct from '../../productDetailPage/components/HeadingProduct'
import ProductPrice from '../../productDetailPage/components/ProductPrice'
import { Services } from '../../productDetailPage/components/ServicesModal'

interface ProductDetailsProps {
    product: Product
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {

    const [toSell] = useState(1000)
    const [selled, setSelled] = useState(145)

    const handleSelledProduct = () => {
        // setFinished(true)
        // endPromo()
    }

    return (
        <div className="order-3 w-full px-2 md:w-2/5 md:px-3 lg:w-1/2">
            {/* @TODO SM-DT Title */}
            <HeadingProduct title={product.name} />

            {/* Price & Add to Basket, Quantity & Services */}
            <div className="flex justify-end">
                <div className="w-full lg:w-[288px]">
                    <div className="w-full rounded-lg md:border md:border-[#ddd] md:pt-4">
                        <ProductPrice price={product.price} />

                        {/* If Promotion, Previous Price last 30 days*/}
                        <p className="ml-[68px] mt-1 text-right md:mr-4">
                            Najniższa cena z ostatnich 30 dni z obniżką: {''}
                            <span className="whitespace-nowrap text-[#4d4d4d]">{product.oldPrice}</span>
                        </p>

                        {/* Quantity & Add to Basket */}
                        <AddToBasketBox product={product} />

                        <div className='p-5'>
                            <CounterProductBar
                                toSell={toSell}
                                selled={selled}
                                finished={false}
                                selledAll={() => handleSelledProduct()}
                                sells={() => setSelled(selled + 1)}
                            />
                        </div>

                        {/* Services */}
                        <Services productTitle={product.name} productMainImage={product.photo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails