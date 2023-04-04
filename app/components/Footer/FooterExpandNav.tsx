import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { footerItem } from './Footer'

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
        <div className='flex flex-col border-b border-[#ddd] w-full md:hidden'>

            {items.map(((item, index) => (
                <div key={item.title + Math.random()}>
                    <div onClick={() => handleShowAcc(index)} className='flex justify-between items-center cursor-pointer border-t border-[#ddd] w-full h-16'>
                        <h3 className='pr-2 text-lg font-bold'>{item.title}</h3>
                        <span className={`${expandIndex === index && isShow ? '-rotate-180' : 'rotate-0'} inline-block w-8 h-8 mr-2 transition-transform duration-300 `}>
                            <MdOutlineKeyboardArrowDown className='w-full h-full' />
                        </span>
                    </div>

                    <div className={`${expandIndex === index && isShow ? 'block max-h-full' : 'hidden max-h-0'} overflow-hidden transition-all duration-500`}>
                        <div className='flex flex-col text-base last:mb-4'>
                            {item.links.map(link => (
                                <Link key={link.name + Math.random()} href={`/`} className='px-4 py-3 leading-6 hover:underline underline-offset-2 '>{link.name}</Link>

                            ))}

                        </div>
                    </div>

                </div>
            )))}

        </div >
    )
}

export default FooterExpandNav