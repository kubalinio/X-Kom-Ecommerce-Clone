import Link from "next/link";
import { ReactNode } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const IconNavUser = ({ icon }: { icon: ReactNode }) => <span className='inline-block w-6 h-6 text-2xl md:mr-3'>{icon}</span>;

export const ReturnButtonMobile = ({ link, title }: { link: string, title: string }) => {
    return (
        <Link
            href={`/${link}`}
            title={title}
            className='inline-flex items-center justify-center bg-[#ebebeb] pr-5 pl-4 w-auto text-[#4d4d4d] text-center rounded-full min-w-[96px] h-10 min-h-[auto] mb-8 md:mb-10 lg:hidden active:bg-gray-300 transition-colors duration-200'
        >
            <IconNavUser icon={<MdKeyboardArrowLeft />} />
            <span>{title}</span>
        </Link >


    )
}