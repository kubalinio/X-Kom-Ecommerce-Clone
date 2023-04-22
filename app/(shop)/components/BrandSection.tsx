'use client'

import { urlFor } from "@/lib/sanity.client"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { SectionCarouselContainer } from "@/app/components/SectionCarouselContainer"
import { Brands } from "@/typings"

const fetchBrands = async () => {
    const response = await axios.get(`/api/getBrands`)
    return response.data
};


export const BrandSection = () => {

    const { data, isLoading } = useQuery<Brands>({
        queryFn: () => fetchBrands(),
        queryKey: ['brands'],
        staleTime: 3600000
    })

    if (isLoading) return <div>Loading...</div>



    return (
        <SectionCarouselContainer heading={'Sekcja marek'} slugToAll={''} productSection={true} >

            {data?.brands?.map(brand => (
                <div key={brand._id} className="h-[88px] flex items-center justify-center">
                    <Link
                        href={`/`}
                        title={brand.title}
                        className='flex justify-center items-center grayscale-[1] opacity-50 w-full h-full transition duration-300 hover:grayscale-0 hover:opacity-100'
                    >
                        <span className="inline-flex items-center justify-center w-[110px] h-[36px] overflow-hidden">
                            <Image
                                src={`${urlFor(brand.image).url()}`}
                                alt={brand.title}
                                className='inline-block w-auto h-auto max-w-full max-h-full'
                                width={110}
                                height={40}
                            />
                        </span>

                    </Link>
                </div>

            ))}

        </SectionCarouselContainer>
    )
}



