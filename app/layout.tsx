import './globals.css'


import { Lato } from '@next/font/google'
import { Header } from './components/Header/Header'
import Footer from './components/Footer'
import Providers from './auth/Providers'


const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ["300", "400", "700", "900"]
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

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
