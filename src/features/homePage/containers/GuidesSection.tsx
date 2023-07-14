/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { SectionCarouselContainer } from '@/components/SectionCarouselContainer'
import { urlFor } from '@/lib/sanity.client'
import { AllGuide, Guide } from '@/types/typings'

const ArticleCard = ({ title, image, link, slogan }: Guide) => {
  return (
    <div className="block lg:w-full xl:w-full">
      <div className="h-full py-2">
        <Link href="/poradniki">
          <div className="mt-[2px] flex items-center justify-center overflow-hidden rounded-lg shadow-xCom">
            <span className="inline-flex h-[179px] min-h-full w-full items-center justify-center overflow-hidden py-3 lg:h-[174px] xl:h-[196px] 2xl:h-[218px]">
              <Image
                src={urlFor(image).url()}
                width={253}
                height={212}
                alt={title}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </span>
          </div>
        </Link>

        <Link href="/poradniki" className="ml-1 mt-4 block">
          <h3 className="min-h-[48px] max-w-[250px] text-xl font-bold leading-6">
            <span className="max-h-[48px]">
              <span className="line-clamp-2 w-full overflow-hidden text-ellipsis">{title}</span>
            </span>
          </h3>
        </Link>

        <div className="my-1 overflow-hidden text-ellipsis whitespace-nowrap text-[#707070]">{slogan}</div>

        <div className="flex items-center justify-start text-sm text-[#707070]">
          <time title="15-02-2023 | 13:39" dateTime="2023-02-15T12:39:00Z" className="">
            {/* Timestamp */}2 tygodnie temu
          </time>
          <div className="mx-2 h-1 w-1 rounded-sm bg-[#707070]" />
          <div>
            <Link href={`/aktualności`}>{`2 komentarze`}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const fetchGuides = async () => {
  const response = await axios.get(`/api/guides`)
  return response.data
}

export const GuidesSection = () => {
  const { data, isLoading } = useQuery<AllGuide>({
    queryFn: () => fetchGuides(),
    queryKey: ['guides'],
    staleTime: 12 * 60 * 60 * 1000,
  })

  if (isLoading) return <div>Load</div>

  return (
    <SectionCarouselContainer heading={'Poradniki'} slugToAll={'poradniki'}>
      {data?.guides.map((guide) => (
        <ArticleCard key={guide._id} title={guide.title} image={guide.image} link={guide.link} slogan={guide.slogan} />
      ))}
    </SectionCarouselContainer>
  )
}
