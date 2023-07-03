import { ProductCard } from '@/components/ProductCard'
import { SectionCarouselContainer } from '@/components/SectionCarouselContainer'
import { db } from '@/lib/db'

export const BestsellerSection = async () => {
  const products = await db.product.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <SectionCarouselContainer heading={'Bestsellers'} slugToAll={'bestsellers'} productSection={true}>
      {products.map((product) => (
        <div key={product.id} className="h-full px-2 py-1 lg:py-4">
          <ProductCard product={product} />
        </div>
      ))}
    </SectionCarouselContainer>
  )
}
