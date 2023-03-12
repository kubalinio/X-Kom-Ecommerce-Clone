// import News from "./components/News";
import { GuidesSection } from "./components/HomePage/GuidesSection";
import { HitsWeekSection } from "./components/HomePage/HitsWeekSection";
import { NewsSection } from "./components/HomePage/NewsSection";
import { PromotionSection } from "./components/HomePage/PromotionSection";
import RecommendProducts from "./components/HomePage/RecommendProducts";
import SliderBox from "./components/HomePage/SliderBox";
import Promo from "./components/HomePage/Promo";
import { BestsellerSection } from "./components/HomePage/BestsellerSection";
import { BrandSection } from "./components/HomePage/BrandSection";



export default function Home() {
  return (
    <main className="max-w-full mx-auto w-full lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
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
