import { addToBasket, getTotals } from '@/app/store/basketSlice'
import { PurchaseListProduct } from '@/app/typings'
import { useRouter } from 'next/navigation'

import React from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

type Props = {
    products?: PurchaseListProduct[]
}

const AddAllAccessibleBtn = ({ products }: Props) => {

    // const [showModal, setShowModal] = useState(false)
    // console.log(product)
    // const { _id, slug, special, mainImage, title, price } = product

    const dispatch = useDispatch()
    const router = useRouter()

    // const currentSlug = slug.current

    const addItemsToBasket = () => {
        const productsBasket = products?.map((product => {
            const { Id: _id, Name: title, Price: price, MainPhoto: mainImage, ProductCount: quantity, WebUrl: slug } = product

            return { _id, title, price, mainImage, quantity, slug }
        }))

        productsBasket?.map(product => dispatch(addToBasket(product)))
        dispatch(getTotals())
        router.push('/koszyk')
    }

    return (
        <button
            onClick={addItemsToBasket}
            title='Dodaj dostępne'
            className='flex items-center justify-center w-full h-[36px] px-2 py-3 rounded-full bg-[#119e00] text-white hover:bg-[#1f8014] ocus:bg-[#1f8014] transition-colors duration-300 '
        >
            <span className='flex items-center justify-center text-white'>
                <span className='inline-block w-[24px] h-[24px]'>
                    <MdOutlineAddShoppingCart className='w-full h-full stroke-[0px]' />
                </span>

                <span className='flex flex-col'>
                    <span className='whitespace-nowrap'>Dodaj dostępne</span>
                </span>
            </span>
        </button>

    )
}

export default AddAllAccessibleBtn