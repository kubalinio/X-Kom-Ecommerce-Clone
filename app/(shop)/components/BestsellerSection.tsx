'use client'

import { Products } from "@/app/typings"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { SectionCarouselContainer } from "../../components/SectionCarouselContainer"


const fetchProducts = async () => {
    const response = await axios.get(`/api/products/getProducts`)
    return response.data
};


export const BestsellerSection = () => {

    const { data, isLoading } = useQuery<Products>({
        queryFn: () => fetchProducts(),
        queryKey: ['products'],
        staleTime: 3600000
    })

    if (isLoading) return <div>Loading...</div>

    return (
        <SectionCarouselContainer heading={'Bestsellers'} slugToAll={'bestsellers'} productSection={true} >

            {data?.products.map(product => (
                <div key={product._id} className="h-full px-2 py-1 lg:py-4">

                    <ProductCard
                        product={product}
                    />
                </div>

            ))}

        </SectionCarouselContainer>
    )
}



