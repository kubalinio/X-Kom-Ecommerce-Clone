import Image from 'next/image'


export const PromoProductDetail = ({ finished }: { finished: boolean }) => {

    return (
        <div className='w-full md:w-1/2 lg:w-full'>
            {/* Photo */}
            <div className='relative flex flex-col gap-2'>
                <h1 className='text-[26px] font-bold leading-7'>Gorący strzał</h1>
                <div className={`inline-flex items-center justify-center self-center overflow-hidden h-[220px] w-[262px] ${finished ? 'grayscale-[50%] opacity-60' : 'grayscale-0 opacity-100'}`}>
                    <Image src="https://cdn.x-kom.pl/i/img/promotions/hot-shot-large,,hs_2023_2_23_9_1_19.PNG"
                        alt="phone"
                        width={180}
                        height={220}
                        className='w-auto h-auto max-w-full max-h-full' />
                </div>
                {/* Position */}
                <div className='absolute right-0 top-2'>
                    <div className='text-white bg-[#707070] text-center w-[100px] rounded-lg px-2 py-[6px]'>
                        <div className='text-xs leading-4'>Oszczędź</div>
                        <span className='text-xl leading-7'>500 zł</span>
                    </div>
                </div>
            </div>
            {/* Title */}
            <div className='text-center'>
                <span className='w-full text-xl line-clamp-1'>
                    Motorola edge 20 lite 5G 8/128GB Electric Graphite 90Hz
                </span>
            </div>
        </div>
    )
}

