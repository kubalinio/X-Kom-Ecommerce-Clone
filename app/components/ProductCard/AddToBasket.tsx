'use client'

import { addToBasket, getTotals } from "@/app/store/basketSlice"
import { Product } from "@/app/typings"
import { useEffect, useState } from "react"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { useDispatch } from "react-redux"
import ProductAddedToBasket from "../ProductAddedToBasket"

export const AddToBasket = ({ _id, slug, special, mainImage, title, price }: Product) => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const currentSlug = slug.current

    const addItemToBasket = () => {
        const quantity = 1

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
        <div className='hidden lg:group-hover:block absolute right-[10px] bottom-[10px] '>
            <div>
                <div className='relative'>
                    <button
                        onClick={addItemToBasket}
                        className='flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#119e00] text-[#119e00] hover:bg-[#109e00] hover:text-white focus:bg-[#1f8014] focus:text-white transition duration-300 '>
                        <span className='w-5 h-5'>
                            <MdOutlineAddShoppingCart className='w-full h-full' />
                        </span>
                    </button>
                </div>
            </div>

            {/* Modal */}

            {!showModal ? '' : (
                <ProductAddedToBasket title={title} price={price} mainImage={mainImage} closeModal={() => setShowModal(false)} showed={showModal} />
            )}

        </div>
    )
}