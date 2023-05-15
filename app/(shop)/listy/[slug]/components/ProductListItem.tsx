import { ChangeQuantityProduct } from '@/components/ChangeQuantityProduct'
import { AddToBasket } from '@/components/ProductCard/AddToBasket'
import { PurchaseListProduct } from '@/types/typings'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ExpandDropdownList } from '../../components/ExpandDropdownList'

import AddToBasketBtn from './Buttons/AddToBasketBtn'
import DeleteProductBtn from './Buttons/DeleteProductBtn'


type Props = {
    product: PurchaseListProduct
}

const ChangeQuntityProductContainer = ({ ProductCount }: { ProductCount: number }) => {
    const changeQuantity = (newQ: number) => {

        return
    }

    return (
        <ChangeQuantityProduct
            basketQuantity={ProductCount}
            changeQuantity={(newQ) => changeQuantity(newQ)}
            className='absolute bottom-2 right-1 z-[2] md:static md:mr-8' />
    )
}

const ExpandDropdownListContainer = ({ listId, productId, product }: {
    listId: string
    productId: string
    product: PurchaseListProduct
}) => {

    return (
        <ExpandDropdownList className='max-md:absolute max-md:right-0 max-md:top-1 md:ml-4' >
            <DeleteProductBtn listId={listId} productId={productId} />

            {/* On MD Delete ,no hidden */}
            <div className='md:hidden'>
                <AddToBasketBtn product={product} />
            </div>
        </ExpandDropdownList>
    )
}

const ProductListItem = ({ product }: Props) => {
    // console.log(product)
    const { Name, MainPhoto, WebUrl, Price, ProductCount, listId, Id } = product



    return (
        <div className='relative flex min-h-[84px] py-2 border-b border-[#ddd] md:justify-between md:items-center md:min-h-[auto]'>
            {/* Product Img & Price & title & Checking */}
            <div className='flex items-start flex-grow'>
                {/* Checking & Image */}
                <div className='flex items-center mr-3 shrink-0 md:mr-4 lg:mr-8'>
                    {/* Label(Checking) */}
                    {/* <label htmlFor=""></label> */}

                    {/* Image */}
                    <span className='inline-flex items-center justify-center h-[60px] w-[70px] overflow-hidden'>
                        <Image
                            width={70}
                            height={60}
                            alt={Name}
                            title={Name}
                            src={urlFor(MainPhoto).url()}
                            className='object-contain w-full h-auto'
                        />
                    </span>

                </div>

                {/* Title & price */}
                <div className='flex flex-col justify-between h-full mr-11 md:flex-row md:items-center md:w-full md:self-center md:mr-10 lg:mr-14'>

                    <div className='flex flex-col'>
                        <Link
                            href={`/products/${WebUrl}`}
                            title={Name}
                            className='mr-2 break-words md:mr-8 lg:mr-16'
                        >
                            {Name}
                        </Link>
                    </div>

                    <div className='mt-2 md:mt-0 md:text-right'>
                        <p className='whitespace-nowrap'>
                            {Price.toFixed(2).replace('.', ',')} zł
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile: Expand Btn Action & Counting Product */}
            <div className='md:hidden'>

                {/* Expand Btns */}
                <ExpandDropdownListContainer
                    listId={listId}
                    productId={Id}
                    product={product} />

                {/* Quantity */}
                <ChangeQuntityProductContainer
                    ProductCount={ProductCount}
                />

            </div>



            {/* Desktop: Btn Actions ALl from Product Card */}
            <div className='hidden md:flex md:items-center'>
                <ChangeQuntityProductContainer
                    ProductCount={ProductCount}
                />

                <AddToBasket
                    _id={product.Id}
                    // slug={''}
                    mainImage={product.MainPhoto}
                    title={product.Name}
                    price={product.Price}
                    className='static flex items-center justify-center min-w-[32px] h-[32px]'
                />

                <ExpandDropdownListContainer
                    listId={listId}
                    productId={Id}
                    product={product} />
            </div>



        </div>
    )
}

export default ProductListItem