'use client'

// Redux i React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Providers = ({ children }: Props) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers
