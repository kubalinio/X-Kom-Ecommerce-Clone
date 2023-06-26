import { ContestSection, PageNavigation, PresaleSection, PromotionsSection } from './components'

const PageTitle = () => {
  return (
    <div className="mb-4">
      <h1 className="mb-2 mt-4 text-3xl/8 font-bold md:mb-2 md:mt-5 md:text-4xl/10">
        Promocje, konkursy i kody rabatowe
      </h1>
      <p className="text-base/5 text-[#707070] md:text-lg/6">
        Tutaj znajdziesz informacje o wszystkich promocjach, konkursach, przedsprzedażach i kodach rabatowych dostępnych
        w naszym sklepie. Pamiętaj, że to okazje, których nie znajdziesz w standardowej ofercie. Dzięki nim kupisz
        najnowszy sprzęt w atrakcyjnych cenach.
      </p>
    </div>
  )
}

const PromotionPage = () => {
  return (
    <main className="mx-auto w-[calc(100%-32px)] max-w-full sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]">
      <div className="relative mb-8 h-full">
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
