import { ProductCard } from '@/features/homePage/components/ProductCard'
import { SectionCarouselContainer } from '@/features/homePage/containers/SectionCarouselContainer'
import { db } from '@/lib/db'

export const HitsWeekSection = async () => {
  const products = await db.product.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <SectionCarouselContainer heading={'Hity tygodnia'} slugToAll={''} productSection={true}>
      {products.map((product) => (
        <div key={product.id} className="h-full px-2 py-1 lg:py-4">
          <ProductCard product={product} />
        </div>
      ))}
    </SectionCarouselContainer>
  )
}
