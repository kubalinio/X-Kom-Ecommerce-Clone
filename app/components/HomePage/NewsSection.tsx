'use client'

import { urlFor } from "@/lib/sanity.client"
import { AllNews, News } from "@/typings"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query"
import { SectionOverlay } from "../SectionOverlay"


const fetchNews = async () => {
    const response = await axios.get(`/api/getNews`)
    return response.data
}

const CardNews = ({ title, image, link, slogan }: News) => {

    return (
        < div className='block w-[250px] lg:w-full xl:w-full' >
            <div className='h-full py-2'>
                <Link href={`/${link}`}>
                    <div className='flex items-center justify-center mt-[2px] rounded-lg shadow-xCom overflow-hidden'>

                        <span className='inline-flex items-center justify-center w-full h-[179px] lg:h-[174px] xl:h-[196px] 2xl:h-[218px] overflow-hidden min-h-full py-3'>
                            <Image
                                src={`${urlFor(image).url()}`}
                                width={253}
                                height={212}
                                alt={title}
                                loading='lazy'
                                className='object-cover w-full h-full'
                            />
                        </span>
                    </div>
                </Link>

                <Link href={`/${link}`} className='block mt-4'>
                    <h3 className='text-xl leading-6 font-bold max-h-[48px] max-w-[250px] overflow-hidden'>
                        <span className='block max-h-[48px] overflow-hidden'>
                            <span className='w-full overflow-hidden text-ellipsis line-clamp-2'
                            >
                                {title}
                            </span>
                        </span>
                    </h3>
                </Link>

                <div className='my-1 text-[#4d4d4d] whitespace-nowrap line-clamp-1 text-ellipsis'>
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
                        <Link href={`/aktualności`} className='hover:underline underline-offset-2'>
                            {`2 komentarze`}
                        </Link>
                    </div>
                </div>

            </div>
        </div >)
}


export const NewsSection = () => {

    const { data, isLoading, isFetching } = useQuery<AllNews>({
        queryFn: () => fetchNews(),
        queryKey: ['news'],
        staleTime: 3600000
    })

    if (isLoading && isFetching) return <div>Loading ...</div>

    return (
        <SectionOverlay heading={'Aktualności'} slugToAll={'aktualnosci'}>

            {data?.news.map(news => (
                <CardNews
                    key={news._id}
                    title={news.title}
                    image={news.image}
                    link={news.link}
                    slogan={news.slogan} />
            ))}

        </SectionOverlay>
    )
}



