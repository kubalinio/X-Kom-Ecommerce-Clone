// import News from "./components/News";
import { GuidesSection } from "./GuidesSection";
import { HitsWeekSection } from "./HitsWeekSection";
import { NewsSection } from "./NewsSection";
import { PromotionSection } from "./PromotionSection";
import RecommendProducts from "./RecommendProducts";
import SliderBox from "./Slider";
import Promo from "./Promo";
import { BestsellerSection } from "./BestsellerSection";
import { BrandSection } from "./BrandSection";


export default function Home() {
  return (
    <main className="w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-full mx-auto lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px] ">
      {/* Container */}
      <div className="flex flex-wrap bg-[#f9f9f9]">
        {/* ??? Element */}

        {/* Slider Section */}
        <SliderBox />
        {/* Hot Shot */}
        <Promo />
        {/* Recommend Products */}
        <RecommendProducts />
        {/* Promotions Section */}
        <PromotionSection />
        {/* New Card Article */}
        <NewsSection />
        {/* Hits of the Week */}{/* The same Bestsellers */}
        <HitsWeekSection />
        {/* Guides */}
        <GuidesSection />
        {/* Bestsellets */}
        <BestsellerSection />
        {/* Brand Zone */}
        <BrandSection />

      </div>
    </main>
  )
}
