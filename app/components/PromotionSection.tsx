'use client'

import Image from "next/image"
import Link from "next/link"
import { SectionOverlay } from "./SectionOverlay"



const promotionData = {
    heading: 'Promocje',
    slug: 'promocje',
    promotions: [
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        },
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        },
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        },
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        },
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        },
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        },
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        },
        {
            heading: 'Odkryj nowe procesory AMD Ryzen serii 7000X3D z technologią AMD 3D V‑Cache™',
            image: 'https://cdn.x-kom.pl/i/img/promotions-list/320x240,,63fe0f93c8f69-x-kom-promocje-miniatura-800x600px.jpg',
            slug: '',
            title: 'Łącząc technologię AMD 3D V-Cache™ z procesorami AMD Ryzen serii 7000X3D, zyskujesz ogromny wzrost wydajności w grach.'
        }]
}

const Card = ({ heading, image, slug, title }) => {

    return (
        < div className='block w-[250px] lg:w-full xl:w-full' >
            <div className='h-full py-2'>
                <Link href={`/${slug}`}>
                    <div className='flex items-center justify-center mt-[2px] rounded-lg shadow-xCom overflow-hidden'>
                        <span className='inline-flex items-center justify-center w-[284px] h-[212px] overflow-hidden min-h-full py-3'>
                            <Image
                                src={`${image}`}
                                width={253}
                                height={212}
                                alt={`${heading}`}
                                loading='lazy'
                                className='object-cover w-full h-full'
                            />
                        </span>
                    </div>
                </Link>


                <Link href={`${slug}`} className='block mt-4 ml-1'>
                    <h3 className='text-xl leading-6 font-bold min-h-[48px] max-w-[250px]'>
                        <span className='max-h-[48px]'>
                            <span className='w-full overflow-hidden text-ellipsis line-clamp-2'
                            >
                                {heading}
                            </span>
                        </span>
                    </h3>
                </Link>

                <div className='my-1 text-[#4d4d4d] whitespace-nowrap line-clamp-1 text-ellipsis'>
                    {title}
                </div>

            </div>
        </div >)
}


export const PromotionSection = () => {

    const { promotions } = promotionData

    return (
        <SectionOverlay heading={promotionData.heading} slugToAll={promotionData.slug} >

            {promotions.map(promo => (
                <Card key={promo.slug} heading={promo.heading} image={promo.image} slug={promo.slug} title={promo.title} />
            ))}

        </SectionOverlay>
    )
}



