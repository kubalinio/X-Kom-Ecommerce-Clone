'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { ProductCard } from '@/components/ProductCard'
import { SectionCarouselContainer } from '@/components/SectionCarouselContainer'
import { Product } from '@/types/typings'

import LoadingSkelleton from '../app/(shop)/products/[slug]/components/LoadingSkelleton'

const fetchProducts = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/getProducts`)
  return response.data
}

export const HitsWeekSection = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ['products'],
    staleTime: 3600000,
  })

  if (isLoading) return <LoadingSkelleton />

  const products: Product[] = data.products

  return (
    <SectionCarouselContainer heading={'Hity tygodnia'} slugToAll={''} productSection={true}>
      {products.map((product) => (
        <div key={product._id} className="h-full px-2 py-1 lg:py-4">
          <ProductCard product={product} />
        </div>
      ))}
    </SectionCarouselContainer>
  )
}
