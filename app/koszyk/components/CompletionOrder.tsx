import Link from "next/link"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { BasketInfo } from "../../components/Basket/BasketInfo"



type Props = {
    totalAmount: number
}


const CompletionOrder = ({ totalAmount }: Props) => {
    return (
        // tranisition top animation
        <div className="sticky top-[84px] transition-[top] duration-300 bg:z-[15]" >
            {/* Total */}
            <div className="w-[calc(100%+32px)] -ml-4 max-md:border-y border-[#ddd] md:rounded-lg md:border md:w-full md:m-0">
                {/* Promo Code */}
                <div></div>

                {/* Delivery */}
                <div className="bg-[#f5f5f5] p-4">
                    {/* Total & Button */}
                    <div className="static w-full bg-[#f5f5f5]">
                        <div className='flex justify-between text-lg font-bold'>
                            <span>Do zapłaty</span>
                            <span>{totalAmount.toFixed(2).replace('.', ',')} zł</span>
                        </div>

                        <button className='flex items-center justify-center w-full px-4 py-3 mt-3 text-white bg-green-600 rounded-full hover:bg-green-700 min-h-[40px]'>
                            Przejdź do dostawy
                            <span className="inline-block h-[24px] w-[26px]">
                                <MdOutlineKeyboardArrowRight className="w-full h-full text-2xl" />
                            </span>
                        </button>
                    </div>

                    <button className='flex items-center justify-center w-full px-4 py-2 mt-2 text-[#4d4d4d] text-center bg-transparent rounded-full hover:bg-[#4d4d4d] h-[32px] border border-[#4d4d4d] hover:text-white transition-colors duration-200'>
                        Oblicz ratę
                    </button>

                </div>
            </div>

            {/* Basket info */}
            <div className="my-2 -mx-4 md:hidden md:m-0 bg:block">
                <BasketInfo />
            </div>

        </div>
    )
}

export default CompletionOrder