'use client'

import { usePathname } from 'next/navigation'
import FooterBasket from './FooterBasket'
import SaleMasterBox from './SaleMasterBox'
import FooterNavigation from './FooterNavigation'
import Newsletter from './Newsletter'
import MobileAppBox from './MobileAppBox'
import FooterExpandNav from './FooterExpandNav'
import FooterContact from './FooterContact'
import FooterCompanies from './FooterCompanies'

export type footerItem = {
    title: string;
    links: {
        name: string;
        slug: string;
    }[]
}

const footerItems: footerItem[] = [
    {
        title: 'Zamówienia',
        links: [
            {
                name: 'Dostawy',
                slug: ''
            },
            {
                name: 'Raty',
                slug: ''
            },
            {
                name: 'Leasing',
                slug: ''
            },
            {
                name: 'Ubezpieczenia',
                slug: ''
            },
            {
                name: 'TaxFree',
                slug: ''
            },
            {
                name: 'Montaż',
                slug: ''
            },
            {
                name: 'Zwroty i reklamacje',
                slug: ''
            },
            {
                name: 'Najczęściej zadawane pytania',
                slug: ''
            },
        ]
    },
    {
        title: 'Promocje i inspiracje',
        links: [
            {
                name: 'Wyprzedaż',
                slug: ''
            },
            {
                name: 'Gorący strzał',
                slug: ''
            },
            {
                name: 'Promocje',
                slug: ''
            },
            {
                name: 'Karty podarunkowe',
                slug: ''
            },
            {
                name: 'Poradniki',
                slug: ''
            },
            {
                name: 'Aktualności',
                slug: ''
            },
        ]
    },
    {
        title: 'x-kom',
        links: [
            {
                name: 'O nas',
                slug: ''
            },
            {
                name: 'Regulamin',
                slug: ''
            },
            {
                name: 'Polityka prywatności',
                slug: ''
            },
            {
                name: 'Polityka cookies',
                slug: ''
            },
            {
                name: 'Biura prasowe',
                slug: ''
            },
            {
                name: 'Zamówienia publiczne',
                slug: ''
            },
            {
                name: 'Współpraca B2B',
                slug: ''
            },
            {
                name: 'Współpraca marketingowa',
                slug: ''
            },
            {
                name: 'Geex',
                slug: ''
            },
            {
                name: 'Forum',
                slug: ''
            },
            {
                name: 'Kariera',
                slug: ''
            },
            {
                name: 'Kontakt',
                slug: ''
            },
            {
                name: 'Realizowane projekty',
                slug: ''
            },
        ]
    },

]

const FooterMain = () => (
    <footer>
        {/* Foot Layout page */}
        <div className='max-w-full w-[calc(100%-32px)] mx-auto md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]'>

            {/* Top Section Newsletter , Appmobile && Partner program */}
            <div className='flex flex-col mb-10 lg:flex-row lg:flex-wrap'>
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
                <div className='flex flex-col-reverse justify-between pb-[52px] md:flex-row' >
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
    </footer >
)


export const Footer = () => {
    const pathname = usePathname()

    return (
        <>
            {pathname === '/koszyk' ? (
                <FooterBasket />
            ) :
                (<FooterMain />)
            }

        </>
    )
}
