import Image from 'next/image'

import ShopIcon from '../../../../../../public/listShoping.svg'

const EmptyList = () => {
  return (
    <div className="border-t border-[#ddd] pt-6 md:flex md:items-center md:justify-between md:pl-6 md:pr-9 bg:pr-[100px]">
      {/* text */}
      <div className="mb-8 md:m-0 md:pr-6">
        <h2 title="Twoja lista jest pusta" className="mb-2 text-xl">
          Twoja lista jest pusta
        </h2>
        <p className="text-[#707070]">Masz na oku ciekawe produkty? Dodaj je do listy!</p>
      </div>

      {/* Img */}
      <div className="flex justify-center md:w-[310px] md:shrink-0">
        <span
          title="Twoja lista jest pusta"
          className="inline-block h-auto w-[284px] max-w-full overflow-hidden md:w-full lg:w-[366px]"
        >
          <Image src={ShopIcon} alt="Twoja lista jest pusta" className="h-auto w-full lg:w-[366px]" />
        </span>
      </div>
    </div>
  )
}

export default EmptyList
