import { useRouter } from 'next/navigation'
import { AiOutlineSave } from 'react-icons/ai'

type Props = {
  id: string
  version: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SaveListBtn = ({ id, version }: Props) => {
  const router = useRouter()

  const handleClickBtn = () => {
    router.push('/logowanie')
  }

  const style =
    version === 'mobile'
      ? ' rounded-none h-[48px] py-3 px-4  '
      : version === 'desktop'
      ? ' rounded-full h-[32px] py-3 px-4 [&_span]:first:mr-2'
      : ''

  return (
    <button
      onClick={() => handleClickBtn()}
      title="Udostępnij listę"
      className={`inline-flex w-full items-center justify-start whitespace-nowrap bg-transparent text-[#2a2a2a] transition-colors duration-200 hover:bg-[#f5f5f5] disabled:pointer-events-none disabled:text-gray-400 ${style}`}
      disabled={false}
    >
      <span className="mr-3 inline-block h-6 w-6 overflow-hidden ">
        <AiOutlineSave className="h-full w-full text-xl" />
      </span>

      <span>
        <span>Zapisz na koncie</span>
      </span>
    </button>
  )
}

export default SaveListBtn
