'use client'

import axios from "axios"
import { useQuery } from "react-query"

import LoadingSpinner from '../../components/LoadingSpinner'

import { Product } from "@/typings"
import { SectionOverlay } from "@/app/components/SectionOverlay"
import { ProductCard } from "@/app/components/ProductCard"

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

    if (isLoading) return <div><LoadingSpinner /></div>

    let products: Product[] = data.products

    return (
        <SectionOverlay heading={'Hity tygodnia'} slugToAll={''} productSection={true} >

            {products.map(product => (
                <div key={product._id} className="h-full px-2 py-1">

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



