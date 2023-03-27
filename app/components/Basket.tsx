import useWindowDimensions from '@/hooks/useWindowDimensions'
import { urlFor } from '@/lib/sanity.client'
import { RootState } from '@/store'
import { BasketItem } from '@/store/basketSlice'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { AuthButton, AuthButtonOutlined } from './AuthButtons'


const BasketHeader = ({ totalQuantity }: { totalQuantity: number }) => (


    <div className='flex items-center w-full'>

        <h3 className='pl-2 text-lg font-bold text-black whitespace-nowrap flex-shrink-[6] flex-grow basis-auto'>
            Koszyk
            <span className='text-[#707070] ml-1'>
                {`(${totalQuantity})`}
            </span>
        </h3>
        <Link href='/koszyk' className='text-blue-500 hover:text-blue-600 focus:text-blue-600'>
            Edytuj
        </Link>
    </div>

)

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

const BasketProduct = ({ title, quantity, price, mainImage, slug }: BasketItem) => (
    <div className='py-3 border-b border-[#ddd] overflow-hidden'>
        <div className='flex'>
            <Link href={`/${slug}`}>
                <span className='inline-flex items-center justify-center h-[60px] w-[72px] overflow-hidden'>
                    <Image
                        src={urlFor(mainImage).url()}
                        width={72}
                        height={60}
                        alt={title}
                        title={title}
                        loading='lazy'
                        className='object-contain w-full h-full'
                    />
                </span>
            </Link>

            <div className='block w-full ml-3'>
                <div className='flex flex-col items-start'>
                    <Link href={`/${slug}`} title={title}>
                        <h3 className='mb-1 overflow-hidden whitespace-nowrap max-w-[145px]'>{title}</h3>
                    </Link>
                </div>

                <div className='flex items-end justify-between'>
                    <span className='text-[#707070] min-w-[40px] mr-2 text-left'>
                        {quantity} szt.
                    </span>
                    <div className='inline-block text-right'>
                        <span>
                            {price} zł
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* ??? */}
        <div className='text-[#1a1a1a] mt-4'></div>
    </div>
)

const BasketBottom = ({ totalAmount, width }: { totalAmount: number, width: number }) => (
    <>
        <div className='flex justify-between text-base font-bold'>
            <span>Do zapłaty</span>
            <span>{totalAmount} zł</span>
        </div>

        <Link href='koszyk' className='flex items-center justify-center w-full px-4 py-3 mt-3 text-white bg-green-600 rounded-full hover:bg-green-700 min-h-[40px]'>
            Przejdź do koszyka
        </Link>

        {width > 1079 ? (
            <BasketInfo />
        ) : ''}

    </>
)

export const MiniBasket = () => {
    const { width } = useWindowDimensions()

    const basket = useSelector((state: RootState) => state)

    return (
        <div className='flex flex-col justify-center min-h-[150px] h-full lg:max-h-[610px]'>
            {/* 0 in dekstop Heeader Desktop */}
            <div className='hidden lg:inline-flex justify-between items-center bg-white min-h-[56px] w-full p-2 pr-4 border-b border-[#ddd]'>
                <BasketHeader totalQuantity={basket.basketTotalQuantity} />
            </div>

            {/* 15 */}
            {width! < 1079 ? (
                <div className='px-2 border-b border-[#ddd]'>
                    <BasketInfo />
                </div>) : ''}


            {/* 3 */}
            <div className='h-full px-4 -mb-1 overflow-y-auto break-words'>
                {basket.basketItems.map(item => (
                    <BasketProduct key={item.id} title={item.title} quantity={item.quantity} price={item.price} mainImage={item.mainImage} slug={item.slug} />
                ))}
            </div>

            {/* 5 */}
            <div className='sticky mt-auto bg-[#f5f5f5] border border-[#ddd] p-4 pb-3 rounded-lg '>
                <BasketBottom totalAmount={basket.basketTotalAmount} width={width!} />
            </div>
        </div>
    )
}

export const EmptyMiniBasket = () => {

    const pathname = usePathname()

    return (
        <div className='flex flex-col justify-center h-full min-h-[150px]'>
            <div className='flex flex-col items-center px-4 py-8'>

                <p className='mb-1 text-2xl font-bold'>Twój koszyk jest pusty</p>
                <p className='mb-2'>Szukasz inspiracji?</p>

                <AuthButtonOutlined onClick={() => close()} slug={`${pathname === '/' ? 'promocje' : ''}`}>
                    Przejdź do {pathname === '/' ? 'promocji' : 'strony głównej'}
                </AuthButtonOutlined>
            </div>
        </div >
    )
}