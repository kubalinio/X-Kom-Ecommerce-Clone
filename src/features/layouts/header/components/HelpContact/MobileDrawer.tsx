import Link from "next/link";

import { DrawerBody, DrawerContainer, DrawerHeader, DrawerModal } from "@/features/shared/components/DrawerModal"

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
    onClose: () => void
    showDrawer: boolean
    width: number
}

export const MobileDrawer = ({ helpItem, onClose, showDrawer, width }: Props) => {
    return (
        <DrawerContainer close={() => onClose()} openDrawer={showDrawer} direction={'right'}>
            {showDrawer && (width ?? 0) <= 1080 ? (
                <DrawerModal>
                    <DrawerHeader name={helpItem.name} closeDrawer={() => onClose()} basketQuantity={0} />

                    {/* Tylko Conterner 1 Div */}
                    <DrawerBody>
                        <div className="flex items-end w-full h-14">
                            <p className="ml-4 font-bold text-[#707070]">Popularne tematy</p>
                        </div>
                        <ul>
                            {helpItem?.subMenu?.popular?.map((item, i) => (
                                <li key={item.name + i}>
                                    <Link
                                        onClick={() => onClose()}
                                        href={`/${item.slug}`}
                                        className="flex items-center h-12 px-4 hover:no-underline focus:no-underline active:no-underline"
                                    >
                                        <p className="flex items-center w-full text-base whitespace-nowrap">{item.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 border border-[#ddd]" />
                        <div className="flex items-end w-full mb-1 h-14">
                            <p className="ml-4 font-bold text-[#707070]">Skontaktuj się z nami</p>
                        </div>
                        <ul>
                            {helpItem?.subMenu?.contact.slice(0, 3).map((item, i) => (
                                <li key={item.name + i}>
                                    <Link
                                        onClick={() => onClose()}
                                        href={`/${item.slug}`}
                                        className="flex items-center px-4 h-14 hover:no-underline focus:no-underline active:no-underline"
                                    >
                                        <span className="inline-block w-6 h-6 mr-3" title={item.name}>
                                            {item.icon}
                                        </span>
                                        <p className="flex items-center w-full text-base whitespace-nowrap">{item.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {helpItem?.subMenu?.contact.slice(3, 4).map((item, i) => (
                            <div key={item.name + i} className="relative h-[88px]">
                                <a
                                    href={`${item.slug}`}
                                    className="flex items-center px-4 h-14 hover:no-underline focus:no-underline active:no-underline"
                                >
                                    <span className="inline-block w-6 h-6 mr-3" title={item.name}>
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </a>

                                <div className="absolute flex ml-10 text-sm text-gray-600 top-12">
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
                    </DrawerBody>
                </DrawerModal>
            ) : (
                ''
            )}
        </DrawerContainer>
    )
}