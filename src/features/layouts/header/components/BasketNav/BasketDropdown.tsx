import { FC } from 'react'

import { BasketFeed } from '@/features/shared/components/BasketFeed'
import { ExtendedBasketItem } from '@/types/db'

import { NavDropdown } from '../NavDropdown'

interface BasketDropdownProps {
    productCount: number
    totalPrice: number
    products: ExtendedBasketItem[]
    onClick: () => void
}

export const BasketDropdown: FC<BasketDropdownProps> = ({ productCount, products, totalPrice, onClick }) => {
    return (
        <NavDropdown last={true}>
            <BasketFeed
                onClick={() => onClick()}
                basketQuantity={productCount}
                totalPrice={totalPrice}
                products={products}
            />
        </NavDropdown>
    )
}