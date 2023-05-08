import Image from "next/image"
import Link from "next/link"
import { BsEnvelopeFill } from "react-icons/bs"
import { FaPhoneAlt } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import facebookIcon from '../../public/icons/facebook.svg'
import instagramIcon from '../../public/icons/instagram-color.svg'
import youtubeIcon from '../../public/icons/youtube-color.svg'
import twitterIcon from '../../public/icons/twitter-color.svg'

const icons = [
    {
        icon: facebookIcon,
        name: 'facebook',
        slug: ''
    },
    {
        icon: instagramIcon,
        name: 'instagram',
        slug: ''
    },
    {
        icon: youtubeIcon,
        name: 'youtube',
        slug: ''
    },
    {
        icon: twitterIcon,
        name: 'twitter',
        slug: ''
    },
]

const FooterContact = () => {
    return (
        <div className='md:flex-1'>
            {/* Address */}
            <div>
                <p title='Kontakt' className='mb-5 text-lg font-bold'>Kontakt</p>
                <address className='flex flex-col gap-1 text-[#4d4d4d] font-lato'>
                    <Link href='tel:333222111' className='inline-flex items-center text-2xl hover:underline'>
                        <span className='inline-block w-6 h-6 mx-2 '>
                            <FaPhoneAlt className='w-full h-full ' />
                        </span>
                        333222111
                    </Link>
                    <div className='flex mt-1 mb-2 ml-10 text-[#707070] '>
                        <div className='flex flex-col first:mb-1'>
                            <span className='mr-2 whitespace-nowrap'>pon. - pt.</span>
                            <span className='mr-2 whitespace-nowrap'>sob. - niedz.</span>
                        </div>


                        <div className='flex flex-col first:mb-1'>
                            <span className='whitespace-nowrap'>8:00 - 21:00</span>
                            <span className='whitespace-nowrap'>8:00 - 19:00</span>
                        </div>
                    </div>

                    <Link href='mailto:jsapalawebdev@gmail.com' className='inline-flex items-center py-2 text-[#4d4d4d] hover:underline'>
                        <span className='inline-block w-6 h-6 mx-2 '>
                            <BsEnvelopeFill className='w-full h-full' />
                        </span>
                        x-kom@x-kom.pl
                    </Link>

                    <Link href={`/kontakt`} className='inline-flex items-center py-2 text-[#4d4d4d] hover:underline'>
                        <span className='inline-block w-6 h-6 mx-2 '>
                            <ImLocation className='w-full h-full' />
                        </span>
                        Salony x-kom
                    </Link>
                </address>
            </div>

            {/* Socials */}
            <div className='flex flex-wrap pt-4 pb-6 -mx-2'>
                {icons.map((icon, i) => (

                    <Link href={`/${icon.slug}`} key={icon.name + i}>
                        <span title={icon.name} className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                            <Image
                                src={icon.icon}
                                height={24}
                                width={24}
                                alt={icon.name}
                                className='w-6 h-6'
                            />
                        </span>
                    </Link>
                ))

                }
            </div>

        </div>
    )
}

export default FooterContact