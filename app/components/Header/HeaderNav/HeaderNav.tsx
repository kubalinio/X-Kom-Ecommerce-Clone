'use client'

import useWindowDimensions from "@/app/hooks/useWindowDimensions"
import { HelpContact } from "./HelpContact"
import UserAccount from "./UserAccount"
import { YourFavLists } from "./YourFavLists"
import { BasketNav } from "../../Basket/Basket"

export type MenuItemsProps = {
    name: string
    icon: JSX.Element
    slug: string
    subMenu?: {
        popular?: {
            name: string
            slug: string
        }[],
        contact: {
            name: string
            icon: any
            slug: string
            workTime?: {
                days: string
                time: string
            }[]
        }[]
    }
}

type Props = {
    isScrollDown: boolean
}

export const HeaderNav = ({ isScrollDown }: Props) => {

    const { width } = useWindowDimensions()

    return (
        <div className='relative flex items-center'>

            <HelpContact isScrollDown={isScrollDown} width={width!} />

            <span className="hidden md:flex self-center border-r-[1px] border-gray-400 h-9 ml-2 mr-3 mb-1" />

            <UserAccount isScrollDown={isScrollDown} width={width!} />
            <YourFavLists isScrollDown={isScrollDown} />
            <BasketNav isScrollDown={isScrollDown} width={width!} />

        </div>
    )
}




   // const handleHoverNav = (width: number | undefined, num: number) => {
    //     if (width! < 1027) {
    //         return
    //     } else if (num === 0 || num === 1 || num === 3) {
    //         setActiveNav(num)
    //         setIsHover(true)
    //     } else {
    //         setIsHover(false)
    //     }
    // }

    // const handleActiveNav = (width: number | undefined, num: number, link: string) => {

    //     if (width! > 1027) {
    //         setIsModalShow(false)
    //         // Check better solution
    //         router.replace(`/${link}`)
    //     } else if (num === 0 || num === 1 || num === 3 && width! < 1027) {
    //         setActiveNav(num)
    //         setIsModalShow(true)
    //     } else {
    //         setIsModalShow(false)
    //         // Check better solution
    //         router.replace(`/${link}`)
    //     }
    // }

     // useEffect(() => {
    //     refPortal.current = document.body.querySelector<HTMLElement>('#react-portals')!;
    //     setMounted(true)

    // }, [])