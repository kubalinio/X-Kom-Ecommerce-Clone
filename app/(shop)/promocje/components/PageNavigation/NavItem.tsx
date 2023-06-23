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
        className="group relative mx-2 flex h-[48px] cursor-pointer items-center justify-center"
        activeClass="activeNav"
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

        <div className="absolute -left-1 -right-1 bottom-0 h-0 border-x-4 border-b-0 border-[#1a1a1a] border-x-transparent transition-all duration-200 group-[.activeNav]:border-b-4" />
        {/* Active border bottom width 4px */}
      </Link>
    </div>
  )
}

export default NavItem
