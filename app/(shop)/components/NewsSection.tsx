'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { SectionCarouselContainer } from '@/components/SectionCarouselContainer'
import { urlFor } from '@/lib/sanity.client'
import { AllNews, News } from '@/types/typings'

const fetchNews = async () => {
  const response = await axios.get(`/api/getNews`)
  return response.data
}

const CardNews = ({ title, image, link, slogan }: News) => {
  return (
    <div className="block lg:w-full xl:w-full">
      <div className="h-full py-2">
        <Link href={`/${link}`}>
          <div className="mt-[2px] flex items-center justify-center overflow-hidden rounded-lg shadow-xCom">
            <span className="inline-flex h-[179px] min-h-full w-full items-center justify-center overflow-hidden py-3 lg:h-[174px] xl:h-[196px] 2xl:h-[218px]">
              <Image
                src={`${urlFor(image).url()}`}
                width={253}
                height={212}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
          </div>
        </Link>

        <Link href={`/${link}`} className="mt-4 block">
          <h3 className="max-h-[48px] max-w-[250px] overflow-hidden text-xl font-bold leading-6">
            <span className="block max-h-[48px] overflow-hidden">
              <span className="line-clamp-2 w-full overflow-hidden text-ellipsis">{title}</span>
            </span>
          </h3>
        </Link>

        <div className="my-1 overflow-hidden text-ellipsis whitespace-nowrap text-[#4d4d4d]">{slogan}</div>

        <div className="flex items-center justify-start text-sm text-[#707070]">
          <time title="15-02-2023 | 13:39" dateTime="2023-02-15T12:39:00Z" className="">
            {/* Timestamp */}2 tygodnie temu
          </time>
          <div className="mx-2 h-1 w-1 rounded-sm bg-[#707070]" />
          <div>
            <Link href={`/aktualności`} className="underline-offset-2 hover:underline">
              {`2 komentarze`}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const NewsSection = () => {
  const { data, isLoading, isFetching } = useQuery<AllNews>({
    queryFn: () => fetchNews(),
    queryKey: ['news'],
    staleTime: 12 * 60 * 60 * 1000,
  })

  if (isLoading && isFetching) return <div>Loading ...</div>

  return (
    <SectionCarouselContainer heading={'Aktualności'} slugToAll={'aktualnosci'}>
      {data?.news.map((news) => (
        <CardNews key={news._id} title={news.title} image={news.image} link={news.link} slogan={news.slogan} />
      ))}
    </SectionCarouselContainer>
  )
}
