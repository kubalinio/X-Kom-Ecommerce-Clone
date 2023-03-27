import { ReactNode } from "react";
import { BsShieldCheck } from "react-icons/bs";
import { TfiBackRight, TfiHeadphoneAlt } from "react-icons/tfi";


const serviceItems = [
    {
        icon: <BsShieldCheck />,
        text: 'Bezpieczne zakupy',
        subText: 'Dzięki szyfrowaniu TLS',
    },
    {
        icon: <TfiBackRight />,
        text: 'Darmowe zwroty do 15 dni',
        subText: 'Paczkomatem lub w naszych salonach',
    },
    {
        icon: <TfiHeadphoneAlt />,
        text: 'Wsparcie techniczne',
        subText: 'E-mail, telefon i czat',
    },
]

const Icon = ({ icon, title }: { icon: ReactNode, title: string }) => <span title={title} className='inline-flex items-center justify-center w-[42px] h-[48px] overflow-hidden first:text-4xl text-center text-[#262626]'>{icon}</span>;

const ServiceItems = () => {
    return (
        <div className="flex flex-col justify-start py-2 md:flex-row md:items-baseline md:border-t md:border-[#ddd] md:py-4">
            {serviceItems.map(item => (
                <div className="flex items-center justify-start flex-1 mb-2 basis-auto md:items-center md:justify-center md:mb-0 ">
                    <Icon icon={item.icon} title={item.text} />

                    <div className="ml-4 md:ml-2">
                        <div className="text-[15px]">{item.text}</div>
                        <span className="text-[#707070]">{item.subText}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceItems