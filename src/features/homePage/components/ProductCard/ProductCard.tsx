import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import { formatPrice } from '@/lib/utils'

import { AddToBasket } from './ProductAddToBasket'
import AddToFav from './ProductAddToFav'

type Props = {
  product: Product
  i?: number
}

export const ProductCard = ({ product, i }: Props) => {
  const { name, oldPrice, photo, price, slug } = product

  return (
    <div className="relative rounded-lg cursor-pointer group lg:border lg:border-transparent lg:transition-all lg:duration-300 lg:hover:shadow-xCom">
      {/* Promotion or Recommend */}
      {/* {special ? (
        <div className="absolute left-0 w-full h-5 lg:top-3 lg:pl-3">
          <span className="inline-flex h-5 max-w-[70%] items-center whitespace-nowrap rounded-full border border-[#ccc] bg-white px-2 py-[2px] text-sm text-[#4d4d4d]">
            {special}
          </span>
        </div>
      ) : (
        ''
      )} */}
      {/* Details */}
      <div className="pointer">
        <div>
          {/* Image */}
          <div className="mt-7 h-[125px] w-full lg:mt-8 lg:h-[130px]">
            <div className="w-full h-full mt-4">
              {/* @TODO Add slug string, no object */}
              <Link href={`/products/${slug}`}>
                <div className="inline-flex h-full max-h-[125px] w-full max-w-[150px] items-center justify-center sm:max-w-[200px] md:max-w-[250px]">
                  <Image src={photo} width={136} height={125} alt={name} className="object-contain w-full h-full" />
                </div>
              </Link>
            </div>
          </div>

          {/* Title */}
          <div className="mr-2 md:mx-3">
            {/* @TODO Add slug string, no object */}
            <Link href={`/products/${slug}`}>
              <h3
                style={{ maxHeight: '40px' }}
                className="mt-2 h-[40px] max-h-10 overflow-hidden whitespace-normal break-words text-sm lg:mt-0"
              >
                <span className="w-full line-clamp-2">{name}</span>
              </h3>
            </Link>
          </div>

          {/* Price */}
          <div className="flex items-end mt-1 h-9 md:mx-3 lg:mb-2 lg:mt-1">
            <div>
              <div className="inline-block text-left">
                {oldPrice !== 0 && (
                  <span className="text-xs text-[#707070] line-through">{formatPrice(oldPrice)} zł</span>
                )}
                <span className="block whitespace-nowrap lg:transition-all lg:duration-200 lg:group-hover:font-bold lg:group-hover:text-[#fa0064]">
                  {formatPrice(price)} zł
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fav @TODO */}
      <AddToFav productId={product.id} i={i} />

      {/* New Basket */}
      <AddToBasket productId={product.id} title={product.name} price={product.price} mainImage={product.photo} />
    </div>
  )
}
