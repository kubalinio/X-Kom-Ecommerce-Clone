'use client'

import { FC, useEffect, useState } from 'react'

import { BasketFeed } from '@/features/shared/components/BasketFeed'
import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from '@/features/shared/components/DrawerModal'
import { ExtendedBasketItem } from '@/types/db'

interface BasketDrawerProps {
    onClick: () => void
    basketName: string
    totalPrice: number
    productCount: number
    products: ExtendedBasketItem[]
    showDrawer: boolean
}

const BasketDrawer: FC<BasketDrawerProps> = ({ onClick, basketName, productCount, products, totalPrice, showDrawer }) => {
    const [openDrawer, setOpenDrawer] = useState(false)

    useEffect(() => {
        if (showDrawer) {
            setOpenDrawer(true)

        } else {
            setOpenDrawer(false)
        }
    }, [showDrawer])

    return (
        <DrawerContainer close={() => onClick()} openDrawer={openDrawer} direction={'right'}>
            <DrawerModal>
                <DrawerHeader
                    name={basketName}
                    closeDrawer={() => onClick()}
                    basketQuantity={productCount}
                />

                {/* Tylko Conterner 1 Div */}
                <DrawerBody>
                    <BasketFeed
                        totalPrice={totalPrice}
                        basketQuantity={productCount}
                        // onClick={() => setIsHover(false)}
                        onClick={() => onClick()}
                        products={products}
                    />
                </DrawerBody>
            </DrawerModal>

        </DrawerContainer>
    )
}

export default BasketDrawer