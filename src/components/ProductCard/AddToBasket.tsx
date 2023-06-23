'use client'

import { useEffect, useState } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { addToBasket, getTotals } from '@/store/basketSlice'
import { Image as ImageData, Slug } from '@/types/typings'

import ProductAddedToBasket from '../ProductAddedToBasket'

type Props = {
  _id?: string
  slug?: Slug
  special?: string
  mainImage: ImageData
  title: string
  price: number

  className?: string
}

export const AddToBasket = ({ _id, slug, special, mainImage, title, price, className }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const currentSlug = slug?.current

  const addItemToBasket = () => {
    const quantity = 1

    const product = {
      _id,
      title,
      price,
      mainImage,
      quantity,
      slug: currentSlug,
      special,
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
    <div className={className}>
      <div>
        <div className="relative">
          <button
            onClick={addItemToBasket}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#119e00] bg-white text-[#119e00] transition duration-300 hover:bg-[#109e00] hover:text-white focus:bg-[#1f8014] focus:text-white "
          >
            <span className="h-5 w-5">
              <MdOutlineAddShoppingCart className="h-full w-full" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}

      {!showModal ? (
        ''
      ) : (
        <ProductAddedToBasket
          title={title}
          price={price}
          mainImage={mainImage}
          closeModal={() => setShowModal(false)}
          showed={showModal}
        />
      )}
    </div>
  )
}
