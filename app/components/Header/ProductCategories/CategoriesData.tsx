import { StaticImageData } from "next/image"
import { AiOutlineLaptop, AiOutlinePrinter } from "react-icons/ai"
import { CgSmartphoneChip } from "react-icons/cg"
import { CiPercent } from "react-icons/ci"
import { IoGameControllerOutline, IoTvOutline } from "react-icons/io5"
import { MdOutlineCable } from "react-icons/md"
import { SiHomeassistant } from "react-icons/si"
import { SlScreenSmartphone } from "react-icons/sl"

import CategoriesTrendsImage from '../../../../public/CategoriesTrendsImage.jpg'

export type categorieMainProps = {
    name: string
    icon: JSX.Element
    slug: string
    recommendProduct: string | StaticImageData
    subMenu?: {
        name: string
    }[]

}

export const categorieItems: categorieMainProps[] = [
    {
        name: 'Laptop i komputer',
        icon: <AiOutlineLaptop className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Smartfony i smartwatche',
        icon: <SlScreenSmartphone className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Gaming i streaming',
        icon: <IoGameControllerOutline className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Podzespoły komputerowe',
        icon: <CgSmartphoneChip className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Urządzenia peryferyjne',
        icon: <AiOutlinePrinter className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'TV i audio',
        icon: <IoTvOutline className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Smarthome i lifestyle',
        icon: <SiHomeassistant className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Akcesoria',
        icon: <MdOutlineCable className='w-full h-full' />,
        slug: 'products',
        recommendProduct: 'https://cdn.x-kom.pl/i/img/banners/normal,,f3d6e95c84bf4302bc87f0dd15938c20.png?filters=trim',
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
    {
        name: 'Trendy, promocje i nowości',
        icon: <CiPercent className='w-full h-full' />,
        slug: 'promocje',
        recommendProduct: CategoriesTrendsImage,
        subMenu: [
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
            {
                name: 'Polecany produkt'
            },
        ]
    },
]