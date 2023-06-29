import Link from 'next/link'
import { ReactNode } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const IconNavUser = ({ icon }: { icon: ReactNode }) => (
  <span className="inline-block h-6 w-6 text-2xl md:mr-3">{icon}</span>
)

export const ReturnButtonMobile = ({ link, title }: { link?: string; title: string }) => {
  return (
    <Link
      href={`/${link}`}
      title={title}
      className="mb-8 inline-flex h-10 min-h-[auto] w-auto min-w-[96px] items-center justify-center rounded-full bg-[#ebebeb] pl-4 pr-5 text-center text-[#4d4d4d] transition-colors duration-200 active:bg-gray-300 md:mb-10 lg:hidden"
    >
      <IconNavUser icon={<MdKeyboardArrowLeft />} />
      <span>{title}</span>
    </Link>
  )
}
