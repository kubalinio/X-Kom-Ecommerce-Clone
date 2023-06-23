import { AiOutlinePlus } from 'react-icons/ai'

type Props = {
  onClick: () => void
  listsLength: number | undefined
}

const CreateListBtn = ({ onClick, listsLength }: Props) => {
  return (
    <button
      onClick={() => onClick()}
      title="Dodaj pierwszą listę"
      className="inline-flex h-[40px] w-auto items-center justify-center rounded-3xl border border-[#0082fa] bg-white py-2 pl-4 pr-5 text-[#0082fa] transition-colors duration-200 hover:bg-gray-200 active:bg-gray-300 max-md:mt-4 max-md:w-full"
    >
      <span className="mr-1 inline-block h-6 w-6">
        <AiOutlinePlus className="h-full w-full text-2xl" />
      </span>
      <span className="flex flex-col">
        <span className="whitespace-nowrap">{listsLength ? 'Dodaj listę' : 'Dodaj pierwszą listę'}</span>
      </span>
    </button>
  )
}

export default CreateListBtn
