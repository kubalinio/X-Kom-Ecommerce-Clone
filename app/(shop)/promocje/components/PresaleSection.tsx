'use client'

import { Promotions } from "@/app/typings"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { Element } from "react-scroll"
import { ArticleCard } from "./ArticleCard"


const fetchPromotions = async () => {
    const response = await axios.get(`/api/getPromotions`)
    return response.data
}

export const PresaleSection = () => {

    const { data, isLoading } = useQuery<Promotions>({
        queryFn: () => fetchPromotions(),
        queryKey: ['promotions'],
        staleTime: 12 * 60 * 60 * 1000
    })

    if (isLoading) return <div>Loading...</div>

    return (
        <Element id="Przedsprzedaże" name="Przedsprzedaże">
            <div className="relative" />
            {/* Logic to scroll & dont hide Title */}
            <h2 className="relative pt-[58px] -top-[58px] mt-8 -mb-11 font-bold text-2xl/7 md:text-3xl/8">
                Przedsprzedaże
                <span className="ml-1 text-[#707070]">({data?.promotions.length})</span>
                {/* Dynamic */}
            </h2>

            <div className="flex flex-wrap -mb-2 md:-mb-4">
                {/* Dynamiczne producty map()*/}
                {data?.promotions.slice(0, 4).map(presale => (
                    <ArticleCard
                        title={presale.title}
                        slogan={presale.slogan}
                        slug={presale.slug}
                        image={presale.image} />
                ))}
            </div>

        </Element>
    )
}

