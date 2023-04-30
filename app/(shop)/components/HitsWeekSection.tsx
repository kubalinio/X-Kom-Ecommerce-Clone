'use client'

import axios from "axios"
import { useQuery } from "@tanstack/react-query"



import { Product } from "@/app/typings"
import { SectionCarouselContainer } from "@/app/components/SectionCarouselContainer"
import { ProductCard } from "@/app/components/ProductCard"
import LoadingSkelleton from "../products/[slug]/components/LoadingSkelleton"

const fetchProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/getProducts`)
    return response.data
};

export const HitsWeekSection = () => {


    const { data, isLoading } = useQuery({
        queryFn: () => fetchProducts(),
        queryKey: ['products'],
        staleTime: 3600000
    })

    if (isLoading) return <LoadingSkelleton />

    let products: Product[] = data.products

    return (
        <SectionCarouselContainer heading={'Hity tygodnia'} slugToAll={''} productSection={true} >

            {products.map(product => (
                <div key={product._id} className="h-full px-2 py-1 lg:py-4">

                    <ProductCard
                        _id={product._rev}
                        slug={product.slug}
                        special={product.special}
                        mainImage={product.mainImage}
                        title={product.title}
                        price={product.price}
                        oldPrice={product.oldPrice}
                    />

                </div>

            ))}

        </SectionCarouselContainer>
    )
}



