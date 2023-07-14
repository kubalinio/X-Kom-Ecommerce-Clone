'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Element } from 'react-scroll'

import { Promotions } from '@/types/typings'

import { ArticleCard } from './ArticleCard'

const fetchPromotions = async () => {
  const response = await axios.get(`/api/promotions`)
  return response.data
}

export const PromotionsSection = () => {
  const { data, isLoading } = useQuery<Promotions>({
    queryFn: () => fetchPromotions(),
    queryKey: ['promotions'],
    staleTime: 12 * 60 * 60 * 1000,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <Element id="Promocje" name="Promocje">
      <div className="relative" />
      {/* Logic to scroll & dont hide Title */}
      <h2 className="relative -top-[58px] -mb-11 mt-8 pt-[58px] text-2xl/7 font-bold md:text-3xl/8">
        Promocje
        <span className="ml-1 text-[#707070]">({data?.promotions.length})</span>
        {/* Dynamic */}
      </h2>

      <div className="-mb-2 flex flex-wrap md:-mb-4">
        {/* Dynamiczne producty map()*/}
        {data?.promotions.map((promo) => (
          <ArticleCard
            key={promo._id}
            title={promo.title}
            slogan={promo.slogan}
            slug={promo.slug}
            image={promo.image}
          />
        ))}
      </div>
    </Element>
  )
}
