import { useRouter } from 'next/navigation'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

const ReturnBtn = () => {
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

export default ReturnBtn
