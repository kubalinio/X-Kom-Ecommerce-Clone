import { BestsellerSection } from '@/features/homePage/BestsellerSection'
import { BrandSection } from '@/features/homePage/BrandSection'
import { GuidesSection } from '@/features/homePage/GuidesSection'
import { HitsWeekSection } from '@/features/homePage/HitsWeekSection'
import { HotShot } from '@/features/homePage/hotshot'
import { NewsSection } from '@/features/homePage/NewsSection'
import { PromotionSection } from '@/features/homePage/PromotionSection'
import { RecommendProducts } from '@/features/homePage/recommendProducts/RecommendProducts'
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
