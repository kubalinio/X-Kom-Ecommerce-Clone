'use client'

import { SectionCarouselContainer } from "@/app/components/SectionCarouselContainer";
import { urlFor } from "@/lib/sanity.client";
import { AllGuide, Guide } from "@/typings";
import axios from "axios";
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query";


const ArticleCard = ({ title, image, link, slogan }: Guide) => {

    return (
        < div className='block lg:w-full xl:w-full' >
            <div className='h-full py-2'>
                <Link href='/'>
                    <div className='flex items-center justify-center mt-[2px] rounded-lg shadow-xCom overflow-hidden'>

                        <span className='inline-flex items-center justify-center w-full h-[179px] lg:h-[174px] xl:h-[196px] 2xl:h-[218px] overflow-hidden min-h-full py-3'>
                            <Image
                                src={urlFor(image).url()}
                                width={253}
                                height={212}
                                alt={title}
                                loading='lazy'
                                className='object-contain w-full h-full'
                            />
                        </span>
                    </div>
                </Link>


                <Link href='/poradniki' className='block mt-4 ml-1'>
                    <h3 className='text-xl leading-6 font-bold min-h-[48px] max-w-[250px]'>
                        <span className='max-h-[48px]'>
                            <span className='w-full overflow-hidden text-ellipsis line-clamp-2'
                            >
                                {title}
                            </span>
                        </span>
                    </h3>
                </Link>

                <div className='my-1 text-[#707070] whitespace-nowrap text-ellipsis overflow-hidden'>
                    {slogan}
                </div>

                <div className="flex justify-start items-center text-sm text-[#707070]">
                    <time
                        title="15-02-2023 | 13:39"
                        dateTime="2023-02-15T12:39:00Z"
                        className=""
                    >
                        {/* Timestamp */}
                        2 tygodnie temu
                    </time>
                    <div className="bg-[#707070] rounded-sm w-1 h-1 mx-2" />
                    <div>
                        <Link href={`/aktualności`}>
                            {`2 komentarze`}
                        </Link>
                    </div>
                </div>

            </div>
        </div >)
}

const fetchGuides = async () => {
    const response = await axios.get(`/api/getGuides`)
    return response.data
}

export const GuidesSection = () => {

    const { data, isLoading } = useQuery<AllGuide>({
        queryFn: () => fetchGuides(),
        queryKey: ['guides'],
        staleTime: 12 * 60 * 60 * 1000
    })

    console.log(data)

    if (isLoading) return <div></div>

    return (
        <SectionCarouselContainer heading={'Poradniki'} slugToAll={'poradniki'} >

            {data?.guides.map(guide => (
                <ArticleCard
                    key={guide._id}
                    title={guide.title}
                    image={guide.image}
                    link={guide.link}
                    slogan={guide.slogan}
                />
            ))}

        </SectionCarouselContainer>
    )
}



