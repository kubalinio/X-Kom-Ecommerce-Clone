'use client'
// Main Component to adding product to basket
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

import { basketProductRequest } from '@/lib/validators/basketProduct'
import { useBasketToken } from '@/store/basketToken'

import ProductAddedToBasket from './ProductAddedToBasket'

type Props = {
  productId: string
  name: string
  price: number
  photo: string
  className: string
  count: number
  comVariant: 'ProductCard' | 'DetailPage'
}

export const AddToBasket = ({ count, name, photo, price, productId, comVariant, className }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const queryClient = useQueryClient()
  const updateBasketToken = useBasketToken((state) => state.setBasketToken)

  const { mutate: addProductToBasket, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: basketProductRequest = {
        productId,
        count,
      }
      const { data } = await axios.post(`/api/baskets`, payload)
      return data
    },
    onError: (err) => {
      console.log(err)
    },
    onSuccess: ({ basketToken }) => {
      updateBasketToken(basketToken)
      setShowModal(true)
      queryClient.invalidateQueries(['basketProducts'])
    },
  })

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
      {comVariant === 'ProductCard' ? (
        <div>
          <div className="relative">
            <button
              disabled={isLoading}
              onClick={() => addProductToBasket()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#119e00] bg-white text-[#119e00] transition duration-300 hover:bg-[#109e00] hover:text-white focus:bg-[#1f8014] focus:text-white "
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <span className="h-5 w-5">
                  <MdOutlineAddShoppingCart className="h-full w-full" />
                </span>
              )}
            </button>
          </div>
        </div>
      ) : comVariant === 'DetailPage' ? (
        // Add to basket from detail page
        // Difference: custom count in detail product page
        <div>
          <button
            disabled={isLoading}
            onClick={() => addProductToBasket()}
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
      ) : null}

      {/* Modal */}
      {!showModal ? (
        ''
      ) : (
        <ProductAddedToBasket
          title={name}
          price={price}
          mainImage={photo}
          closeModal={() => setShowModal(false)}
          showed={showModal}
        />
      )}
    </div>
  )
}
