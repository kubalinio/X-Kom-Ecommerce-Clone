import Link from 'next/link'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

const ReturnBtn = () => {
  return (
    <Link
      href="/listy"
      title="Pokaż wszystkie listy"
      className="mb-10 inline-flex h-10 w-auto min-w-[96px] items-center justify-center rounded-full bg-[#ebebeb] pl-4 pr-5 text-center text-[#707070] transition-colors duration-200 hover:bg-[#ddd]"
    >
      <span className="mr-4 inline-block h-6 w-6 overflow-hidden ">
        <MdOutlineKeyboardArrowLeft className="h-full w-full text-2xl" />
      </span>
      <span>Pokaż wszystkie listy</span>
    </Link>
  )
}

export default ReturnBtn
