import Link from "next/link";
import { BasketInfo } from "./BasketInfo";

export const BasketBottom = ({ totalAmount, width, onClick }: { totalAmount: number, width: number, onClick: () => void }) => (
    <>
        <div className='flex justify-between text-base font-bold'>
            <span>Do zapłaty</span>
            <span>{totalAmount.toFixed(2).replace('.', ',')} zł</span>
        </div>

        <Link onClick={() => onClick()} href='/koszyk' className='flex items-center justify-center w-full px-4 py-3 mt-3 text-white bg-green-600 rounded-full hover:bg-green-700 min-h-[40px]'>
            Przejdź do koszyka
        </Link>

        {width > 1079 ? (
            <BasketInfo />
        ) : ''}

    </>
)