import { Product } from '@prisma/client'
import { notFound } from 'next/navigation'

import { AddToFavBox } from '@/features/(product)/productDetailPage/components/AddToFavBox'
import HeadingProduct from '@/features/(product)/productDetailPage/components/HeadingProduct'
import ProductPrice from '@/features/(product)/productDetailPage/components/ProductPrice'
import { db } from '@/lib/db'

import { AddToBasketBox } from '../../../../features/(product)/productDetailPage/components/AddToBasketBox'
import { ProductGallery } from '../../../../features/(product)/productDetailPage/components/ProductGallery'
import { Services } from '../../../../features/(product)/productDetailPage/components/ServicesModal'

type URL = {
  params: {
    slug: string
  }
}

export default async function ProductDetail(url: URL) {
  const product = await db.product.findFirst({
    where: {
      slug: url.params.slug,
    },
  })

  if (!product) return notFound()

  const { id: productId, name } = product as Product

  return (
    <main className="mx-auto mb-6 w-[calc(100%-32px)] max-w-full bg-white md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px]">
      <div>
        <div>
          {/* Action Btns & Breadcast */}
          <div className="flex items-center justify-end lg:pt-4">
            <div className="flex">
              <div className="justify-end hidden w-full lg:flex">
                <AddToFavBox productId={productId} />
              </div>
            </div>
          </div>

          {/* @ToDo MD: Heading */}
          <HeadingProduct title={name} size={'md'} />

          {/* Product */}

          <div className="flex flex-wrap pt-5 -mx-2 md:-mx-3 md:mt-2 lg:mt-0 lg:pt-2">
            {/* Top/LEft Image Slider */}
            <div className="order-1 w-full h-full px-2 mb-4 md:order-2 md:w-3/5 md:px-3 lg:w-1/2">
              <ProductGallery product={product} />

              {/* Compare buttons */}
              <div className="hidden md:block lg:hidden">
                <AddToFavBox productId={productId} />
              </div>
            </div>

            {/* Bottom/Right Content */}
            <div className="order-3 w-full px-2 md:w-2/5 md:px-3 lg:w-1/2">
              {/* @TODO SM-DT Title */}
              <HeadingProduct title={name} />

              {/* Price & Add to Basket, Quantity & Services */}
              <div className="flex justify-end">
                <div className="w-full lg:w-[288px]">
                  <div className="w-full rounded-lg md:border md:border-[#ddd] md:pt-4">
                    <ProductPrice price={product.price} />

                    {/* If Promotion, Previous Price last 30 days*/}
                    <p className="ml-[68px] mt-1 text-right md:mr-4">
                      Najniższa cena z ostatnich 30 dni z obniżką: {''}
                      <span className="whitespace-nowrap text-[#4d4d4d]">Price</span>
                    </p>

                    {/* Quantity & Add to Basket */}
                    <AddToBasketBox product={product} />

                    {/* Services */}
                    <Services productTitle={product.name} productMainImage={product.photo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
