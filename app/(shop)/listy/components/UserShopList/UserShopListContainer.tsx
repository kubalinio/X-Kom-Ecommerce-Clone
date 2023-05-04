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
import { ReactNode, useEffect, useState } from 'react'

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

    const [listIds, setListIds] = useState<Array<string>>([])
    const [fetchList, setFetchList] = useState(false)

    useEffect(() => {

        if (purchaseLists.purchaseListItems.length > 0) {
            setFetchList(true)
            setListIds(purchaseLists.purchaseListItems.map(item => item.id))
        }

    }, [])


    const { data, error, isLoading, isFetching } = useQuery({
        queryFn: () => fetchAllList(listIds),
        queryKey: ['purchaseLists'],
        enabled: fetchList
    })
    if (error) return (<div>error</div>)
    if (isLoading && isFetching) return (<div>Loading...</div>)

    return (
        <div className='lg:pl-2'>
            {/* Back konto */}
            <ReturnButtonMobile link='konto' title='Wróć' />

            {/* Button to Add List React Portal*/}
            <ShopListHead listsLength={data?.length} />

            <div className='min-h-[32px]'>{/* Notification */}</div>

            {/* Created List Dynamic with fav products */}


            {/* How use lists */}
            {data ?
                <ShopListBody lists={data!} /> :
                <ShopListBottom />}

            {/* Need Help ? */}
            <div className='max-lg:hidden'>
                <NeedHelpInfo />
            </div>
        </div>

    )
}

