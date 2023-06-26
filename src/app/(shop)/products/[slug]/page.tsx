'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

import { QuantityBasketProduct } from '@/components/features/basket/BasketProduct'
import useWindowDimensions from '@/hooks/useWindowDimensions'

import HeadingProduct from '../../products/[slug]/components/HeadingProduct'
import LoadingSkelleton from '../../products/[slug]/components/LoadingSkelleton'
import ProductPrice from '../../products/[slug]/components/ProductPrice'
import ActionBtns from './components/ActionBtns'
import AddToBasket from './components/AddToBasket'
import { ProductGallery } from './components/ProductGallery'
import { Services } from './components/ServicesModal'

type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`)
  return response.data
}

const ProductDetail = (url: URL) => {
  const [quantity, setQuantity] = useState<number>(1)
  const { width } = useWindowDimensions()

  const { data, isLoading, isFetching } = useQuery({
    queryFn: () => fetchDetails(url.params.slug),
    queryKey: ['detail-product'],
  })

  const handleNewQuantity = (newNumber: number) => {
    setQuantity(newNumber)
  }

  return (
    <main className="mx-auto mb-6 w-[calc(100%-32px)] max-w-full bg-white md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px]">
      {isLoading || isFetching ? (
        <LoadingSkelleton />
      ) : (
        <div>
          <div>
            {/* Action Btns & Breadcast */}
            <div className="flex items-center justify-end lg:pt-4">
              <div className="flex">
                <div className="hidden w-full justify-end lg:flex">
                  <ActionBtns product={data?.product} />
                </div>
              </div>
            </div>

            {/* MD: Heading */}
            {(width ?? 0) >= 720 && (width ?? 0) < 1079 ? <HeadingProduct title={data?.product.title} /> : ''}

            {/* Product */}
            <div className="-mx-2 flex flex-wrap pt-5 md:-mx-3 md:mt-2 lg:mt-0 lg:pt-2">
              {/* Top/LEft Image Slider */}
              <div className="order-1 mb-4 h-full w-full px-2 md:order-2 md:w-3/5 md:px-3 lg:w-1/2">
                <ProductGallery product={data.product} />

                {/* Compare buttons */}
                <div className="hidden md:block lg:hidden">
                  <ActionBtns product={data?.product} />
                </div>
              </div>

              {/* Bottom/Right Content */}
              <div className="order-3 w-full px-2 md:w-2/5 md:px-3 lg:w-1/2">
                {/* Title */}
                {width ?? 0 <= 720 ? (
                  <HeadingProduct title={data?.product.title} />
                ) : width ?? 0 >= 1080 ? (
                  <HeadingProduct title={data?.product.title} />
                ) : (
                  ''
                )}

                {/* Price & Add to Basket, Quantity & Services */}
                <div className="flex justify-end">
                  <div className="w-full lg:w-[288px]">
                    <div className="w-full rounded-lg md:border md:border-[#ddd] md:pt-4">
                      <ProductPrice price={data?.product.price} />

                      {/* If Promotion, Previous Price last 30 days*/}
                      <p className="ml-[68px] mt-1 text-right md:mr-4">
                        Najniższa cena z ostatnich 30 dni z obniżką: {''}
                        <span className="whitespace-nowrap text-[#4d4d4d]">Price</span>
                      </p>

                      {/* Quantity & Add to Basket */}
                      <div className="flex items-center pb-6 pt-4 md:p-4 md:pt-3">
                        {/* Quantity */}
                        <div className="mr-2">
                          <QuantityBasketProduct changeQuantity={handleNewQuantity} />
                        </div>

                        {/* Add to Basket */}
                        <div className="flex-grow">
                          <AddToBasket product={data?.product} quantity={quantity} />
                        </div>
                      </div>

                      {/* Services */}

                      <Services productTitle={data?.product.title} productMainImage={data?.product.mainImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductDetail
