import useWindowDimensions from "@/app/hooks/useWindowDimensions"
import { RootState } from "@/app/store"
import Link from "next/link"
import { useSelector } from "react-redux"
import { BasketInfo } from "./BasketInfo"
import { BasketBottom } from "./BasketBottom"
import { BasketProduct } from "./BasketProduct"

const BasketHeader = ({ totalQuantity }: { totalQuantity: number }) => (


    <div className='flex items-center w-full'>

        <h3 className='pl-2 text-lg font-bold text-black whitespace-nowrap flex-shrink-[6] flex-grow basis-auto'>
            Koszyk
            <span className='text-[#707070] ml-1'>
                {`(${totalQuantity})`}
            </span>
        </h3>
        <Link href='/koszyk' className='text-blue-500 hover:text-blue-600 focus:text-blue-600'>
            Edytuj
        </Link>
    </div>

)

export const MiniBasket = ({ onClick }: { onClick: () => void }) => {
    const { width } = useWindowDimensions()

    const basket = useSelector((state: RootState) => state.basket)

    return (
        <div className='flex flex-col justify-center min-h-[150px] h-full lg:max-h-[610px]'>
            {/* 0 in dekstop Heeader Desktop */}
            <div className='hidden lg:inline-flex justify-between items-center bg-white min-h-[56px] w-full p-2 pr-4 border-b rounded-t-lg border-[#ddd]'>
                <BasketHeader totalQuantity={basket.basketTotalQuantity} />
            </div>

            {/* 15 */}
            {width! < 1079 ? (
                <div className='px-2 border-b border-[#ddd]'>
                    <BasketInfo />
                </div>) : ''}


            {/* 3 */}
            <div className='h-full px-4 -mb-1 overflow-y-auto break-words'>
                {basket.basketItems.map(item => (
                    <BasketProduct
                        onClick={() => onClick()}
                        key={item.title + Math.random()}
                        title={item.title}
                        quantity={item.quantity}
                        price={item.price}
                        mainImage={item.mainImage}
                        slug={item.slug} />
                ))}
            </div>

            {/* 5 */}
            <div className='sticky mt-auto bg-[#f5f5f5] border border-[#ddd] p-4 pb-3 rounded-lg '>
                <BasketBottom onClick={() => onClick()} totalAmount={basket.basketTotalAmount} width={width!} />
            </div>
        </div>
    )
}