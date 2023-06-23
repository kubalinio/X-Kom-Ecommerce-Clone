/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '@/lib/sanity.client'
import { BasketItem } from '@/store/basketSlice'

export const BasketProduct = ({ title, quantity, price, mainImage, slug, onClick }: BasketItem) => (
  <div className="overflow-hidden border-b border-[#ddd] py-3">
    <div className="flex">
      <Link onClick={() => onClick!()} href={`/products/${slug}`}>
        <span className="inline-flex h-[60px] w-[72px] items-center justify-center overflow-hidden">
          <Image
            src={urlFor(mainImage).url()}
            width={72}
            height={60}
            alt={title}
            title={title}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </span>
      </Link>

      <div className="ml-3 block w-full">
        <div className="flex flex-col items-start">
          <Link onClick={() => onClick!()} href={`/products/${slug}`} title={title}>
            <h3 className="mb-1 line-clamp-2 max-w-[145px] overflow-hidden underline-offset-auto hover:underline">
              {title}
            </h3>
          </Link>
        </div>

        <div className="flex items-end justify-between">
          <span className="mr-2 min-w-[40px] text-left text-[#707070]">{quantity} szt.</span>
          <div className="inline-block text-right">
            <span>{price.toFixed(2).replace('.', ',')} zł</span>
          </div>
        </div>
      </div>
    </div>

    {/* ??? */}
    <div className="mt-4 text-[#1a1a1a]"></div>
  </div>
)
