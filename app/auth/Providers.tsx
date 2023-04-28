'use client'

// Redux i React Query
import React, { ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from 'react-redux'
import { persistor, store } from '@/app/store'
import { PersistGate } from "redux-persist/integration/react"

interface Props {
    children?: ReactNode
}


const Providers = ({ children }: Props) => {
    const [queryClient] = React.useState(() => new QueryClient())


    return (

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >

                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>

            </PersistGate>
        </Provider>
    )
}


export default Providers