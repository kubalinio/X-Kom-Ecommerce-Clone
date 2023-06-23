/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'

type Props = {
  changeQuantity: (newQuantity: number) => void
  basketQuantity?: number
}

export const QuantityBasketProduct = ({ changeQuantity, basketQuantity }: Props) => {
  const [quantity, setQuantity] = useState(basketQuantity || 1)
  const [isOpen, setIsOpen] = useState(false)

  const valueQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const handleNewQuantity = (newQuantity: number) => {
    setQuantity(newQuantity)

    if (quantity !== newQuantity) {
      changeQuantity(newQuantity)
    }
  }

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'} h-[32px] w-[56px] max-w-full cursor-pointer text-center`}
    >
      <div className="relative h-[32px] w-[56px] rounded-[inherit]">
        {/* Control */}
        <div className="relative table h-[inherit] w-full rounded-[inherit] border border-[#ddd] bg-white">
          <span>
            <div className="absolute inset-0 bottom-auto top-1/2 -translate-y-1/2 px-4">
              <span className="w-full">{quantity}</span>
            </div>
          </span>
        </div>

        {/* Expanded Quantities Dropdown*/}
        {isOpen ? (
          <div className="absolute left-0 right-0 top-full z-[3] border border-[#ddd] bg-white">
            <div>
              {valueQuantities.map((quantity) => (
                <div
                  key={'Quantities' + quantity}
                  onClick={() => handleNewQuantity(quantity)}
                  className="bg-white px-4 py-2 hover:bg-[#ddd]"
                >
                  {quantity}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
