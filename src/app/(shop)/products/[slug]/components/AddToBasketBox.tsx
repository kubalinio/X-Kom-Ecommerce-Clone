'use client'
import { Product } from '@prisma/client'
import { FC, useState } from 'react'

import { AddToBasket } from '@/components/Basket/AddToBasket'
import { QuantityBasketProduct } from '@/components/features/basket/BasketProduct'

interface AddToBasketBoxProps {
  product: Product
}

export const AddToBasketBox: FC<AddToBasketBoxProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1)

  const handleNewQuantity = (newNumber: number) => {
    setQuantity(newNumber)
  }

  return (
    <div className="flex items-center pb-6 pt-4 md:p-4 md:pt-3">
      {/* Quantity */}
      <div className="mr-2">
        <QuantityBasketProduct changeQuantity={handleNewQuantity} />
      </div>

      {/* Add to Basket */}
      <div className="flex-grow">
        <AddToBasket
          name={product.name}
          photo={product.photo}
          price={product.price}
          productId={product.id}
          comVariant="DetailPage"
          count={quantity}
          className=""
        />
      </div>
    </div>
  )
}
