// import News from "./components/News";


import axios from "axios";
import RecommendProducts from './components/RecommendProducts'
import { BestsellerSection } from "./components/BestsellerSection";
import { BrandSection } from "./components/BrandSection";
import { GuidesSection } from "./components/GuidesSection";
import { HitsWeekSection } from "./components/HitsWeekSection";
import { HotShot } from "./components/HotShot";
import { NewsSection } from "./components/NewsSection";
import { PromotionSection } from "./components/PromotionSection";

import SliderBox from './components/SliderBox'

const fetchProducts = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/getProducts`)
  return response.data
};

const fetchHotShot = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHotShot`)
  return response.data
}

export default async function Home() {
  const initialProducts = await fetchProducts()
  const hotShotProduct = await fetchHotShot()

  return (
    <main className="max-w-full mx-auto w-full lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
      {/* Container */}
      <div className="flex flex-wrap bg-[#f9f9f9]">
        {/* ??? Element */}

        {/* Slider Section */}
        <SliderBox />
        {/* Hot Shot */}
        <HotShot hotShotProduct={hotShotProduct} />
        {/* Recommend Products */}
        <RecommendProducts initialProducts={initialProducts} />
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