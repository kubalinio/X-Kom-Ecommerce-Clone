import Link from 'next/link'
import { ReactNode } from 'react'

type BtnProps = {
  children: ReactNode
  slug: string
  onClick: () => void
}

export const ButtonPrimary = ({ children, slug, onClick }: BtnProps) => {
  return (
    <Link
      onClick={() => onClick()}
      href={`/${slug}`}
      className="inline-flex h-10 min-h-[40px] w-full select-none items-center justify-center rounded-full border border-[#0082fa] bg-[#0082fa] px-4 py-[10px] text-center text-white transition-colors duration-200 hover:bg-[#0070CC] active:bg-[#00407a] lg:h-8 lg:min-h-[32px]"
    >
      {children}
    </Link>
  )
}
