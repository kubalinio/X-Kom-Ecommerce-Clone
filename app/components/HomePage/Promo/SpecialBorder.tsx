import React from 'react'

const SpecialBorder = () => {
    return (
        <div className='absolute inset-0'>
            <span className='block rounded-t-xl w-full h-[17%] border-2 border-b-0 border-[#fa0064] ' />
            <span className='block w-full h-[11%] border-x-2 border-[#be0064] ' />
            <span className='block w-full h-[44%] border-x-2 border-[#1a1a1a] ' />
            <span className='block w-full h-[11%] border-x-2 border-[#be0064] ' />
            <span className='block rounded-b-xl w-full h-[17%] border-2 border-t-0 border-[#fa0064] ' />
        </div>
    )
}

export default SpecialBorder