import Link from "next/link"
import { ReactNode } from "react"

type BtnProps = {
    children: ReactNode
    slug: string
    onClick?: () => void
}

export const ButtonOutlined = ({ children, slug, onClick }: BtnProps) => {
    return (
        <Link
            onClick={() => onClick!()}
            href={`/${slug}`}
            className='inline-flex items-center justify-center h-10 lg:h-8 min-h-[40px] lg:min-h-[32px] rounded-full w-full bg-white border border-[#0082fa] py-[10px] px-4 text-[#0082fa] text-center select-none hover:bg-[#0070CC] hover:text-white active:text-white active:bg-[#00407a] transition-colors duration-200'
        >
            {children}
        </Link>
    )
}