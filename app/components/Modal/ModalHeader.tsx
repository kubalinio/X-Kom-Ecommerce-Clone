import { ReactNode } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { RiArrowLeftSLine } from "react-icons/ri"

type HeaderProps = {
    children?: ReactNode
    title: string
    close: () => void

}

const Icon = ({ icon }: { icon: ReactNode }) => <span className='inline-flex items-center justify-center h-[30px] w-[30px] first:text-[30px] sm:first:text-[22px] first:text-gray-600'>{icon}</span>;


export const ModalHeader = ({ children, title, close }: HeaderProps) => {

    return (
        <div className="z-[1001] fixed top-0 inline-flex items-center justify-between max-w-full w-full p-2 pr-4 min-h-[56px] rounded-none bg-[#f5f5f5] border-b border-[#ddd] sm:py-2 sm:pl-4 sm:pr-3 sm:min-h-[48px] sm:static sm:rounded-t-lg sm:max-w-[600px]">

            <div className="flex items-center w-full">

                <button
                    onClick={() => close()}
                    className="flex sm:hidden items-center justify-center w-[40px] h-[40px] rounded-full hover:bg-[#ddd] focus:bg-[#ddd]"
                >
                    <Icon icon={<RiArrowLeftSLine />} />
                </button>

                {children}

                {/* title */}
                <div className="inline-flex flex-col flex-auto flex-shrink-[6] pl-2">
                    <h3 title={title} className='text-[18px] text-[#4d4d4d] font-bold whitespace-nowrap overflow-ellipsis'>{title}</h3>
                </div>

                <button
                    onClick={() => close()}
                    className="hidden sm:flex items-center justify-center w-[36px] h-[36px] rounded-full hover:bg-[#ddd] focus:bg-[#ddd]"
                >
                    <Icon icon={<AiOutlineClose />} />
                </button>

            </div>
        </div>
    )
}