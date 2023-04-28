import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import { Image as ImageData } from '@/app/typings';


export const ProductImgThumbnail = ({ image, active, actived }: { image: ImageData, active: () => void, actived: boolean }) => {
    return (
        <div
            onMouseEnter={() => active()}
            className={`inline-flex items-center justify-center h-[70px] bg:h-[80px] lg:h-[70px] w-[calc(18%-4px)] lg:w-[calc(16%-4px)] rounded-lg mr-2 bg:mr-1 mb-2 bg:mb-1 border  cursor-pointer hover:border-gray-600 ${actived ? 'border-gray-800' : 'border-[#ddd]'}`}>

            <span className='inline-flex items-center justify-center w-[calc(100%-8px)] h-[calc(100%-8px)] m-1 max-w-full max-h-full'>
                <Image
                    src={urlFor(image).url()}
                    width={230}
                    height={200}
                    alt=''
                    loading='lazy'
                    className='inline-block w-full h-auto max-w-full max-h-full'
                />
            </span>
        </div>
    )
}

