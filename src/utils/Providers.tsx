'use client'

// Redux i React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/store'

interface Props {
  children?: ReactNode
}

const Providers = ({ children }: Props) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default Providers
