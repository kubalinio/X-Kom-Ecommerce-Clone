'use client'

import { Products } from "@/typings"
import axios from "axios"
import { useQuery } from "react-query"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { SectionOverlay } from "../../components/SectionOverlay"


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
        <SectionOverlay heading={'Bestsellers'} slugToAll={'bestsellers'} productSection={true} >

            {data?.products.map(product => (
                <div key={product._id} className="py-1 px-2 h-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">

                    <ProductCard
                        slug={product.slug}
                        special={product.special}
                        mainImage={product.mainImage}
                        title={product.title}
                        price={product.price}
                    />
                </div>

            ))}

        </SectionOverlay>
    )
}



