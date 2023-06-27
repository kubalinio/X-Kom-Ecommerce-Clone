import { ReactNode } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { TfiBackRight, TfiHeadphoneAlt } from 'react-icons/tfi'

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

const Icon = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <span
    title={title}
    className="inline-flex h-[48px] w-[42px] items-center justify-center overflow-hidden text-center text-[#262626] first:text-4xl"
  >
    {icon}
  </span>
)

const ServiceItems = () => {
  return (
    <div className="mt-4 w-full px-2 md:mt-6 bg:px-4">
      <hr className="-mx-4 h-[1px] w-[calc(100%+32px)] bg-[#ddd] md:hidden" />
      <div className="flex flex-col justify-start py-2 md:flex-row md:items-baseline md:border-t md:border-[#ddd] md:py-4">
        {serviceItems.map((item) => (
          <div
            key={item.text + Math.random()}
            className="mb-2 flex flex-1 basis-auto items-center justify-start md:mb-0 md:items-center md:justify-center "
          >
            <Icon icon={item.icon} title={item.text} />

            <div className="ml-4 md:ml-2">
              <div className="text-[15px]">{item.text}</div>
              <span className="text-[#707070]">{item.subText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceItems
