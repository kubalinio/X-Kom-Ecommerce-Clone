import Image from "next/image"
import blikImg from '../../../public/images/footerBanner/blikImage.png'
import fedexImg from '../../../public/images/footerBanner/fedexImage.png'
import inpostImg from '../../../public/images/footerBanner/inpostImage.png'
import upsImg from '../../../public/images/footerBanner/upsImage.png'
import visaImg from '../../../public/images/footerBanner/visaImage.png'

const companiesData = [
    {
        title: 'Blik',
        image: blikImg
    },
    {
        title: 'Fedex',
        image: fedexImg
    },
    {
        title: 'Inpost',
        image: inpostImg
    },
    {
        title: 'UPS',
        image: upsImg
    },
    {
        title: 'Visa',
        image: visaImg
    },
]

const FooterCompanies = () => {
    return (

        <div className='flex flex-col'>

            <div className='flex flex-wrap justify-center mb-6'>
                {companiesData.map(companie => (
                    <span key={companie.title + Math.random()} className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                        <Image
                            src={companie.image}
                            width={36}
                            height={36}
                            alt={companie.title}
                            loading='lazy'
                            title={companie.title}
                            className='inline-block w-auto h-auto max-w-full max-h-full'
                        />
                    </span>
                ))}

            </div>

            <div className='text-center text-[#4d4d4d] mx-auto mb-11 max-w-full w-[calc(100%-32px)] md:w-[calc(100%-48px)] md:mb-4 lg:mb-7 lg:w-[calc(100%-64px)] lg:max-w-[1156px]'>
                &copy; x-kom Clone 2023-2023
            </div>
        </div>

    )
}

export default FooterCompanies