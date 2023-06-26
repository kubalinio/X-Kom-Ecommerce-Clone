import { BestsellerSection } from '@/components/features/home/BestsellerSection'
import { BrandSection } from '@/components/features/home/BrandSection'
import { GuidesSection } from '@/components/features/home/GuidesSection'
import { HitsWeekSection } from '@/components/features/home/HitsWeekSection'
import { NewsSection } from '@/components/features/home/NewsSection'
import { PromotionSection } from '@/components/features/home/PromotionSection'
import { RecommendProducts } from '@/components/features/home/recommendProducts/RecommendProducts'
import SliderBox from '@/components/features/home/SliderBox'
import { HotShot } from '@/components/HotShot'

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
