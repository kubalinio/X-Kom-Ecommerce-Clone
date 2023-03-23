'use client'

// Redux i React Query
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from 'react-redux'
import { store } from '@/store'

interface Props {
    children?: ReactNode
}

const queryClient = new QueryClient()

const Providers = ({ children }: Props) => (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </Provider>
)


export default Providers