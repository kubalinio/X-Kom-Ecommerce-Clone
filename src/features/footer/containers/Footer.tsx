'use client'

import { usePathname } from 'next/navigation'

import FooterBasket from '../components/FooterBasket'
import FooterCompanies from '../components/FooterCompanies'
import FooterContact from '../components/FooterContact'
import FooterExpandNav from '../components/FooterExpandNav'
import FooterNavigation from '../components/FooterNavigation'
import MobileAppBox from '../components/MobileAppBox'
import Newsletter from '../components/Newsletter'
import SaleMasterBox from '../components/SaleMasterBox'
import { footerItems } from '../dataAccess/footerNavItems'

const FooterMain = () => {
  return (
    <footer>
      {/* Foot Layout page */}
      <div className="mx-auto w-[calc(100%-32px)] max-w-full pt-6 font-lato md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
        {/* Top Section Newsletter , Appmobile && Partner program */}
        <div className="mb-10 flex flex-col lg:flex-row lg:flex-wrap">
          {/* NewsLetter */}
          <Newsletter />
          {/* Mobile App Box */}
          <MobileAppBox />
          {/* Sales Master */}
          <SaleMasterBox />
        </div>

        {/* Bottom Section Orders, Promotion, x-kom, Contact */}
        <div>
          {/* Orders... */}
          <div className="flex flex-col-reverse justify-between pb-[52px] md:flex-row">
            {/* Orders ... */}
            <FooterExpandNav items={footerItems} />
            {/* Desktop/Tablet Navigation*/}
            <FooterNavigation items={footerItems} />

            <FooterContact />
          </div>

          {/* Companies.. */}
          <FooterCompanies />
        </div>
      </div>
    </footer>
  )
}

export const Footer = () => {
  const pathname = usePathname()

  return <>{pathname === '/koszyk' ? <FooterBasket /> : <FooterMain />}</>
}
