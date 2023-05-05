import { PurchaseList } from '@/app/typings'
import React from 'react'
import ProductListItem from './ProductListItem'

type Props = {
    details?: PurchaseList
}

const ProductsContainer = ({ details }: Props) => {
    return (
        <>
            {/* Top - Checking & Do Action Btn  */}
            <div></div>

            {/* Middle - Product Info & Actions */}
            <div>
                {details?.ProductItems?.map(product => (

                    <ProductListItem key={product.id} product={product} />
                ))}
            </div>

            {/* Bottom - QuantityAll & Value & Add all to Basket */}
            <div></div>
        </>
    )
}

export default ProductsContainer