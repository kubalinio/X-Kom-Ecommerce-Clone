'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'


type Props = {
    params: {
        slug: string
    }
}

const fetchIdProductsFromList = async (listId: string) => {
    const response = await axios.post('/api/purchaseLists/productsInFavList', {
        purchaseListsId: listId
    })

    return response.data
}

const fetchProductsDetailFromCms = async (productsId: string[]) => {
    const response = await axios.post('/api/purchaseLists/fetchProductFromCms', {
        productsId: productsId
    })
    return response.data
}

const DetailListSection = (url: Props) => {
    const [productsId, setProductsId] = useState([])
    const [fetchProducts, setFetchProducts] = useState(false)

    const { isLoading, isFetching } = useQuery({
        queryFn: () => fetchIdProductsFromList(url.params.slug),
        queryKey: ['products-in-fav-list'],
        onSuccess: (data) => {
            setProductsId(data.map((item: { Id: string }) => item.Id))
            setFetchProducts(true)
        }
    })


    const { data, isLoading: isLoadingProducts, isFetching: isFetchingProducts } = useQuery({
        queryFn: () => fetchProductsDetailFromCms(productsId),
        queryKey: ['detail-product-in-fav-list'],
        enabled: fetchProducts,
        cacheTime: 0,

        // staleTime: 5 * (60 * 1000), // 5 mins
        // cacheTime: 10 * (60 * 1000), // 10 mins
        onSuccess(data) {
            setFetchProducts(false)
            console.log(data)
        },

    })

    if (isLoading && isFetching) return <div>Loading..</div>

    if (isLoadingProducts && isFetchingProducts && !data) return <div>Loading..</div>

    return (
        <section className='w-full sm:px-2 md:px-3 lg:px-4 lg:w-3/4 lg:border-l lg:border-[#ddd]'>
            <div>{data?.products?.map((product: { title: string }) => product.title)}</div>
        </section>
    )
}

export default DetailListSection