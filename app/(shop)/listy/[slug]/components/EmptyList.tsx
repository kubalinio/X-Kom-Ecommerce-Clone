import Image from 'next/image'
import ShopIcon from '../../../../../public/listShoping.svg'

type Props = {}

const EmptyList = (props: Props) => {
    return (
        <div className='pt-6 border-t border-[#ddd] md:flex md:items-center md:justify-between md:pr-9 md:pl-6 bg:pr-[100px]'>
            {/* text */}
            <div className='mb-8 md:m-0 md:pr-6'>
                <h2
                    title='Twoja lista jest pusta'
                    className='mb-2 text-xl'
                >
                    Twoja lista jest pusta
                </h2>
                <p className='text-[#707070]'>
                    Masz na oku ciekawe produkty? Dodaj je do listy!
                </p>
            </div>

            {/* Img */}
            <div className='flex justify-center md:w-[310px] md:shrink-0'>
                <span title='Twoja lista jest pusta' className='inline-block overflow-hidden max-w-full w-[284px] h-auto md:w-full lg:w-[366px]'>
                    <Image
                        src={ShopIcon}
                        alt='Twoja lista jest pusta'
                        className='w-full h-auto lg:w-[366px]'
                    />
                </span>
            </div>
        </div>
    )
}

export default EmptyList