'use client'

import { NeedHelpInfo } from './NeedHelpInfo'
import { ShopListHead } from './ShopListHead'
import { ShopListBottom } from './ShopListBottom'
import { ReturnButtonMobile } from './ReturnBtnMobile'
import ShopListBody from './ShopListBody'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { PurchaseList } from '@prisma/client'
import { useEffect, useState } from 'react'

// Fetch lists 
// when create list fetch by slug look post it Project

const fetchAllList = async (listIds: string[]) => {

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/purchaseLists/getPurchaseLists`, {
        ids: listIds
    })
    return response.data
}


export const UserShopList = () => {

    const purchaseLists = useSelector((state: RootState) => state.purchaseList)
    const listIds = purchaseLists.purchaseListItems.map(item => item.id)

    const { data, error, isLoading } = useQuery({
        queryFn: () => fetchAllList(listIds),
        queryKey: ['purchaseLists'],
        enabled: !!listIds
    })
    if (error) return (<div>error</div>)
    if (isLoading) return (<div>Loading...</div>)

    return (
        <div className='lg:pl-2'>
            {/* Back konto */}
            <ReturnButtonMobile link='konto' title='Wróć' />

            {/* Button to Add List React Portal*/}
            <ShopListHead listsLength={data?.length} />

            <div className='min-h-[32px]'>{/* Notification */}</div>

            {/* Created List Dynamic with fav products */}
            <ShopListBody lists={data!} />

            {/* How use lists */}
            {data?.length! > 0 ?
                '' :
                <ShopListBottom />}

            {/* Need Help ? */}
            <div className='max-lg:hidden'>
                <NeedHelpInfo />
            </div>
        </div>

    )
}

