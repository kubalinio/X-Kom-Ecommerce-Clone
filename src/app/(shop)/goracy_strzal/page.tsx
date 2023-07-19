import { notFound } from "next/navigation"

import ProductDetails from "@/features/(product)/hotshotPage/containers/ProductDetails"
import { AddToFavBox } from "@/features/(product)/productDetailPage/components/AddToFavBox"
import HeadingProduct from "@/features/(product)/productDetailPage/components/HeadingProduct"
import { ProductGallery } from "@/features/(product)/productDetailPage/components/ProductGallery"
import { CountdownTimer } from "@/features/shared/components/hotshotCounter/CountdownTimer"
import { db } from "@/lib/db"

export default async function HotShotData() {
    const product = await db.product.findUnique({
        where: {
            id: 'clk9d805n0008upv0ul678nbh'
        }
    })

    if (!product) return notFound()

    return (
        <main className="mx-auto mb-6 w-[calc(100%-32px)] max-w-full bg-white md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px]">
            <div>
                <div>
                    {/* Action Btns & Breadcast */}
                    <div className="flex items-center justify-end lg:pt-4">
                        <div className="flex">
                            <div className="justify-end hidden w-full lg:flex">
                                <AddToFavBox productId={product.id} />
                            </div>
                        </div>
                    </div>

                    {/* @ToDo MD: Heading */}
                    <HeadingProduct title={product.id} size={'md'} />

                    {/* Product */}
                    <div className="flex flex-wrap pt-5 -mx-2 md:-mx-3 md:mt-2 lg:mt-0 lg:pt-2">
                        {/* Top/LEft Image Slider */}
                        <div className="order-1 w-full h-full px-2 mb-4 md:order-2 md:w-3/5 md:px-3 lg:w-1/2">

                            <CountdownTimer finished={false} />

                            <ProductGallery product={product} />

                            {/* Compare buttons */}
                            <div className="hidden md:block lg:hidden">
                                <AddToFavBox productId={product.id} />
                            </div>
                        </div>

                        {/* Bottom/Right Content */}
                        <ProductDetails product={product} />
                    </div>
                </div>
            </div>
        </main>
    )
}