import Link from 'next/link'

export const NeedHelpInfo = () => {
  return (
    <div className="mt-10 flex flex-col items-start">
      <h3 className="mb-2 text-lg font-bold">Potrzebujesz pomocy ?</h3>
      <Link
        href="/centrum-pomocy"
        className="text-[#1c73e7] visited:text-[#6000b0] hover:text-[#6000b0] focus:text-[#6000b0] active:text-[#6000b0]"
      >
        W centrum pomocy odnajdziesz pełną bazę pytań i odpowiedzi
      </Link>
    </div>
  )
}
