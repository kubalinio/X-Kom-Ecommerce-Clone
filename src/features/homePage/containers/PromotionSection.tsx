'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { SectionCarouselContainer } from '@/features/homePage/containers/SectionCarouselContainer'
import { urlFor } from '@/lib/sanity.client'
import { Promotion, Promotions } from '@/types/typings'

const fetchPromotions = async () => {
  const response = await axios.get(`/api/promotions`)
  return response.data
}

const Card = ({ title, image, slug, slogan }: Promotion) => {
  return (
    <div className="block lg:w-full xl:w-full">
      <div className="h-full py-2">
        <Link href={`/${slug.current}`}>
          <div className="mt-[2px] flex items-center justify-center overflow-hidden rounded-lg shadow-xCom">
            <span className="inline-flex h-[212px] min-h-full w-[284px] items-center justify-center overflow-hidden py-3">
              <Image
                src={`${urlFor(image).url()}`}
                width={253}
                height={212}
                alt={`${title}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
          </div>
        </Link>

        <Link href={`${slug.current}`} className="ml-1 mt-4 block">
          <h3 className="min-h-[48px] max-w-[250px] text-xl font-bold leading-6">
            <span className="max-h-[48px]">
              <span className="line-clamp-2 w-full overflow-hidden text-ellipsis">{title}</span>
            </span>
          </h3>
        </Link>

        <div className="my-1 overflow-hidden text-ellipsis whitespace-nowrap text-[#4d4d4d]">{slogan}</div>
      </div>
    </div>
  )
}

export const PromotionSection = () => {
  const { data, isLoading } = useQuery<Promotions>({
    queryFn: () => fetchPromotions(),
    queryKey: ['promotions'],
    staleTime: 12 * 60 * 60 * 1000,
  })
  if (isLoading) return <div>Loading...</div>

  return (
    <SectionCarouselContainer heading={'Promocje'} slugToAll={'promocje'}>
      {data?.promotions.map((promo) => (
        <Card key={promo.title} title={promo.title} image={promo.image} slug={promo.slug} slogan={promo.slogan} />
      ))}
    </SectionCarouselContainer>
  )
}
