import './globals.css'

import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header/Header'
import Providers from '../../utils/Providers'

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'X Clone - Clone Ecommerce Site x-kom.pl',
  icons: {
    icon: {
      url: '/favicon.ico',
      sizes: 'any',
    },
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pl" className={`${lato.variable} font-lato`}>
      <body className="bg-white font-lato">
        <Providers>
          <Header />
          {/* Category Buttons ? (MAYBE) */}
          {children}
          <Footer />
          <div id="react-portals"></div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
