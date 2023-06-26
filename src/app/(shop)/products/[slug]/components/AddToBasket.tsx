import { useEffect, useState } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import ProductAddedToBasket from '@/components/ProductAddedToBasket'
import { addToBasket, getTotals } from '@/store/basketSlice'
import { Product } from '@/types/typings'

type Props = {
  product: Product
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
    <>
      <div>
        <button
          onClick={addItemToBasket}
          className="flex h-[36px] w-full items-center justify-center rounded-full bg-[#119e00] px-2 text-white transition-colors  duration-300 hover:bg-[#1f8014] focus:bg-[#1f8014] "
          title="Dodaj do koszyka"
        >
          <span className="flex items-center justify-center text-white">
            <span className="inline-block h-[24px] w-[24px]">
              <MdOutlineAddShoppingCart className="h-full w-full" />
            </span>

            <span>Dodaj do koszyka</span>
          </span>
        </button>
      </div>

      {!showModal ? (
        ''
      ) : (
        <ProductAddedToBasket
          showed={showModal}
          title={title}
          price={price}
          mainImage={mainImage}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default AddToBasket
