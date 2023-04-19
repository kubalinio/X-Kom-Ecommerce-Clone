import { ReactNode } from 'react'

type NavDropdownProps = {
    children: ReactNode
    last?: boolean
}

export const NavDropdown = ({ children, last }: NavDropdownProps) => {

    return (
        <div className={`lg:block hidden  absolute top-[95%] z-[11] bg-white rounded-lg shadow-xCom min-w-[256px] pt-2 pb-4 md:min-w-[256px] ${last ? 'right-0 w-[360px] rounded-tr-none lg:p-0' : 'left-0 rounded-tl-none'}`}>

            {children}

        </div>
    )
}


