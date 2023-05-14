'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import ReturnBtn from './components/ReturnBtn'
import { NeedHelpInfo } from '../components/UserShopList/NeedHelpInfo'
import ListHeader from './components/ListHeader'
import { PurchaseList } from '@/types/typings'
import ProductsContainer from './components/ProductsContainer'
import EmptyList from './components/EmptyList'
import LoadingSkelleton from '../../koszyk/components/LoadingSkelleton'



type Props = {
    params: {
        slug: string
    }
}



const fetchDetails = async (slug: string) => {
    const response = await axios.get(`/api/purchaseLists/${slug}`)

    return response.data
}

const fetchProductsDetailFromCms = async (productsId: string[]) => {
    const response = await axios.post('/api/purchaseLists/fetchProductFromCms', {
        productsId: productsId
    })
    return response.data
}

const DetailListSection = (url: Props) => {
   

    const { data, isLoading, isFetching, status } = useQuery<PurchaseList[]>({
        queryFn: () => fetchDetails(url.params.slug),
        queryKey: ['detail-list'],
        refetchOnWindowFocus: false,
        
        onSuccess: (data) => {
            
        }
    })
    
   const details = data?.find((element) => element === element)
 
    return (
        
        <section className='relative w-full sm:px-2 md:px-3 lg:px-4 lg:w-3/4 lg:border-l lg:border-[#ddd]'>
            {isLoading || isFetching ? <LoadingSkelleton/> :
            <div className='bg:pl-2 lg:pl-4'>
                <ReturnBtn />

                <div>
                    {/* Notification */}
                    <div></div>

                    {/* List Header */}
                    <ListHeader 
                        listId={details?.Id} 
                        updateAt={details?.updateAt} 
                        name={details?.Name}
                        />

                    {/* Lists Container */}
                    { 
                    details?.ProductItems?.length! > 0 ? 
                        
                       <ProductsContainer details={details} /> : 
                        <EmptyList />  
                    }

                </div>

                <div className='max-lg:hidden'>
                    <NeedHelpInfo />
                </div>
            </div>
}
        </section>
    )
}

export default DetailListSection



// const { data, isLoading: isLoadingProducts, isFetching: isFetchingProducts } = useQuery({
    //     queryFn: () => fetchProductsDetailFromCms(productsId),
    //     queryKey: ['detail-product-in-fav-list'],
    //     enabled: fetchProducts,
    //     cacheTime: 0,

        // staleTime: 5 * (60 * 1000), // 5 mins
        // cacheTime: 10 * (60 * 1000), // 10 mins
    //     onSuccess(data) {
    //         setFetchProducts(false)
    //         console.log(data)
    //     },

    // })
    
    // if (isLoadingProducts && isFetchingProducts && !data) return <div>Loading..</div>