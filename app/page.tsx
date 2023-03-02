import Promo from "./components/Promo";
import Promotions from "./components/Promotions";
import RecommendProducts from "./components/RecommendProducts";
import SliderBox from "./components/Slider";


export default function Home() {
  return (
    <main className="w-full max-w-full mx-auto lg:w-[calc(100%+64px)] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1444px] ">
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
        <Promotions />
      </div>
      {/*  */}
    </main>
  )
}
