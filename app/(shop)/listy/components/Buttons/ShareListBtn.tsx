import { RiShareForwardLine } from "react-icons/ri"

type Props = {
    id: string
    version: string
}

const ShareListBtn = ({ id, version }: Props) => {

    const handleClickBtn = () => {
        return
    }

    let style = version === 'mobile' ? ' rounded-none h-[48px] py-3 px-4  ' :
        version === 'desktop' ? ' rounded-full h-[40px] py-3 px-4 [&_span]:first:mr-2' : ''

    return (
        <button
            onClick={() => handleClickBtn()}
            title='Udostępnij listę'
            className={`inline-flex items-center justify-start whitespace-nowrap bg-transparent text-[#2a2a2a] w-full hover:bg-[#ddd] transition-colors duration-200 disabled:text-gray-400 ${style}`}
            disabled={true}
        >

            <span className='inline-block w-6 h-6 mr-3 overflow-hidden '>

                <RiShareForwardLine className='w-full h-full text-xl' />

            </span>

            <span>
                <span>
                    Udostępnij listę
                </span>
            </span>
        </button >
    )
}

export default ShareListBtn