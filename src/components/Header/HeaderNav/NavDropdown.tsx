import { ReactNode } from 'react'

type NavDropdownProps = {
  children: ReactNode
  last?: boolean
}

export const NavDropdown = ({ children, last }: NavDropdownProps) => {
  return (
    <div
      className={`absolute top-[95%]  z-[11] hidden min-w-[256px] rounded-lg bg-white pb-4 pt-2 shadow-xCom md:min-w-[256px] lg:block ${
        last ? 'right-0 w-[360px] rounded-tr-none lg:p-0' : 'left-0 rounded-tl-none'
      }`}
    >
      {children}
    </div>
  )
}
