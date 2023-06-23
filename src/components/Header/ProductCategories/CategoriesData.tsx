import { StaticImageData } from 'next/image'
import { AiOutlineLaptop, AiOutlinePrinter } from 'react-icons/ai'
import { CgSmartphoneChip } from 'react-icons/cg'
import { CiPercent } from 'react-icons/ci'
import { IoGameControllerOutline, IoTvOutline } from 'react-icons/io5'
import { MdOutlineCable } from 'react-icons/md'
import { SiHomeassistant } from 'react-icons/si'
import { SlScreenSmartphone } from 'react-icons/sl'

import CategoriesTrendsImage from '../../../../public/CategoriesTrendsImage.jpg'
import CategorieBannerAcs from '../../../../src/assets/categorieBanners/nav_banner_accessories.png'
import CategorieBannerComponents from '../../../../src/assets/categorieBanners/nav_banner_components.png'
import CategorieBannerComputer from '../../../../src/assets/categorieBanners/nav_banner_computer.png'
import CategorieBannerDevices from '../../../../src/assets/categorieBanners/nav_banner_devices.png'
import CategorieBannerGames from '../../../../src/assets/categorieBanners/nav_banner_games.png'
import CategorieBannerPhones from '../../../../src/assets/categorieBanners/nav_banner_phones.png'
import CategorieBannerSmart from '../../../../src/assets/categorieBanners/nav_banner_smarthome.png'
import CategorieBannerTV from '../../../../src/assets/categorieBanners/nav_banner_tv.png'

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
    icon: <AiOutlineLaptop className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerComputer,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'Smartfony i smartwatche',
    icon: <SlScreenSmartphone className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerPhones,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'Gaming i streaming',
    icon: <IoGameControllerOutline className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerGames,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'Podzespoły komputerowe',
    icon: <CgSmartphoneChip className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerComponents,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'Urządzenia peryferyjne',
    icon: <AiOutlinePrinter className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerDevices,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'TV i audio',
    icon: <IoTvOutline className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerTV,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'Smarthome i lifestyle',
    icon: <SiHomeassistant className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerSmart,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'Akcesoria',
    icon: <MdOutlineCable className="h-full w-full" />,
    slug: 'products',
    recommendProduct: CategorieBannerAcs,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
  {
    name: 'Trendy, promocje i nowości',
    icon: <CiPercent className="h-full w-full" />,
    slug: 'promocje',
    recommendProduct: CategoriesTrendsImage,
    subMenu: [
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
      {
        name: 'Polecany produkt',
      },
    ],
  },
]
