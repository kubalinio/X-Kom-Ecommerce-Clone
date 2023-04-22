'use client'

import { QuantityBasketProduct } from "@/app/(shop)/koszyk/components/BasketProduct/QuantityBasketProduct"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import axios from "axios"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import AddToBasket from "./components/AddToBasket"
import HeadingProduct from "../../products/[slug]/components/HeadingProduct"
import LoadingSkelleton from "../../products/[slug]/components/LoadingSkelleton"
import ProductPrice from "../../products/[slug]/components/ProductPrice"
import { Services } from "./components/ServicesModal"
import { ProductGallery } from "./components/ProductGallery"


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
        queryKey: ['detail-product']
    })

    if (isLoading && isFetching) return <LoadingSkelleton />

    const handleNewQuantity = (newNumber: number) => {
        setQuantity(newNumber)
    }

    return (
        <main className="mb-6 bg-white mx-auto max-w-full w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px]">
            <div>
                <div>
                    {/* MD: Heading */}
                    {width! >= 720 && width! < 1079 ? (
                        <HeadingProduct title={data?.product.title} />
                    ) : ''}

                    {/* Product */}
                    <div className="flex flex-wrap pt-5 -mx-2 md:-mx-3 md:mt-2">

                        {/* Top/LEft Image Slider */}
                        <div className="order-1 w-full h-full px-2 mb-4 md:order-2 md:px-3 md:w-3/5 lg:w-1/2">
                            <ProductGallery images={data?.product.images} />

                            {/* Compare buttons */}
                            <div></div>
                        </div>

                        {/* Bottom/Right Content */}
                        <div className="order-3 w-full px-2 md:px-3 md:w-2/5 lg:w-1/2">
                            {/* Title */}
                            {width! <= 720 ? (
                                <HeadingProduct title={data?.product.title} />
                            ) :
                                width! >= 1080 ? (
                                    <HeadingProduct title={data?.product.title} />
                                ) :
                                    ''}

                            {/* Price & Add to Basket, Quantity & Services */}
                            <div className="flex justify-end">
                                <div className="w-full lg:w-[288px]">

                                    <div className="w-full rounded-lg md:pt-4 md:border md:border-[#ddd]">

                                        <ProductPrice price={data?.product.price} />

                                        {/* If Promotion, Previous Price last 30 days*/}
                                        <p className="text-right mt-1 ml-[68px] md:mr-4">
                                            Najniższa cena z ostatnich 30 dni z obniżką: {''}
                                            <span className="whitespace-nowrap text-[#4d4d4d]">Price</span>
                                        </p>

                                        {/* Quantity & Add to Basket */}
                                        <div className="flex items-center pt-4 pb-6 md:p-4 md:pt-3">

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

                                        <Services
                                            productTitle={data?.product.title}
                                            productMainImage={data?.product.mainImage}
                                        />

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

export default ProductDetail
