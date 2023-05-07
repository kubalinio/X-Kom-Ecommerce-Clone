
import { addToBasket, getTotals } from '@/app/store/basketSlice'
import { PurchaseListProduct } from '@/app/typings'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

type Props = {
    product: PurchaseListProduct
}

const AddToBasketBtn = ({ product }: Props) => {

    const dispatch = useDispatch()
    const router = useRouter()

    // const currentSlug = slug.current

    const addItemToBasket = () => {

        const { Id: _id, Name: title, Price: price, MainPhoto: mainImage, ProductCount: quantity, WebUrl: slug } = product

        const basketProduct = { _id, title, price, mainImage, quantity, slug }


        dispatch(addToBasket(basketProduct))
        dispatch(getTotals())
        router.push('/koszyk')
    }

    return (
        <button
            onClick={addItemToBasket}
            title='Usuń z listy'
            className='inline-flex items-center justify-start whitespace-nowrap bg-transparent text-[#119e00] rounded-none w-full h-[48px] py-3 px-4 hover:bg-[#ddd] transition-colors duration-200'
        >
            <span className='inline-block w-6 h-6 mr-3 overflow-hidden'>
                <MdOutlineAddShoppingCart className='w-full h-full text-xl' />
            </span>

            <span className='flex flex-col items-center text-center whitespace-nowrap'>
                <span className='inline-block mt-[2px] text-center'>
                    Dodaj do koszyka
                </span>
            </span>
        </button>
    )
}

export default AddToBasketBtn