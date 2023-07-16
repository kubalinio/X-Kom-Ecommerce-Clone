/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { footerItem } from '../dataAccess/footerNavItems'

const FooterExpandNav = ({ items }: { items: footerItem[] }) => {
  const [isShow, setIsShow] = useState(false)
  const [expandIndex, setExpandIndex] = useState(0)

  const handleShowAcc = (index: number) => {
    if (isShow === true && expandIndex === index) {
      setIsShow(false)
      setExpandIndex(0)
    } else {
      setIsShow(true)
      setExpandIndex(index)
    }
  }

  return (
    // {/* Mobile Accordion */ }
    <div className="flex w-full flex-col border-b border-[#ddd] md:hidden">
      {items.map((item, index) => (
        <div key={item.title + Math.random()}>
          <div
            onClick={() => handleShowAcc(index)}
            className="flex h-16 w-full cursor-pointer items-center justify-between border-t border-[#ddd]"
          >
            <h3 className="pr-2 text-lg font-bold">{item.title}</h3>
            <span
              className={`${
                expandIndex === index && isShow ? '-rotate-180' : 'rotate-0'
              } mr-2 inline-block h-8 w-8 transition-transform duration-300 `}
            >
              <MdOutlineKeyboardArrowDown className="h-full w-full" />
            </span>
          </div>

          <div
            className={`${
              expandIndex === index && isShow ? 'block max-h-full' : 'hidden max-h-0'
            } overflow-hidden transition-all duration-500`}
          >
            <div className="flex flex-col text-base last:mb-4">
              {item.links.map((link) => (
                <Link
                  key={link.name + Math.random()}
                  href={`/`}
                  className="px-4 py-3 leading-6 underline-offset-2 hover:underline "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterExpandNav
