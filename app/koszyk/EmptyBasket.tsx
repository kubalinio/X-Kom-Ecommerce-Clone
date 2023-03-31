import Link from 'next/link'
import React from 'react'

const EmptyBasket = () => {
    return (

        <div className='flex flex-col justify-center w-full px-4 py-8 text-center'>

            <h2 className='mx-auto mt-8 text-3xl'>Twój koszyk jest pusty</h2>
            <p className='mx-auto mt-2 text-xl text-[#707070]'>Szukasz inspiracji?</p>

            <Link href='/'
                className='flex items-center justify-center h-10 mt-3 md:mt-6 md:mx-auto mb-4 md:mb-8 min-h-[40px] rounded-full w-auto md:w-[364px] bg-[#0082fa] border border-[#0082fa] py-[10px] px-4 text-white text-center select-none hover:bg-[#0070CC] active:bg-[#00407a] transition-colors duration-200'
            >
                Przejdź do strony głównej
            </Link>
        </div>

    )
}

export default EmptyBasket