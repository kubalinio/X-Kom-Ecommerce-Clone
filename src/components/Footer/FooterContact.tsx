import Image from 'next/image'
import Link from 'next/link'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'

import facebookIcon from '../../../public/icons/facebook.svg'
import instagramIcon from '../../../public/icons/instagram-color.svg'
import twitterIcon from '../../../public/icons/twitter-color.svg'
import youtubeIcon from '../../../public/icons/youtube-color.svg'

const icons = [
  {
    icon: facebookIcon,
    name: 'facebook',
    slug: '',
  },
  {
    icon: instagramIcon,
    name: 'instagram',
    slug: '',
  },
  {
    icon: youtubeIcon,
    name: 'youtube',
    slug: '',
  },
  {
    icon: twitterIcon,
    name: 'twitter',
    slug: '',
  },
]

const FooterContact = () => {
  return (
    <div className="md:flex-1">
      {/* Address */}
      <div>
        <p title="Kontakt" className="mb-5 text-lg font-bold">
          Kontakt
        </p>
        <address className="flex flex-col gap-1 font-lato text-[#4d4d4d]">
          <Link href="tel:333222111" className="inline-flex items-center text-2xl hover:underline">
            <span className="mx-2 inline-block h-6 w-6 ">
              <FaPhoneAlt className="h-full w-full " />
            </span>
            333222111
          </Link>
          <div className="mb-2 ml-10 mt-1 flex text-[#707070] ">
            <div className="flex flex-col first:mb-1">
              <span className="mr-2 whitespace-nowrap">pon. - pt.</span>
              <span className="mr-2 whitespace-nowrap">sob. - niedz.</span>
            </div>

            <div className="flex flex-col first:mb-1">
              <span className="whitespace-nowrap">8:00 - 21:00</span>
              <span className="whitespace-nowrap">8:00 - 19:00</span>
            </div>
          </div>

          <Link
            href="mailto:jsapalawebdev@gmail.com"
            className="inline-flex items-center py-2 text-[#4d4d4d] hover:underline"
          >
            <span className="mx-2 inline-block h-6 w-6 ">
              <BsEnvelopeFill className="h-full w-full" />
            </span>
            x-kom@x-kom.pl
          </Link>

          <Link href={`/kontakt`} className="inline-flex items-center py-2 text-[#4d4d4d] hover:underline">
            <span className="mx-2 inline-block h-6 w-6 ">
              <ImLocation className="h-full w-full" />
            </span>
            Salony x-kom
          </Link>
        </address>
      </div>

      {/* Socials */}
      <div className="-mx-2 flex flex-wrap pb-6 pt-4">
        {icons.map((icon, i) => (
          <Link href={`/${icon.slug}`} key={icon.name + i}>
            <span
              title={icon.name}
              className="flex h-12 w-12 items-center justify-center grayscale transition duration-300 hover:grayscale-0"
            >
              <Image src={icon.icon} height={24} width={24} alt={icon.name} className="h-6 w-6" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterContact
