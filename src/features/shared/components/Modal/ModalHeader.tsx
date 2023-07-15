import { ReactNode } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiArrowLeftSLine } from 'react-icons/ri'

type HeaderProps = {
  children?: ReactNode
  title: string
  close: () => void
}

const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="inline-flex h-[30px] w-[30px] items-center justify-center first:text-[30px] first:text-gray-600 sm:first:text-[22px]">
    {icon}
  </span>
)

export const ModalHeader = ({ children, title, close }: HeaderProps) => {
  return (
    <div className="fixed top-0 z-[1001] inline-flex min-h-[56px] w-full max-w-full items-center justify-between rounded-none border-b border-[#ddd] bg-[#f5f5f5] p-2 pr-4 sm:static sm:min-h-[48px] sm:max-w-[600px] sm:rounded-t-lg sm:py-2 sm:pl-4 sm:pr-3">
      <div className="flex w-full items-center">
        <button
          onClick={() => close()}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full hover:bg-[#ddd] focus:bg-[#ddd] sm:hidden"
        >
          <Icon icon={<RiArrowLeftSLine />} />
        </button>

        {children}

        {/* title */}
        <div className="inline-flex flex-auto flex-shrink-[6] flex-col pl-2">
          <h3 title={title} className="overflow-ellipsis whitespace-nowrap text-[18px] font-bold text-[#4d4d4d]">
            {title}
          </h3>
        </div>

        <button
          onClick={() => close()}
          className="hidden h-[36px] w-[36px] items-center justify-center rounded-full hover:bg-[#ddd] focus:bg-[#ddd] sm:flex"
        >
          <Icon icon={<AiOutlineClose />} />
        </button>
      </div>
    </div>
  )
}
