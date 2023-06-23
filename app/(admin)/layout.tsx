// Admin

import '../(shop)/globals.css'

import { Lato } from 'next/font/google'
import { ReactNode } from 'react'

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pl" className={`${lato.variable} font-lato`}>
      <head />

      <body className="bg-white">
        {/* Category Buttons ? (MAYBE) */}
        {children}
      </body>
    </html>
  )
}

export default RootLayout
