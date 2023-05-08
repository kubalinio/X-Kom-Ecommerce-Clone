import { PurchaseList } from '@/types/typings'
import React from 'react'
import AddAllAccessibleBtn from './Buttons/AddAllAccessibleBtn'
import ListSummary from './ListSummary'
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
            <div className='pt-4 md:flex md:items-center md:py-3 md:-mb-8'>
                <ListSummary
                    numOfProducts={details?.ProductItems?.length}
                    totalPrice={details?.TotalPrice}
                />

                <div className='min-w-[188px]'>

                    <div >
                        <AddAllAccessibleBtn products={details?.ProductItems} />

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductsContainer