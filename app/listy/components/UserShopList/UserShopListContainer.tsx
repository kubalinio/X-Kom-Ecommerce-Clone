'use client'

import Link from 'next/link'

import { MdKeyboardArrowLeft } from 'react-icons/md'

import { ReactNode } from 'react'
import { NeedHelpInfo } from './NeedHelpInfo'
import { ShopListHead } from './ShopListHead'
import { ShopListBottom } from './ShopListBottom'
import { ReturnButtonMobile } from './ReturnBtnMobile'

const ShopListBody = () => {
    return (
        <div>ListBody</div>
    )
}


// Need Help

type Props = {}

export const UserShopList = (props: Props) => {
    return (
        <div className='lg:pl-2'>
            {/* Back konto */}
            <ReturnButtonMobile link='konto' title='Wróć' />

            {/* Button to Add List React Portal*/}
            <ShopListHead />

            <div className='min-h-[32px]'>{/* Notification */}</div>

            {/* Created List Dynamic with fav products */}
            {/* <ListBody /> */}

            {/* How use lists */}
            <ShopListBottom />

            {/* Need Help ? */}
            <div className='max-lg:hidden'>
                <NeedHelpInfo />
            </div>
        </div>
    )
}

