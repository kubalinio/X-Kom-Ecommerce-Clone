'use client'

import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '@/lib/sanity.client'
import { Product } from '@/types/typings'

import { AddToBasket } from './AddToBasket'
import AddToFav from './ProductAddToFav'

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const { slug, price, special, _id, mainImage, title, oldPrice } = product

  const currentSlug = slug.current
  const formatedPrice = price.toFixed(2).replace('.', ',')
  // text-[#fa0064]

  return (
    <div className="group relative cursor-pointer rounded-lg lg:border lg:border-transparent lg:transition-all lg:duration-300 lg:hover:shadow-xCom">
      {/* Promotion or Recommend */}
      {special ? (
        <div className="absolute left-0 h-5 w-full lg:top-3 lg:pl-3">
          <span className="inline-flex h-5 max-w-[70%] items-center whitespace-nowrap rounded-full border border-[#ccc] bg-white px-2 py-[2px] text-sm text-[#4d4d4d]">
            {special}
          </span>
        </div>
      ) : (
        ''
      )}
      {/* Details */}
      <div className="pointer">
        <div>
          {/* Image */}
          <div className="mt-7 h-[125px] w-full lg:mt-8 lg:h-[130px]">
            <div className="mt-4 h-full w-full">
              <Link href={`/products/${currentSlug}`}>
                <div className="inline-flex h-full max-h-[125px] w-full max-w-[150px] items-center justify-center sm:max-w-[200px] md:max-w-[250px]">
                  <Image
                    src={`${urlFor(mainImage).url()}`}
                    width={136}
                    height={125}
                    alt={title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Title */}
          <div className="mr-2 md:mx-3">
            <Link href={`/products/${currentSlug}`}>
              <h3
                style={{ maxHeight: '40px' }}
                className="mt-2 h-[40px] max-h-10 overflow-hidden whitespace-normal break-words text-sm lg:mt-0"
              >
                <span className="line-clamp-2 w-full">{title}</span>
              </h3>
            </Link>
          </div>

          {/* Price */}
          <div className="mt-1 flex h-9 items-end md:mx-3 lg:mb-2 lg:mt-1">
            <div>
              <div className="inline-block text-left">
                {oldPrice && (
                  <span className="text-xs text-[#707070] line-through">
                    {oldPrice.toFixed(2).replace('.', ',')} zł
                  </span>
                )}
                <span className="block whitespace-nowrap lg:transition-all lg:duration-200 lg:group-hover:font-bold lg:group-hover:text-[#fa0064]">
                  {formatedPrice} zł
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fav */}
      <AddToFav product={product} />

      {/* Basket */}
      {/* OnClick show Modal with choose product & info where is save to basket */}
      <AddToBasket
        _id={_id}
        slug={slug}
        special={special}
        mainImage={mainImage}
        title={title}
        price={price}
        className="absolute bottom-[10px] right-[10px] hidden lg:group-hover:block"
      />
    </div>
  )
}
