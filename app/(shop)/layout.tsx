
import './globals.css'

import { Lato } from '@next/font/google'
import { Header } from '../components/Header/Header'

import Providers from '../auth/Providers'
import { ReactNode } from 'react'
import { Footer } from '../components/Footer'


const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ["300", "400", "700", "900"]
})

const RootLayout = ({ children }: { children: ReactNode }) => {

  return (
    <html lang="pl" className={`${lato.variable} font-lato`}>
      <head />

      <body className='bg-white'>
        <Providers>
          <Header />
          {/* Category Buttons ? (MAYBE) */}
          {children}
          <Footer />
          <div id='react-portals' ></div>
        </Providers>
      </body>

    </html>
  )
}

export default RootLayout