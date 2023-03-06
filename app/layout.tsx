import './globals.css'
import { Lato } from '@next/font/google'
import { Nav } from './components/Nav'
import QueryWrapper from './auth/QueryWrapper'


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
    <html lang="pl" className={`${lato.variable}`}>

      <head />
      <body className={` bg-white scroll-show`}>
        <QueryWrapper>

          <Nav />
          {/* Category Buttons ? (MAYBE) */}
          {children}
          {/* Footer */}
        </QueryWrapper>




      </body>
      <div id='react-portals' ></div>
    </html>
  )
}
