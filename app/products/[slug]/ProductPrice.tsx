import React from 'react'

type Props = {
    price: number
}

const ProductPrice = ({ price }: Props) => {
    return (

        <div className='m-0 md:mx-4'>
            {/* If Promotion */}
            {/* <div className='text-right'>Oszczędz (kwota) zł</div> */}
            <div className='inline-flex items-baseline justify-end w-full'>
                {/* If Promotion Previous price */}
                {/* <div className='mr-2 text-[#949494] line-through'>Prev Price</div> */}
                <div className='text-[#4d4d4d] text-[18px]'>
                    {price.toFixed(2).replace('.', ',')} zł
                </div>
            </div>
        </div >

    )
}

export default ProductPrice