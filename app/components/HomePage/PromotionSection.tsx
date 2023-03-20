'use client'

import { urlFor } from "@/lib/sanity.client"
import { Promotion, Promotions } from "@/typings"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query"
import { SectionOverlay } from "../SectionOverlay"


const fetchPromotions = async () => {
    const response = await axios.get(`/api/getPromotions`)
    return response.data
};

const Card = ({ title, image, slug, slogan }: Promotion) => {

    return (
        < div className='block w-[250px] lg:w-full xl:w-full' >
            <div className='h-full py-2'>
                <Link href={`/${slug.current}`}>
                    <div className='flex items-center justify-center mt-[2px] rounded-lg shadow-xCom overflow-hidden'>
                        <span className='inline-flex items-center justify-center w-[284px] h-[212px] overflow-hidden min-h-full py-3'>
                            <Image
                                src={`${urlFor(image).url()}`}
                                width={253}
                                height={212}
                                alt={`${title}`}
                                loading='lazy'
                                className='object-cover w-full h-full'
                            />
                        </span>
                    </div>
                </Link>


                <Link href={`${slug.current}`} className='block mt-4 ml-1'>
                    <h3 className='text-xl leading-6 font-bold min-h-[48px] max-w-[250px]'>
                        <span className='max-h-[48px]'>
                            <span className='w-full overflow-hidden text-ellipsis line-clamp-2'
                            >
                                {slogan}
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
    const { data, isLoading } = useQuery<Promotions>({
        queryFn: () => fetchPromotions(),
        queryKey: ['promotions'],
        staleTime: 3600000
    })
    if (isLoading) return <div>Loading...</div>

    return (
        <SectionOverlay heading={'Promocje'} slugToAll={'promocje'} howSlides={4} centerArrow={false} >

            {data?.promotions.map(promo => (
                <Card key={promo.title} title={promo.title} image={promo.image} slug={promo.slug} slogan={promo.slogan} />
            ))}

        </SectionOverlay>
    )
}



