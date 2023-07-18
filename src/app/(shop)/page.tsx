import { BestsellerSection } from '@/features/homePage/containers/BestsellerSection'
import { BrandSection } from '@/features/homePage/containers/BrandSection'
import { GuidesSection } from '@/features/homePage/containers/GuidesSection'
import { HitsWeekSection } from '@/features/homePage/containers/HitsWeekSection'
import { HotShot } from '@/features/homePage/containers/hotShot'
import { NewsSection } from '@/features/homePage/containers/NewsSection'
import { PromotionSection } from '@/features/homePage/containers/PromotionSection'
import { RecommendProducts } from '@/features/homePage/containers/recommendProducts/RecommendProducts'
import SliderBox from '@/features/homePage/SliderBox'

export default async function Home() {
  return (
    <main className="mx-auto w-full max-w-full lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
      {/* Container */}
      <div className="flex flex-wrap bg-[#f9f9f9]">
        {/* ??? Element */}

        <SliderBox />
        {/* Hot Shot */}
        {/* Prisma */}
        <HotShot />

        {/* @ts-expect-error server component */}
        <RecommendProducts />

        <PromotionSection />

        <NewsSection />

        {/* @ts-expect-error server component */}
        <HitsWeekSection />

        <GuidesSection />

        {/* @ts-expect-error server component */}
        <BestsellerSection />

        <BrandSection />
      </div>
    </main>
  )
}
