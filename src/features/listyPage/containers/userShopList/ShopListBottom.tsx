import Image from 'next/image'

import ShopIcon from '../../../../../public/listShoping.svg'

const ListItemsData = [
  {
    number: 1,
    title: 'Dodaj produkt do koszyka i zapisz jako listę',
    text: 'Zapisuj interesujące Cię produkty na później, nie trać czasu na wyszukiwanie ich kolejny raz.',
  },
  {
    number: 2,
    title: 'Twórz tyle list, ile tylko potrzebujesz',
    text: 'Możesz stworzyć dowolną liczbę list zakupowych. Zapisuj zestawy komputerowe, pomysły na prezent czy propozycje dla znajomych.',
  },
  {
    number: 3,
    title: 'Udostępniaj',
    text: 'Chcesz doradzić rodzinie albo zapytać znajomych o opinię? Podziel się swoją listą, zamiast wysyłać każdy link osobno.',
  },
]

export const ShopListBottom = ({ isFetched }: { isFetched: boolean }) => {
  return isFetched ? (
    <div className="mt-8 border-t border-[#ddd] pt-8 md:mb-0 ">
      <h2 title="Jak korzystać z listy?" className="mb-4 text-lg md:mb-4">
        Jak korzystać z listy?
      </h2>

      <div className="md:flex md:flex-row">
        {ListItemsData.map((item) => (
          <div key={item.text + item.number} className="flex md:mr-6 md:w-1/3 md:max-w-[250px] md:last:mr-0">
            <h2 className="ml-3 mr-4 text-base md:text-sm">{item.number}.</h2>

            <div className="mb-4 md:mb-0">
              <h3 title={item.title} className="mb-1 text-base md:mb-0 md:text-sm">
                {item.title}
              </h3>
              <p className="text-sm text-[#4d4d4d]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full pr-6 md:w-3/5 lg:w-3/5">
          <div className="mb-8 md:mb-0">
            <h2 title="Jak korzystać z listy?" className="mb-4 text-lg md:mb-6">
              Jak korzystać z listy?
            </h2>

            {/* List */}
            <div>
              {ListItemsData.map((item) => (
                <div key={item.text + item.number} className="flex">
                  <h2 className="ml-3 mr-4 text-base md:text-sm">{item.number}.</h2>
                  <div className="mb-4 md:mb-8">
                    <h3 title={item.title} className="mb-1 text-base md:mb-0 md:text-sm">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4d4d4d]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IMG  */}
        <div className="w-full pr-6 max-md:text-center md:flex md:w-2/5 md:items-center md:justify-end lg:w-2/5 ">
          <span className="inline-block h-auto w-[286px] max-w-full lg:w-[360px]">
            <Image src={ShopIcon} alt="shop Image" className="h-full w-full" />
          </span>
        </div>
      </div>
    </div>
  )
}
