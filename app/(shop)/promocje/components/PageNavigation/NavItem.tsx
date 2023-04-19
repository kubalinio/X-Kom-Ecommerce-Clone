'use client'

import { Link } from 'react-scroll'

type Props = {
    title: string
    number: number
}

const NavItem = ({ title, number }: Props) => {

    return (
        <div className="flex flex-wrap items-center justify-start">
            <Link
                className="relative flex items-center justify-center h-[48px] mx-2 cursor-pointer group"
                activeClass='activeNav'
                to={title}
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                offset={-115}
            >
                <div>
                    <span>
                        {title} ({number})
                    </span>
                </div>

                <div className="absolute bottom-0 -left-1 -right-1 h-0 border-x-4 border-x-transparent border-b-0 border-[#1a1a1a] transition-all duration-200 group-[.activeNav]:border-b-4" />
                {/* Active border bottom width 4px */}
            </Link>
        </div>
    )
}

export default NavItem