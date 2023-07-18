
import Link from 'next/link'
import { ReactNode } from 'react'

import { NavDropdown } from '../NavDropdown'

const DropdownHeader = ({ title }: { title: string }) => (
    <div className="flex items-center w-full h-9">
        <p className="ml-4 font-bold text-[#707070]">{title}</p>
    </div>
)

type DropDownLinkProps = {
    slug: string
    name: string
    icon?: ReactNode
    onClick: () => void
}

const DropdownLink = ({ slug, name, icon, onClick }: DropDownLinkProps) => (
    <li>
        <Link
            onClick={() => onClick()}
            href={`/${slug}`}
            className="flex h-9 items-center px-4 hover:bg-[#f5f5f5] hover:no-underline focus:no-underline active:no-underline"
        >
            {icon && (
                <span className="inline-block w-6 h-6 mr-3" title={name}>
                    {icon}
                </span>
            )}
            <p className="flex items-center w-full text-base whitespace-nowrap">{name}</p>
        </Link>
    </li>
)

type Props = {
    helpItem: {
        name: string;
        icon: JSX.Element;
        slug: string;
        subMenu: {
            popular: {
                name: string;
                slug: string;
            }[];
            contact: ({
                name: string;
                icon: JSX.Element;
                slug: string;
                workTime?: undefined;
            } | {
                name: string;
                icon: JSX.Element;
                slug: string;
                workTime: {
                    days: string
                    time: string
                }[];
            })[];
        };
    }
    onClick: () => void
}

export const DesktopDropdown = ({ helpItem, onClick }: Props) => {
    return (
        <NavDropdown>
            <div>
                <DropdownHeader title={'Popularne tematy'} />

                <ul>
                    {helpItem?.subMenu?.popular?.map((item) => (
                        <DropdownLink onClick={() => onClick()} key={item.name} slug={item.slug} name={item.name} />
                    ))}
                </ul>

                <DropdownHeader title={'Skontaktuj się z nami'} />

                <ul>
                    {helpItem?.subMenu?.contact.slice(0, 3).map((item) => (
                        <DropdownLink
                            onClick={() => onClick()}
                            key={item.name}
                            slug={item.slug}
                            name={item.name}
                            icon={item.icon}
                        />
                    ))}
                </ul>

                {/* Contact */}
                {helpItem?.subMenu?.contact.slice(3, 4).map((item) => (
                    <div key={item.name} className="relative h-[72px]">
                        <a
                            href={`${item.slug}`}
                            className="flex items-center h-full px-4 pb-9 hover:no-underline focus:no-underline active:no-underline"
                        >
                            <span className="inline-block w-6 h-6 mr-3" title={item.name}>
                                {item.icon}
                            </span>
                            {item.name}
                        </a>

                        <div className="absolute flex ml-10 text-sm text-gray-600 top-9">
                            <div className="flex flex-col ml-4">
                                {item.workTime?.map((item, i) => (
                                    <span key={item.days + i} className="mb-1 mr-1 whitespace-nowrap">
                                        {item.days}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col ml-4">
                                {item.workTime?.map((item, i) => (
                                    <span key={item.days + i} className="mb-1 mr-1 whitespace-nowrap">
                                        {item.time}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </NavDropdown>
    )
}
