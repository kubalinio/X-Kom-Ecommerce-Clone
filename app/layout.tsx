import './globals.css'
import { Lato } from '@next/font/google'
import { Header } from './components/Header/Header'
import Footer from './components/Footer'
import Providers from './auth/Providers'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '300', '900'],
  variable: '--font-lato'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head />

      <body className={`bg-white ${lato.variable} font-lato`}>
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
