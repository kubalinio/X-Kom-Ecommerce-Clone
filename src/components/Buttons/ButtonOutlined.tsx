import Link from 'next/link'
import { ReactNode } from 'react'

type BtnProps = {
  children: ReactNode
  slug: string
  onClick: () => void
}

export const ButtonOutlined = ({ children, slug, onClick }: BtnProps) => {
  return (
    <Link
      onClick={() => onClick()}
      href={`/${slug}`}
      className="inline-flex h-10 min-h-[40px] w-full select-none items-center justify-center rounded-full border border-[#0082fa] bg-white px-4 py-[10px] text-center text-[#0082fa] transition-colors duration-200 hover:bg-[#0070CC] hover:text-white active:bg-[#00407a] active:text-white lg:h-8 lg:min-h-[32px]"
    >
      {children}
    </Link>
  )
}
