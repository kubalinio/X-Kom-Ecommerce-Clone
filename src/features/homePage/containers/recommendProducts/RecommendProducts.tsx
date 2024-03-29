import { ProductCard } from '@/features/homePage/components/ProductCard'
import { db } from '@/lib/db'

import { ProductsFeedMobile } from './ProductsFeedMobile'

export const RecommendProducts = async () => {
  const products = await db.product.findMany({
    take: 8,
    orderBy: {
      createdAt: 'asc',
    },
  })

  if (!products) return <div>not Found</div>

  return (
    <section className="mb-4 w-full bg-white lg:mb-0 lg:w-[68.333%] lg:pb-7">
      <div className="flex flex-col border-y border-[#ebebeb] lg:border-b-0 lg:border-[#ddd] lg:pt-2">
        <div className="flex justify-between w-full pl-4 pr-2">
          <div className="flex flex-col">
            <h2 className="mt-4 text-2xl font-semibold">Polecamy</h2>
          </div>
        </div>

        <div className="w-full pt-2 pb-6 lg:pb-0">
          {/* Desktop Products Show in 1080px */}
          <div className="flex-wrap hidden mt-3 -mx-2 lg:flex">
            {products.map((product, i) => (
              <div key={product.id} className="mb-[22px] w-1/4 px-2">
                <ProductCard product={product} i={i} />
              </div>
            ))}
          </div>

          {/* Mobile */}
          <ProductsFeedMobile products={products} />
        </div>
      </div>
    </section>
  )
}
