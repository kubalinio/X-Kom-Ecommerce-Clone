import React from 'react'
import { ContestSection, PageNavigation, PresaleSection, PromotionsSection } from './components'



const PageTitle = () => {
    return (
        <div className="mb-4">
            <h1 className="mt-4 mb-2 font-bold text-3xl/8 md:text-4xl/10 md:mt-5 md:mb-2">Promocje, konkursy i kody rabatowe</h1>
            <p className="text-base/5 md:text-lg/6 text-[#707070]">
                Tutaj znajdziesz informacje o wszystkich promocjach, konkursach, przedsprzedażach i kodach rabatowych dostępnych w naszym sklepie. Pamiętaj, że to okazje, których nie znajdziesz w standardowej ofercie. Dzięki nim kupisz najnowszy sprzęt w atrakcyjnych cenach.
            </p>
        </div>
    )
}

const PromotionPage = () => {
    return (
        <main className='max-w-full mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px]'>
            <div className='relative h-full mb-8'>
                {/* Components */}
                {/* #1 BreadCrumbs */}

                <PageTitle />

                <PageNavigation />

                <PromotionsSection />
                <PresaleSection />
                <ContestSection />

            </div>
        </main>
    )
}

export default PromotionPage