import Image from 'next/image'

import blikImg from '../../public/images/footerBanner/blikImage.png'
import fedexImg from '../../public/images/footerBanner/fedexImage.png'
import inpostImg from '../../public/images/footerBanner/inpostImage.png'
import upsImg from '../../public/images/footerBanner/upsImage.png'
import visaImg from '../../public/images/footerBanner/visaImage.png'

const companiesData = [
  {
    title: 'Blik',
    image: blikImg,
  },
  {
    title: 'Fedex',
    image: fedexImg,
  },
  {
    title: 'Inpost',
    image: inpostImg,
  },
  {
    title: 'UPS',
    image: upsImg,
  },
  {
    title: 'Visa',
    image: visaImg,
  },
]

const FooterCompanies = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-6 flex flex-wrap justify-center">
        {companiesData.map((companie) => (
          <span
            key={companie.title + Math.random()}
            className="inline-flex h-9 items-center justify-center px-2 max-md:mb-2 max-md:basis-1/5"
          >
            <Image
              src={companie.image}
              width={36}
              height={36}
              alt={companie.title}
              loading="lazy"
              title={companie.title}
              className="inline-block h-auto max-h-full w-auto max-w-full"
            />
          </span>
        ))}
      </div>

      <div className="mx-auto mb-11 w-[calc(100%-32px)] max-w-full text-center text-[#4d4d4d] md:mb-4 md:w-[calc(100%-48px)] lg:mb-7 lg:w-[calc(100%-64px)] lg:max-w-[1156px]">
        &copy; x-kom Clone 2023-2023
      </div>
    </div>
  )
}

export default FooterCompanies
