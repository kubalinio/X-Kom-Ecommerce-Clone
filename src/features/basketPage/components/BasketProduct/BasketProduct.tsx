'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ChangeQuantityProduct } from '@/features/shared/services/changeQuantity/ChangeQuantityProduct'
import { formatPrice } from '@/lib/utils'
import { ExtendedBasketItem } from '@/types/db'

import { BasketAddToFav } from './BasketAddToFav'
import { ExpandActionBasketProduct } from './ExpandActionBasketProduct'
import { RemoveBasketProduct } from './RemoveBasketProduct'

type Props = {
  product: ExtendedBasketItem
}

export const BasketProduct = ({ product }: Props) => {
  const { count, productHeader, productId: basketItemId, basketToken } = product
  const { name, price, photo, slug } = productHeader

  const handleChangeQuantity = (newQuantity: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newProductQuantity = { newQuantity }
    // change Quanity from exist product
    // dispatch(addNewQuantity(newProductQuantity))
    // dispatch(getTotals())
  }

  return (
    <li className="flex items-center border-b border-[#ddd] px-4 py-3 max-md:last:border-b-0 md:border-x md:border-x-[#ddd] md:p-3 md:pr-4 md:first:rounded-t-lg md:first:border-t md:last:rounded-b-lg">
      <div className="w-full">
        <div className="flex w-full">
          {/* Image Left*/}
          <Link href={`/products/${slug}`}>
            <span className="inline-flex h-[60px] w-[72px] items-center justify-center overflow-hidden">
              <Image
                src={photo}
                width={144}
                height={120}
                alt={name}
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
                <h3 className="line-clamp-2 break-words">{name}</h3>
              </Link>

              {/* Expand to fav list or delete item*/}

              <ExpandActionBasketProduct productId={product.productId} />
            </div>

            {/* Bottom && Left */}
            <div className="flex w-full basis-full flex-row-reverse items-end justify-between md:w-[200px] md:basis-[80%] md:flex-row md:items-center md:justify-end">
              {/* Price */}
              <div className="inline-block text-left md:mr-2 md:text-right">
                <span className="block whitespace-nowrap">{formatPrice(price)} zł</span>
              </div>

              {/* Quantity */}
              <ChangeQuantityProduct basketQuantity={count} changeQuantity={handleChangeQuantity} />

              {/* Add to Fav List */}
              <BasketAddToFav productId={product.productId} />

              {/* Delete Item Basket @TODO Error browser */}
              <RemoveBasketProduct id={basketItemId} basketToken={basketToken ?? null} />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
