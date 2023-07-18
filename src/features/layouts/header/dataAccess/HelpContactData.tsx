import { BsTelephone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { TfiHeadphoneAlt } from 'react-icons/tfi'


export const helpItem = {
  name: 'Pomoc i kontakt',
  icon: <TfiHeadphoneAlt />,
  slug: 'centrum-pomocy',
  subMenu: {
    popular: [
      {
        name: 'Status przesyłki',
        slug: 'status-przesylki',
      },
      {
        name: 'Dostawa',
        slug: 'dostawa',
      },
      {
        name: 'Raty',
        slug: 'raty',
      },
      {
        name: 'Leasing',
        slug: 'leasing',
      },
      {
        name: 'Ubezpieczenie sprzętu',
        slug: 'ubezpieczenia',
      },
      {
        name: 'Zwroty i reklamacje',
        slug: 'serwis',
      },
      {
        name: 'Najczęsciej zadawane pytania',
        slug: 'centrum-pomocy',
      },
    ],
    contact: [
      {
        name: 'Kontakt',
        icon: <TfiHeadphoneAlt className="w-full h-full" />,
        slug: 'kontakt',
      },
      {
        name: 'Salony',
        icon: <HiOutlineBuildingStorefront className="w-full h-full" />,
        slug: 'salony',
      },
      {
        name: 'x-kom@x-kom.pl',
        icon: <GoMail className="w-full h-full" />,
        slug: 'mailto:x-kom@x-kom.pl',
      },
      {
        name: '12 312 31 23',
        icon: <BsTelephone className="w-full h-full" />,
        slug: 'tel:123123123',
        workTime: [
          {
            days: 'pn. - pt.',
            time: '8:00 - 21:00',
          },
          {
            days: 'sob. - niedz.',
            time: '8:00 - 19:00',
          },
        ],
      },
    ],
  },
}
