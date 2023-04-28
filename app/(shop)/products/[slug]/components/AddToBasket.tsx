import React, { useEffect, useState } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToBasket, getTotals } from '@/app/store/basketSlice';
import { Product } from '@/app/typings';
import ProductAddedToBasket from '@/app/components/ProductAddedToBasket';

type Props = {
    product: Product,
    quantity: number
}

const AddToBasket = ({ product, quantity }: Props) => {
    const [showModal, setShowModal] = useState(false)
    // console.log(product)
    const { _id, slug, special, mainImage, title, price } = product

    const dispatch = useDispatch()

    const currentSlug = slug.current

    const addItemToBasket = () => {

        const product = {
            id: _id, title, price, mainImage, quantity, slug: currentSlug, special
        }

        dispatch(addToBasket(product))
        dispatch(getTotals())
        setShowModal(true)
    }


    useEffect(() => {

        if (showModal) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = '17px'
        } else {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }

    }, [showModal])

    return (
        <>
            <div>
                <button
                    onClick={addItemToBasket}
                    className='flex items-center justify-center w-full h-[36px] px-2 rounded-full bg-[#119e00] text-white hover:bg-[#1f8014]  focus:bg-[#1f8014] transition-colors duration-300 '
                    title='Dodaj do koszyka'
                >
                    <span className='flex items-center justify-center text-white'>
                        <span className='inline-block w-[24px] h-[24px]'>
                            <MdOutlineAddShoppingCart className='w-full h-full' />
                        </span>

                        <span>Dodaj do koszyka</span>
                    </span>
                </button>
            </div>

            {!showModal ? '' : (
                <ProductAddedToBasket showed={showModal} title={title} price={price} mainImage={mainImage} closeModal={() => setShowModal(false)} />
            )}

        </>
    )
}

export default AddToBasket