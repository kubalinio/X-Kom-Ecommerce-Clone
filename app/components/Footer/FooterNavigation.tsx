import Link from 'next/link'
import React from 'react'
import { footerItem } from './Footer'

const FooterNavigation = ({ items }: { items: footerItem[] }) => {

    return (
        <div className='hidden md:flex flex-grow-[3] shrink'>
            {items.map(item => (
                <div key={item.title + Math.random()} className='flex flex-col flex-grow lg:px-2'>
                    <h3 title={item.title} className='mb-4 text-lg font-bold'>{item.title}</h3>
                    <ul className='flex flex-col list-none '>
                        {item.links.map(link => (
                            <li key={link.name + Math.random()} className='w-full mb-4'>
                                <Link href={`/`} className='inline-block w-full hover:underline'>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            ))}

        </div>
    )
}

export default FooterNavigation