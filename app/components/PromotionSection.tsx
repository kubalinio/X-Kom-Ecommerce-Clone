'use client'

import { urlFor } from "@/lib/sanity.client"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query"
import { SectionOverlay } from "./SectionOverlay"


const fetchProducts = async () => {
    const response = await axios.get(`/api/getPromotions`)
    return response.data
};

const Card = ({ heading, image, slug, title }) => {

    return (
        < div className='block w-[250px] lg:w-full xl:w-full' >
            <div className='h-full py-2'>
                <Link href={`/${slug}`}>
                    <div className='flex items-center justify-center mt-[2px] rounded-lg shadow-xCom overflow-hidden'>
                        <span className='inline-flex items-center justify-center w-[284px] h-[212px] overflow-hidden min-h-full py-3'>
                            <Image
                                src={`${urlFor(image).url()}`}
                                width={253}
                                height={212}
                                alt={`${heading}`}
                                loading='lazy'
                                className='object-cover w-full h-full'
                            />
                        </span>
                    </div>
                </Link>


                <Link href={`${slug}`} className='block mt-4 ml-1'>
                    <h3 className='text-xl leading-6 font-bold min-h-[48px] max-w-[250px]'>
                        <span className='max-h-[48px]'>
                            <span className='w-full overflow-hidden text-ellipsis line-clamp-2'
                            >
                                {heading}
                            </span>
                        </span>
                    </h3>
                </Link>

                <div className='my-1 text-[#4d4d4d] whitespace-nowrap line-clamp-1 text-ellipsis'>
                    {title}
                </div>

            </div>
        </div >)
}


export const PromotionSection = () => {
    const { data, isLoading } = useQuery({
        queryFn: () => fetchProducts(),
        queryKey: ['promotions']
    })
    if (isLoading) return <div>Loading...</div>

    return (
        <SectionOverlay heading={'Promocje'} slugToAll={'promocje'} >

            {data.promotions.map(promo => (
                <Card key={promo.slug} heading={promo.title} image={promo.image} slug={'promocje'} title={promo.slogan} />
            ))}

        </SectionOverlay>
    )
}



