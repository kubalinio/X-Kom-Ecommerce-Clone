import { useRouter } from "next/navigation"
import { AiOutlineSave } from "react-icons/ai"

type Props = {
    id: string
    version: string
}

const SaveListBtn = ({ id, version }: Props) => {

    const router = useRouter()

    const handleClickBtn = () => {
        router.push('/logowanie')
    }

    let style = version === 'mobile' ? ' rounded-none h-[48px] py-3 px-4  ' :
        version === 'desktop' ? ' rounded-full h-[32px] py-3 px-4 [&_span]:first:mr-2' : ''

    return (
        <button
            onClick={() => handleClickBtn()}
            title='Udostępnij listę'
            className={`inline-flex items-center justify-start whitespace-nowrap bg-transparent text-[#2a2a2a] w-full hover:bg-[#f5f5f5] transition-colors duration-200 disabled:text-gray-400 disabled:pointer-events-none ${style}`}
            disabled={false}
        >

            <span className='inline-block w-6 h-6 mr-3 overflow-hidden '>

                <AiOutlineSave className='w-full h-full text-xl' />

            </span>

            <span>
                <span>
                    Zapisz na koncie
                </span>
            </span>
        </button >
    )
}

export default SaveListBtn