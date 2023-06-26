import { AiOutlineInfoCircle } from 'react-icons/ai'

export const BasketInfo = () => (
  <div className="flex w-full rounded bg-transparent px-4 py-3 md:px-0">
    <span className="mr-2 inline-block h-5 w-5 flex-shrink-0">
      <AiOutlineInfoCircle className="h-full w-full text-xl" />
    </span>

    <div className=" pr-4 text-base leading-5 text-[#4d4d4d]">
      Dokończ składanie zamówienia - dodanie produktów do koszyka nie oznacza rezerwacji.
    </div>
  </div>
)
