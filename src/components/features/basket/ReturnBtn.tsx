import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { useMediaQuery } from '@/hooks/useMediaQuery'

const Button = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex w-full items-center justify-center rounded-full bg-[#ebebeb] py-2 text-[#4d4d4d] hover:bg-[#ddd] bg:w-auto bg:px-4"
    >
      <span className="mr-1 inline-block h-5 w-5 overflow-hidden text-center">
        <MdOutlineKeyboardArrowLeft className="h-full w-full text-lg" />
      </span>
      Wróć do zakupów
    </button>
  )
}

interface ReturnBtnProps {
  mobile: boolean
}

export const ReturnBtn: FC<ReturnBtnProps> = ({ mobile }) => {
  const matches = useMediaQuery('(min-width: 900px)')

  return matches && mobile === false ? (
    <div className="mt-3">
      <Button />
    </div>
  ) : !matches && mobile === true ? (
    <div className="mt-2 flex w-full items-end px-2 md:mt-4 md:w-1/3 md:px-3">
      <Button />
    </div>
  ) : null
}
