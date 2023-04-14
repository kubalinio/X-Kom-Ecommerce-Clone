import React from 'react'
import { ContestSection, PageNavigation, PageTitle, PresaleSection, PromotionsSection } from './components'

const PromotionPage = () => {
    return (
        <main className='max-w-full mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px]'>
            <div className='mb-6'>
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