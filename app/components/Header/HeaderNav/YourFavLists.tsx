'use client'


import Link from "next/link";
import { ReactNode } from "react"
import { MdOutlineFavoriteBorder } from "react-icons/md";


const Icon = ({ icon }: { icon: ReactNode }) => <span className="flex items-center justify-center w-full h-full text-gray-700">{icon}</span>;

const favItem = {
    name: 'Twoje listy',
    icon: <MdOutlineFavoriteBorder />,
    slug: 'listy'
}

type Props = {
    isScrollDown: boolean

}

export const YourFavLists = ({ isScrollDown }: Props) => {


    return (
        <>
            <div
                className={`relative flex h-12 md:h-16 z-10`}>

                <div className='flex justify-center items-center min-w-[64px] md:min-w-[88px] cursor-pointer' >

                    <Link href='/listy' className="flex flex-col items-center justify-center h-full" >
                        <div className="relative flex items-center text-2xl 2xl:text-3xl w-7 h-7 md:w-8 md:h-8" >

                            <Icon icon={favItem.icon} />

                        </div>

                        <span className={`${!isScrollDown ? 'lg:scale-100 lg:opacity-100 lg:translate-y-0' : 'lg:scale-0 lg:opacity-0 lg:translate-y-[-20px] lg:h-0 '} transition-all duration-500 text-[10px] whitespace-nowrap mt-1`}>{favItem.name}</span>

                    </Link>

                </div>
            </div>
        </>

    )
}


