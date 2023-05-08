import { AiOutlineInfoCircle } from "react-icons/ai";

export const BasketInfo = () => (
    <div className='flex w-full px-4 py-3 bg-transparent rounded md:px-0'>
        <span className='flex-shrink-0 inline-block w-5 h-5 mr-2'>
            <AiOutlineInfoCircle className='w-full h-full text-xl' />
        </span>

        <div className=' text-[#4d4d4d] leading-5 text-base pr-4'>
            Dokończ składanie zamówienia - dodanie produktów do koszyka nie oznacza rezerwacji.
        </div>

    </div>
)