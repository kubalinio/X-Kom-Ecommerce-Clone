import { RiShareForwardLine } from 'react-icons/ri'

type Props = {
  id?: string
  version: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ShareListBtn = ({ id, version }: Props) => {
  const handleClickBtn = () => {
    return
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
      disabled={true}
    >
      <span className="mr-3 inline-block h-6 w-6 overflow-hidden ">
        <RiShareForwardLine className="h-full w-full text-xl" />
      </span>

      <span>
        <span>Udostępnij listę</span>
      </span>
    </button>
  )
}

export default ShareListBtn
