'use client'

import axios from "axios"
import { useQuery } from "react-query"
import { ProductCard } from "../ProductCard"
import { SectionOverlay } from "../SectionOverlay"
import LoadingSpinner from '../../components/LoadingSpinner'

import { Product } from "@/typings"

const fetchProducts = async () => {
    const response = await axios.get(`/api/getProducts`)
    return response.data
};

export const HitsWeekSection = () => {


    const { data, isLoading } = useQuery({
        queryFn: () => fetchProducts(),
        queryKey: ['products'],
        staleTime: 3600000
    })

    if (isLoading) return <div><LoadingSpinner /></div>

    let products: Product[] = data.products

    return (
        <SectionOverlay heading={'Hity tygodnia'} slugToAll={'promocje'} howSlides={5} centerArrow={true} >

            {products.map(product => (
                <div key={product._id} className="py-1 px-2 h-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">

                    <ProductCard
                        _id={product._id}
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



