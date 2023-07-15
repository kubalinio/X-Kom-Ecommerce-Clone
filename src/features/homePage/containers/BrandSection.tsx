'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

import { SectionCarouselContainer } from '@/features/homePage/containers/SectionCarouselContainer'
import { urlFor } from '@/lib/sanity.client'
import { Brands } from '@/types/typings'

const fetchBrands = async () => {
  const response = await axios.get(`/api/brands`)
  return response.data
}

export const BrandSection = () => {
  const { data, isLoading } = useQuery<Brands>({
    queryFn: () => fetchBrands(),
    queryKey: ['brands'],
    staleTime: 3600000,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <SectionCarouselContainer heading={'Sekcja marek'} slugToAll={''} productSection={true}>
      {data?.brands?.map((brand) => (
        <div key={brand._id} className="flex h-[88px] items-center justify-center">
          <Link
            href={`/`}
            title={brand.title}
            className="flex h-full w-full items-center justify-center opacity-50 grayscale-[1] transition duration-300 hover:opacity-100 hover:grayscale-0"
          >
            <span className="inline-flex h-[36px] w-[110px] items-center justify-center overflow-hidden">
              <Image
                src={`${urlFor(brand.image).url()}`}
                alt={brand.title}
                className="inline-block h-auto max-h-full w-auto max-w-full"
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
