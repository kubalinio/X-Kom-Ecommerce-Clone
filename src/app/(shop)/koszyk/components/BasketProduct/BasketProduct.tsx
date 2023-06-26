/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import { ChangeQuantityProduct } from '@/components/ChangeQuantityProduct'
import { urlFor } from '@/lib/sanity.client'
import { addNewQuantity, BasketItem, getTotals } from '@/store/basketSlice'

import { BasketAddToFav } from './BasketAddToFav'
import { ExpandActionBasketProduct } from './ExpandActionBasketProduct'
import { RemoveBasketProduct } from './RemoveBasketProduct'

type Props = {
  product: BasketItem
}

export const BasketProduct = ({ product }: Props) => {
  const { _id, price, mainImage, slug, title, quantity } = product

  const formatedPrice = price.toFixed(2).replace('.', ',')

  const dispatch = useDispatch()

  const handleChangeQuantity = (newQuantity: number) => {
    const newProductQuantity = { _id, newQuantity }
    // change Quanity from exist product
    dispatch(addNewQuantity(newProductQuantity))
    dispatch(getTotals())
  }

  return (
    <li className="flex items-center border-b border-[#ddd] px-4 py-3 max-md:last:border-b-0 md:border-x md:border-x-[#ddd] md:p-3 md:pr-4 md:first:rounded-t-lg md:first:border-t md:last:rounded-b-lg">
      <div className="w-full">
        <div className="flex w-full">
          {/* Image Left*/}
          <Link href={`/products/${slug}`}>
            <span className="inline-flex h-[60px] w-[72px] items-center justify-center overflow-hidden">
              <Image
                src={urlFor(mainImage).url()}
                width={144}
                height={120}
                alt={title}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </span>
          </Link>

          {/* Right Section */}
          <div className="ml-2 flex w-full flex-wrap items-center justify-between md:flex-nowrap">
            {/* Title & Expand*/}
            <div className="mb-1 inline-flex w-full justify-between">
              <Link href={`/products/${slug}`} className="hover:underline">
                <h3 className="line-clamp-2 break-words">{title}</h3>
              </Link>

              {/* Expand to fav list or delete item*/}

              <ExpandActionBasketProduct product={product} />
            </div>

            {/* Bottom && Left */}
            <div className="flex w-full basis-full flex-row-reverse items-end justify-between md:w-[200px] md:basis-[80%] md:flex-row md:items-center md:justify-end">
              {/* Price */}
              <div className="inline-block text-left md:mr-2 md:text-right">
                <span className="block whitespace-nowrap">{formatedPrice} zł</span>
              </div>

              {/* Quantity */}
              <ChangeQuantityProduct basketQuantity={quantity} changeQuantity={handleChangeQuantity} />

              {/* Add to Fav List */}
              <BasketAddToFav product={product} />

              {/* Delete Item Basket */}
              <RemoveBasketProduct id={_id!} />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
