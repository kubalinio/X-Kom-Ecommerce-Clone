import Link from 'next/link'

import { footerItem } from './Footer'

const FooterNavigation = ({ items }: { items: footerItem[] }) => {
  return (
    <div className="hidden shrink flex-grow-[3] md:flex">
      {items.map((item) => (
        <div key={item.title + Math.random()} className="flex flex-grow flex-col lg:px-2">
          <h3 title={item.title} className="mb-4 text-lg font-bold">
            {item.title}
          </h3>
          <ul className="flex list-none flex-col ">
            {item.links.map((link) => (
              <li key={link.name + Math.random()} className="mb-4 w-full">
                <Link href={`/`} className="inline-block w-full hover:underline">
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
