'use client'

// Redux i React Query
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from 'react-redux'
import { persistor, store } from '@/store'
import { PersistGate } from "redux-persist/integration/react"

interface Props {
    children?: ReactNode
}

const queryClient = new QueryClient()

const Providers = ({ children }: Props) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >

            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>

        </PersistGate>
    </Provider>
)


export default Providers