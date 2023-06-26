import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { BasketInfo } from '@/components/Basket'

type Props = {
  totalAmount: number
}

const CompletionOrder = ({ totalAmount }: Props) => {
  return (
    // tranisition top animation
    <div className="sticky top-[84px] transition-[top] duration-300 bg:z-[15]">
      {/* Total */}
      <div className="-ml-4 w-[calc(100%+32px)] border-[#ddd] max-md:border-y md:m-0 md:w-full md:rounded-lg md:border">
        {/* Promo Code */}
        <div></div>

        {/* Delivery */}
        <div className="bg-[#f5f5f5] p-4">
          {/* Total & Button */}
          <div className="static w-full bg-[#f5f5f5]">
            <div className="flex justify-between text-lg font-bold">
              <span>Do zapłaty</span>
              <span>{totalAmount.toFixed(2).replace('.', ',')} zł</span>
            </div>

            <button className="mt-3 flex min-h-[40px] w-full items-center justify-center rounded-full bg-green-600 px-4 py-3 text-white hover:bg-green-700">
              Przejdź do dostawy
              <span className="inline-block h-[24px] w-[26px]">
                <MdOutlineKeyboardArrowRight className="h-full w-full text-2xl" />
              </span>
            </button>
          </div>

          <button className="mt-2 flex h-[32px] w-full items-center justify-center rounded-full border border-[#4d4d4d] bg-transparent px-4 py-2 text-center text-[#4d4d4d] transition-colors duration-200 hover:bg-[#4d4d4d] hover:text-white">
            Oblicz ratę
          </button>
        </div>
      </div>

      {/* Basket info */}
      <div className="-mx-4 my-2 md:m-0 md:hidden bg:block">
        <BasketInfo />
      </div>
    </div>
  )
}

export default CompletionOrder
