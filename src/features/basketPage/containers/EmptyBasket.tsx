import Link from 'next/link'

const EmptyBasket = () => {
  return (
    <div className="flex w-full flex-col justify-center px-4 py-8 text-center">
      <h2 className="mx-auto mt-8 text-3xl">Twój koszyk jest pusty</h2>
      <p className="mx-auto mt-2 text-xl text-[#707070]">Szukasz inspiracji?</p>

      <Link
        href="/"
        className="mb-4 mt-3 flex h-10 min-h-[40px] w-auto select-none items-center justify-center rounded-full border border-[#0082fa] bg-[#0082fa] px-4 py-[10px] text-center text-white transition-colors duration-200 hover:bg-[#0070CC] active:bg-[#00407a] md:mx-auto md:mb-8 md:mt-6 md:w-[364px]"
      >
        Przejdź do strony głównej
      </Link>
    </div>
  )
}

export default EmptyBasket
