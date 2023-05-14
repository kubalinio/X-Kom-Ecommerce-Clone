
import { AiOutlinePlus } from 'react-icons/ai'

type Props = {
    onClick: () => void
    listsLength: number | undefined
}

const CreateListBtn = ({ onClick, listsLength }: Props) => {
    return (
        <button
            onClick={() => onClick()}
            title='Dodaj pierwszą listę'
            className='inline-flex items-center justify-center h-[40px] w-auto max-md:w-full max-md:mt-4 bg-white border border-[#0082fa] rounded-3xl text-[#0082fa] py-2 pl-4 pr-5 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-200'
        >
            <span className='inline-block w-6 h-6 mr-1'>
                <AiOutlinePlus className='w-full h-full text-2xl' />
            </span>
            <span className='flex flex-col'>
                <span className='whitespace-nowrap'>
                    {listsLength ?
                        'Dodaj listę' :
                        'Dodaj pierwszą listę'
                    }
                </span>
            </span>
        </button>
    )
}

export default CreateListBtn