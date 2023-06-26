'use client'

import { Product } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

import { basketProductRequest } from '@/lib/validators/basketProduct'

import ProductAddedToBasket from '../ProductAddedToBasket'

type Props = {
  product: Product
  className: string
}

export const AddToBasket = ({ product, className }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const queryClient = useQueryClient()

  const { id, name, price, photo } = product
  const quantity = 1

  const { mutate: addProductToBasket } = useMutation({
    mutationFn: async () => {
      const payload: basketProductRequest = {
        productId: id,
        count: quantity,
      }

      const { data } = await axios.post(`/api/baskets`, payload)
      return data
    },
    onError: (err) => {
      console.log(err)
    },
    onSuccess: () => {
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
      <div>
        <div className="relative">
          <button
            onClick={() => addProductToBasket()}
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
