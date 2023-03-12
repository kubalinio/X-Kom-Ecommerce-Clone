'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineFacebook, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'
import facebookIcon from '../../public/facebook.svg'

type footerItem = {
    title: string;
    links: {
        name: string;
        slug: string;
    }[]
}

const footerItems: footerItem[] = [
    {
        title: 'Zamówienia',
        links: [
            {
                name: 'Dostawy',
                slug: ''
            },
            {
                name: 'Raty',
                slug: ''
            },
            {
                name: 'Leasing',
                slug: ''
            },
            {
                name: 'Ubezpieczenia',
                slug: ''
            },
            {
                name: 'TaxFree',
                slug: ''
            },
            {
                name: 'Montaż',
                slug: ''
            },
            {
                name: 'Zwroty i reklamacje',
                slug: ''
            },
            {
                name: 'Najczęściej zadawane pytania',
                slug: ''
            },
        ]
    },
    {
        title: 'Promocje i inspiracje',
        links: [
            {
                name: 'Wyprzedaż',
                slug: ''
            },
            {
                name: 'Gorący strzał',
                slug: ''
            },
            {
                name: 'Promocje',
                slug: ''
            },
            {
                name: 'Karty podarunkowe',
                slug: ''
            },
            {
                name: 'Poradniki',
                slug: ''
            },
            {
                name: 'Aktualności',
                slug: ''
            },
        ]
    },
    {
        title: 'x-kom',
        links: [
            {
                name: 'O nas',
                slug: ''
            },
            {
                name: 'Regulamin',
                slug: ''
            },
            {
                name: 'Polityka prywatności',
                slug: ''
            },
            {
                name: 'Polityka cookies',
                slug: ''
            },
            {
                name: 'Biura prasowe',
                slug: ''
            },
            {
                name: 'Zamówienia publiczne',
                slug: ''
            },
            {
                name: 'Współpraca B2B',
                slug: ''
            },
            {
                name: 'Współpraca marketingowa',
                slug: ''
            },
            {
                name: 'Geex',
                slug: ''
            },
            {
                name: 'Forum',
                slug: ''
            },
            {
                name: 'Kariera',
                slug: ''
            },
            {
                name: 'Kontakt',
                slug: ''
            },
            {
                name: 'Realizowane projekty',
                slug: ''
            },
        ]
    },

]


// Validation for Form to do
const Newsletter = () => (
    <div className='bg-[#f9f9f9] rounded-2xl shadow-sm-xCom mb-4 md:flex lg:mr-4 lg:w-[calc(50%-16px)]'>
        {/* Content */}
        <div className='flex flex-col items-center px-8 pt-7 pb-6 md:pr-3 md:items-start md:flex-grow md:max-w-[390px] lg:pr-5 lg:pb-4 lg:pl-10'>

            <h2 className='text-2xl font-bold leading-7'>Newsletter</h2>

            <div className='mt-2 mb-4 lg:mt-3'>
                <p className='text-[#4d4d4d] text-center md:text-left md:w-[270px] lg:w-[186px]'>Nie przegap żadnej promocji,</p>
                <p className='text-[#4d4d4d] text-center md:text-left md:w-[270px] lg:w-[186px]'>zdobywaj dodatkowe rabaty.</p>
            </div>

            <form className='w-full'>
                <div className='w-full'>
                    {/* input */}
                    <div className='flex w-full h-10 lg:h-8 lg:max-w-[304px]'>
                        <input
                            type="email"
                            placeholder='Twój e-mail'
                            className='flex-1 h-full px-5 text-left border border-[#ccc] border-r-0 max-w-full rounded-l-full -mr-4 outline-none text-base lg:pl-4'
                        />
                        <button type='submit' className='text-white border-none rounded-full h-full w-auto px-4 bg-[#0082fa] hover:bg-[#0070CC] active:bg-[#00407a] transition-colors duration-200'>
                            <span className='flex items-center justify-center'>
                                Zapisz się
                            </span>
                        </button>
                    </div>
                    {/* error message*/}
                    <span className='min-h-[20px] text-left block text-red-800 pt-1'></span>
                </div>
            </form>
        </div>

        {/* Img Tablet */}
        <div className='hidden mx-auto lg:flex lg:items-center lg:mr-8'>
            <span className='hidden h-[96px] overflow-hidden md:block md:my-3 md:mx-auto lg:my-0 lg:mx-auto'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/2cc235c12e03ae26.png`}
                    width={441}
                    height={288}
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Newsletter'
                    title='Newsletter'
                    loading='lazy'
                />
            </span>
        </div>

        {/* Img Desktop */}
        <div className='hidden mx-auto md:flex md:items-center lg:hidden'>
            <span className='hidden h-[112px] overflow-hidden md:block md:my-3 md:mx-auto lg:my-0 lg:mx-auto'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/2cc235c12e03ae26.png`}
                    width={441}
                    height={288}
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Newsletter'
                    loading='lazy'
                    title='Newsletter'
                />
            </span>

        </div>
    </div>
)

const MobileAppBox = () => (
    <div className='relative flex shadow-sm-xCom bg-[#f9f9f9] rounded-2xl mb-4 w-full max-md:flex-col max-md:items-center max-md:text-center md:pl-8 lg:pl-10 lg:pr-1 lg:ml-4 lg:w-[calc(50%-16px)] transition-shadow duration-300 hover:shadow-xCom'>

        {/* Content */}
        <div className='mb-8 mt-7 md:text-center md:mb-11 lg:mb-6'>
            <Link
                href={`/`}
                target='_blank'
                className='absolute top-0 left-0 w-full h-full z-1'
            />

            <h3 className='mb-1 text-2xl font-bold leading-7 lg:mb-2'>Aplikacja mobilna</h3>

            <div className='mb-1 ml-3 mr-3 md:m-0 md:mb-3'>
                <p className='text-[#4d4d4d]'>Sprawdzaj promocje,</p>
                <p className='text-[#4d4d4d]'>które dostępne są tylko w aplikacji.</p>
            </div>

            <div className='flex max-md:flex-wrap max-md:justify-center'>

                <Link href={`/`} className='max-h-10 z-[2] mx-1 max-md:mt-2 md:max-w-[100px] md:max-h-[32px] md:ml-0'>
                    <span className='inline-flex items-center justify-center overflow-hidden h-10 w-[120px] md:h-8 md:w-[100px]'>
                        <Image
                            src={`https://assets.x-kom.pl/public-spa/xkom/0f6ff6eee36d1bb3.svg`}
                            width={136}
                            height={40}
                            loading='lazy'
                            alt='App Store'
                            title='App Store'
                            className='object-contain w-full h-full'
                        />
                    </span>
                </Link>

                <Link href={`/`} className='max-h-10 z-[2] mx-1 max-md:mt-2 md:max-w-[100px] md:max-h-[32px] md:ml-0'>
                    <span className='inline-flex items-center justify-center overflow-hidden h-10 w-[120px] md:h-8 md:w-[100px]'>
                        <Image
                            src={`https://assets.x-kom.pl/public-spa/xkom/32fe7e427a8819cc.svg`}
                            width={136}
                            height={40}
                            loading='lazy'
                            alt='Google Play'
                            title='Google Play'
                            className='object-contain w-full h-full'
                        />
                    </span>
                </Link>

                <Link href={`/`} className='max-h-10 z-[2] mx-1 max-md:mt-2 md:max-w-[100px] md:max-h-[32px] md:ml-0'>
                    <span className='inline-flex items-center justify-center overflow-hidden h-10 w-[120px] md:h-8 md:w-[100px]'>
                        <Image
                            src={`https://assets.x-kom.pl/public-spa/xkom/de8bbc5c651b4ad9.svg`}
                            width={136}
                            height={40}
                            loading='lazy'
                            alt='App Gallery'
                            title='App Gallery'
                            className='object-contain w-full h-full'
                        />
                    </span>
                </Link>
            </div>
        </div>

        {/*  Img Dektop */}
        <div className='hidden mx-auto lg:items-end lg:flex'>
            <span className='hidden items-center justify-center h-[136px] overflow-hidden md:block md:mx-auto lg:flex lg:items-end'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png`}
                    width={441}
                    height={288}
                    loading='lazy'
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Telefony'
                    title='Aplikacja mobilna'
                />
            </span>
        </div>

        {/*  Img Tablet */}
        <div className='hidden mx-auto md:flex md:items-end lg:hidden'>
            <span className='hidden h-[164px] overflow-hidden md:block md:mx-auto'>
                <Image
                    src={`https://assets.x-kom.pl/public-spa/xkom/dc932e41baa41f9d.png`}
                    width={441}
                    height={288}
                    loading='lazy'
                    className='inline-block w-auto h-auto max-w-full max-h-full'
                    alt='Telefony'
                    title='Aplikacja mobilna'
                />
            </span>
        </div>
    </div>
)


const FooterExpandNavigation = ({ items }: { items: footerItem[] }) => {
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
                <Fragment key={item.title + Math.random()}>
                    <div onClick={() => handleShowAcc(index)} className='flex justify-between items-center cursor-pointer border-t border-[#ddd] w-full h-16'>
                        <h3 className='pr-2 text-lg font-bold'>{item.title}</h3>
                        <span className={`${expandIndex === index && isShow ? '-rotate-180' : 'rotate-0'} inline-block w-8 h-8 mr-2 transition-transform duration-300 `}>
                            <MdOutlineKeyboardArrowDown className='w-full h-full' />
                        </span>
                    </div>

                    <div className={`${expandIndex === index && isShow ? 'block max-h-[400px]' : 'hidden max-h-0'} overflow-hidden transition-all duration-500`}>
                        <div className='flex flex-col text-base last:mb-4'>
                            {item.links.map(link => (
                                <Link href={`/`} className='px-4 py-3 leading-6 hover:underline underline-offset-2 '>{link.name}</Link>

                            ))}

                        </div>
                    </div>

                </Fragment>
            )))}

        </div >
    )

}

const FooterNavigation = ({ items }: { items: footerItem[] }) => {
    return (
        <div className='hidden md:flex flex-grow-[3] shrink'>
            {items.map(item => (

                <div key={item.title + Math.random()} className='flex flex-col flex-grow lg:px-2'>
                    <h3 title={item.title} className='mb-4 text-lg font-bold'>{item.title}</h3>
                    <ul className='flex flex-col list-none '>
                        {item.links.map(link => (
                            <li className='w-full mb-4'>
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

const SaleMasterBox = () => (
    <Link href={`/`} className='flex flex-col justify-center group items-center w-full pt-5 pb-6 rounded-2xl bg-[#f9f9f9] shadow-sm-xCom transition-shadow duration-300 hover:shadow-xCom md:p-0 md:flex-row md:justify-between lg:py-4 lg:px-10 lg:mt-4'>

        <div className='flex flex-col items-center justify-center md:items-start md:py-6 md:px-8 lg:p-0 lg:items-center lg:w-full lg:flex-row lg:justify-between'>

            <span title='Program partnerski SalesMaster' className='inline-block h-10 overflow-hidden'>

                <svg style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 40">
                    <g fill="none" fill-rule="evenodd"><path fill="#4D4D4D" d="M19.806 6.54c.284 0 .51.088.679.266.168.178.252.419.252.721v2.057c.94.089 1.844.311 2.712.667.87.356 1.605.845 2.208 1.468.301.25.453.553.453.908 0 .25-.075.468-.227.655-.15.186-.323.28-.518.28-.231 0-.48-.097-.745-.294-.78-.64-1.538-1.112-2.274-1.414-.736-.303-1.591-.455-2.566-.455-1.348 0-2.416.312-3.205.935-.79.623-1.183 1.469-1.183 2.537 0 .747.217 1.344.65 1.788.435.446.972.788 1.61 1.03.638.24 1.516.502 2.633.787 1.294.32 2.335.64 3.126.961.788.32 1.457.806 2.007 1.455.549.65.825 1.519.825 2.604 0 1.388-.502 2.559-1.503 3.511-1.002.952-2.328 1.527-3.976 1.722v2.057c0 .302-.085.542-.253.72-.168.178-.395.268-.678.268-.284 0-.51-.09-.679-.268-.168-.178-.252-.418-.252-.72v-2.03a11.682 11.682 0 0 1-3.138-.641c-1.01-.356-1.87-.863-2.58-1.522a1.116 1.116 0 0 1-.426-.908c0-.249.07-.467.213-.654.142-.187.31-.28.505-.28.213 0 .47.097.771.293 1.773 1.247 3.555 1.87 5.347 1.87 1.4 0 2.49-.293 3.271-.881.78-.588 1.17-1.425 1.17-2.51 0-.641-.2-1.162-.598-1.562-.4-.402-.905-.713-1.516-.935-.612-.222-1.44-.459-2.487-.708-1.348-.337-2.433-.676-3.258-1.014a5.442 5.442 0 0 1-2.114-1.549c-.586-.694-.878-1.629-.878-2.804 0-.962.239-1.83.718-2.604.478-.774 1.148-1.402 2.008-1.882.86-.481 1.849-.774 2.966-.881V7.527a.99.99 0 0 1 .265-.708.88.88 0 0 1 .665-.28zm16.035 21.59c-.692.417-1.49.626-2.394.626-.833 0-1.6-.17-2.3-.507a4.121 4.121 0 0 1-1.663-1.415 3.507 3.507 0 0 1-.61-2.003c0-.979.247-1.74.743-2.283.497-.543 1.312-.934 2.448-1.176 1.134-.24 2.712-.36 4.733-.36h.585v-.88c0-1.07-.216-1.852-.651-2.35-.434-.498-1.14-.748-2.114-.748-1.206 0-2.43.33-3.671.987-.478.304-.816.455-1.01.455a.681.681 0 0 1-.533-.241.89.89 0 0 1-.212-.614c0-.249.075-.467.226-.654.15-.187.395-.378.731-.575a8.596 8.596 0 0 1 2.115-.84 9.341 9.341 0 0 1 2.354-.307c3.245 0 4.867 1.709 4.867 5.126v7.264c0 .32-.093.579-.28.774-.186.196-.438.293-.758.293-.319 0-.577-.097-.771-.293-.195-.195-.293-.454-.293-.774v-1.283l-.119.25a3.786 3.786 0 0 1-1.423 1.527zm18.5-12.885c1.684 0 3.023.551 4.016 1.655.992 1.104 1.49 2.6 1.49 4.486 0 .357-.072.614-.213.774-.143.16-.373.24-.692.24h-8.563c.159 3.063 1.603 4.594 4.334 4.594.692 0 1.285-.094 1.782-.28a11.775 11.775 0 0 0 1.596-.761c.461-.268.771-.401.93-.401.195 0 .364.08.506.24a.89.89 0 0 1 .213.614c0 .446-.311.854-.93 1.229a8.048 8.048 0 0 1-2.023.841c-.71.187-1.4.28-2.074.28-2.004 0-3.586-.597-4.747-1.789-1.162-1.192-1.742-2.839-1.742-4.94 0-1.335.257-2.514.771-3.538s1.236-1.82 2.168-2.39c.93-.57 1.99-.854 3.177-.854zm13.12 0c.691 0 1.36.093 2.008.28a5.98 5.98 0 0 1 1.715.788c.602.427.904.872.904 1.335 0 .231-.07.427-.212.587a.658.658 0 0 1-.506.24c-.212 0-.532-.15-.957-.454a8.504 8.504 0 0 0-1.41-.747c-.443-.178-.993-.267-1.649-.267-.833 0-1.503.187-2.007.561-.506.373-.759.872-.759 1.495 0 .392.093.707.28.948.185.24.496.454.93.64.435.187 1.06.37 1.876.548 1.205.267 2.14.561 2.805.881.665.32 1.139.713 1.423 1.175.284.463.425 1.05.425 1.763 0 1.121-.469 2.025-1.408 2.71-.941.686-2.182 1.028-3.724 1.028a9.027 9.027 0 0 1-2.328-.293 7.037 7.037 0 0 1-1.954-.828c-.32-.214-.546-.415-.678-.601a1.144 1.144 0 0 1-.2-.681c0-.232.067-.423.2-.575a.66.66 0 0 1 .518-.227c.213 0 .523.134.931.402.532.32 1.06.574 1.583.76.522.187 1.174.28 1.954.28.958 0 1.702-.168 2.235-.507.53-.338.798-.827.798-1.468 0-.392-.099-.708-.294-.948-.195-.24-.53-.454-1.01-.64-.478-.187-1.179-.379-2.1-.575-1.562-.338-2.679-.792-3.352-1.362-.674-.57-1.011-1.344-1.011-2.324 0-.764.214-1.44.638-2.029.427-.587 1.015-1.05 1.769-1.387.754-.34 1.609-.508 2.566-.508zM44.2 9.61c.301 0 .553.094.758.28.204.188.306.45.306.788v16.957c0 .337-.102.6-.306.787-.205.187-.457.28-.758.28-.319 0-.581-.093-.785-.28-.204-.186-.306-.45-.306-.787V10.678c0-.338.102-.6.306-.788.204-.186.466-.28.785-.28zm-6.817 12.791h-.479c-1.56 0-2.748.067-3.563.2-.816.134-1.397.356-1.742.668-.347.311-.52.77-.52 1.375 0 .694.254 1.268.759 1.722.506.454 1.14.68 1.902.68 1.064 0 1.937-.36 2.62-1.08.681-.721 1.023-1.651 1.023-2.79V22.4zm16.984-5.474c-1.134 0-2.043.356-2.726 1.068-.683.712-1.085 1.718-1.21 3.018h7.527c-.035-1.318-.364-2.328-.985-3.031-.62-.704-1.488-1.055-2.606-1.055z"></path><path fill="#FA0064" d="M7.308 32.659a17.678 17.678 0 0 0 9.823 5.026 17.732 17.732 0 0 0 14.543-4.223 1.04 1.04 0 0 1 1.472.096 1.05 1.05 0 0 1-.095 1.479A19.794 19.794 0 0 1 19.935 40c-1.039 0-2.083-.081-3.128-.245A19.751 19.751 0 0 1 5.832 34.14a1.05 1.05 0 0 1 0-1.481 1.04 1.04 0 0 1 1.476 0zM115.81 15.245c.692 0 1.361.093 2.009.28a5.98 5.98 0 0 1 1.715.788c.602.427.904.872.904 1.335 0 .231-.07.427-.212.587a.658.658 0 0 1-.506.24c-.213 0-.532-.15-.957-.454a8.504 8.504 0 0 0-1.41-.747c-.443-.178-.993-.267-1.65-.267-.833 0-1.502.187-2.007.561-.505.373-.758.872-.758 1.495 0 .392.093.707.28.948.185.24.495.454.93.64.435.187 1.059.37 1.876.548 1.205.267 2.14.561 2.805.881.665.32 1.139.713 1.423 1.175.283.463.425 1.05.425 1.763 0 1.121-.47 2.025-1.409 2.71-.94.686-2.18 1.028-3.724 1.028a9.027 9.027 0 0 1-2.327-.293 7.037 7.037 0 0 1-1.954-.828c-.32-.214-.546-.415-.679-.601a1.144 1.144 0 0 1-.199-.681c0-.232.067-.423.2-.575a.66.66 0 0 1 .517-.227c.214 0 .524.134.931.402a8.86 8.86 0 0 0 1.584.76c.522.187 1.174.28 1.954.28.957 0 1.702-.168 2.234-.507.532-.338.798-.827.798-1.468 0-.392-.098-.708-.293-.948-.195-.24-.531-.454-1.01-.64-.478-.187-1.179-.379-2.1-.575-1.562-.338-2.679-.792-3.353-1.362-.674-.57-1.01-1.344-1.01-2.324 0-.764.213-1.44.638-2.029.426-.587 1.015-1.05 1.769-1.387.753-.34 1.609-.508 2.566-.508zm22.298 0c1.684 0 3.023.551 4.016 1.655.992 1.104 1.49 2.6 1.49 4.486 0 .357-.071.614-.213.774-.143.16-.373.24-.692.24h-8.563c.16 3.063 1.603 4.594 4.335 4.594.691 0 1.284-.094 1.781-.28a11.775 11.775 0 0 0 1.596-.761c.46-.268.772-.401.93-.401.196 0 .364.08.507.24a.89.89 0 0 1 .212.614c0 .446-.31.854-.93 1.229a8.048 8.048 0 0 1-2.022.841c-.71.187-1.402.28-2.074.28-2.005 0-3.587-.597-4.748-1.789-1.162-1.192-1.742-2.839-1.742-4.94 0-1.335.257-2.514.771-3.538s1.237-1.82 2.168-2.39c.931-.57 1.99-.854 3.178-.854zm22.51 0c.692 0 1.362.093 2.01.28a5.98 5.98 0 0 1 1.715.788c.602.427.904.872.904 1.335 0 .231-.071.427-.213.587a.658.658 0 0 1-.505.24c-.213 0-.533-.15-.958-.454a8.548 8.548 0 0 0-1.41-.747c-.443-.178-.992-.267-1.649-.267-.833 0-1.502.187-2.007.561-.506.373-.758.872-.758 1.495 0 .392.093.707.279.948.186.24.496.454.93.64.435.187 1.06.37 1.875.548 1.206.267 2.142.561 2.807.881.665.32 1.138.713 1.423 1.175.283.463.425 1.05.425 1.763 0 1.121-.47 2.025-1.41 2.71-.94.686-2.18 1.028-3.723 1.028a9.027 9.027 0 0 1-2.327-.293 7.037 7.037 0 0 1-1.955-.828c-.32-.214-.545-.415-.678-.601a1.144 1.144 0 0 1-.2-.681c0-.232.067-.423.2-.575a.66.66 0 0 1 .518-.227c.214 0 .523.134.93.402.533.32 1.06.574 1.583.76.524.187 1.175.28 1.956.28.957 0 1.702-.168 2.234-.507.531-.338.798-.827.798-1.468 0-.392-.099-.708-.293-.948-.195-.24-.532-.454-1.01-.64-.479-.187-1.18-.379-2.101-.575-1.562-.338-2.678-.792-3.352-1.362-.674-.57-1.01-1.344-1.01-2.324 0-.764.213-1.44.638-2.029.425-.587 1.015-1.05 1.768-1.387.754-.34 1.61-.508 2.567-.508zm-57.821 0c3.245 0 4.867 1.709 4.867 5.126v7.264c0 .32-.093.579-.28.774-.186.196-.438.293-.758.293-.319 0-.577-.097-.771-.293-.195-.195-.292-.454-.292-.774v-1.283a3.817 3.817 0 0 1-1.543 1.777c-.692.418-1.489.627-2.394.627-.833 0-1.6-.17-2.3-.507a4.11 4.11 0 0 1-1.662-1.415 3.5 3.5 0 0 1-.612-2.003c0-.979.248-1.74.744-2.283.497-.543 1.312-.934 2.448-1.176 1.134-.24 2.712-.36 4.733-.36h.586v-.88c0-1.07-.217-1.852-.652-2.35-.434-.498-1.14-.748-2.114-.748-1.206 0-2.43.33-3.67.987-.479.304-.816.455-1.011.455a.681.681 0 0 1-.533-.241.89.89 0 0 1-.212-.614c0-.249.075-.467.227-.654.15-.187.394-.378.73-.575a8.596 8.596 0 0 1 2.115-.84 9.341 9.341 0 0 1 2.354-.307zm23.258-3.766c.319 0 .576.094.771.281.195.186.293.45.293.787v3.018h2.951c.284 0 .51.08.678.24.169.16.253.374.253.64 0 .25-.084.45-.253.602-.168.151-.394.227-.678.227h-2.951v6.81c0 .979.199 1.686.598 2.122.399.437.997.681 1.795.734l.719.054c.62.053.93.339.93.854 0 .303-.11.53-.333.681-.221.151-.554.21-.997.174l-.718-.054c-1.419-.106-2.465-.534-3.138-1.28-.674-.749-1.011-1.88-1.011-3.393v-6.702h-1.782c-.3 0-.537-.076-.705-.227a.768.768 0 0 1-.252-.601c0-.267.084-.48.252-.641.168-.16.404-.24.705-.24h1.782v-3.018c0-.338.097-.601.293-.787.195-.187.46-.28.798-.28zm28.096 4.727c0 .285-.08.512-.239.68-.16.17-.435.272-.824.307l-.798.08c-1.189.108-2.071.53-2.648 1.27-.575.738-.864 1.606-.864 2.603v6.489c0 .356-.097.623-.292.8-.196.178-.453.268-.771.268-.32 0-.581-.094-.785-.28-.204-.187-.307-.45-.307-.788v-11.27c0-.337.108-.6.32-.787.213-.187.47-.28.772-.28.283 0 .522.093.718.28.195.188.292.441.292.761v1.496c.373-.784.9-1.38 1.583-1.79.682-.408 1.467-.65 2.353-.72l.372-.027c.745-.053 1.118.249 1.118.908zM92.416 9.61c.336 0 .598.103.784.307.186.206.279.477.279.815v16.903c0 .32-.089.579-.266.774-.177.196-.425.294-.744.294-.32 0-.56-.098-.719-.294-.159-.195-.239-.454-.239-.774V13.989l-5.77 11.11c-.25.516-.613.774-1.091.774-.461 0-.824-.258-1.09-.775l-5.799-10.975v13.512c0 .32-.084.579-.252.774-.17.196-.413.294-.732.294s-.568-.098-.745-.294c-.177-.195-.265-.454-.265-.774V10.732c0-.338.097-.61.292-.815.195-.204.46-.307.798-.307.444 0 .798.258 1.063.775l6.757 13.004 6.675-13.004c.142-.285.297-.486.465-.601.17-.116.368-.174.599-.174zm13.146 12.791h-.48c-1.559 0-2.748.067-3.563.2-.816.134-1.397.356-1.742.668-.346.311-.52.77-.52 1.375 0 .694.254 1.268.759 1.722.506.454 1.14.68 1.902.68 1.064 0 1.937-.36 2.62-1.08.682-.721 1.024-1.651 1.024-2.79V22.4zm32.571-5.474c-1.134 0-2.043.356-2.725 1.068-.683.712-1.086 1.718-1.211 3.018h7.527c-.035-1.318-.364-2.328-.985-3.031-.62-.704-1.488-1.055-2.606-1.055zM31.304 3.584a20.183 20.183 0 0 1 4.785 4.732 1.05 1.05 0 0 1-.235 1.462 1.04 1.04 0 0 1-1.457-.236 18.127 18.127 0 0 0-4.287-4.24 1.05 1.05 0 0 1-.258-1.458 1.04 1.04 0 0 1 1.452-.26z"></path><path fill="#BE0064" d="M30.706 5.49c-.205 0-.415-.06-.596-.188a17.733 17.733 0 0 0-3.823-2.033 1.049 1.049 0 0 1-.602-1.352c.206-.54.807-.81 1.347-.604a19.835 19.835 0 0 1 4.272 2.27c.472.332.589.985.259 1.46a1.042 1.042 0 0 1-.857.448"></path><path fill="#4D4D4D" d="M27.032 1.312a1.049 1.049 0 0 1-.744 1.958 17.814 17.814 0 0 0-18.98 4.068l-.012.01-.338.35a17.8 17.8 0 0 0-3.495 5.384 1.043 1.043 0 0 1-1.364.563 1.05 1.05 0 0 1-.562-1.37 19.899 19.899 0 0 1 4.295-6.418l.01-.01.28-.275a19.898 19.898 0 0 1 20.91-4.26z"></path><path fill="#BE0064" d="M6.57 34.447c-.267 0-.533-.103-.738-.307C1.31 29.6-.773 23.102.26 16.757c.25-1.54.68-3.048 1.278-4.483a1.042 1.042 0 0 1 1.365-.562c.532.224.783.837.56 1.371a17.9 17.9 0 0 0-1.144 4.013c-.925 5.68.94 11.498 4.99 15.563a1.05 1.05 0 0 1 0 1.481 1.04 1.04 0 0 1-.739.307"></path></g></svg>
            </span>

            <p className='flex flex-col my-3 mx-[10px] text-[#4d4d4d] md:text-left md:w-[326px] md:mx-0 lg:flex-row lg:whitespace-pre lg:m-0 lg:text-lg lg:w-auto'>
                <span className='font-bold'>Polecaj i zarabiaj. </span>
                Dołącz do naszego programu partnerskiego
            </p>


            <span className='flex items-center justify-center border border-[#be0064] rounded-[20px] py-3 px-6 text-base text-[#be0064] h-10 transition-colors duration-300  group-hover:text-white group-hover:bg-[#be0064]'>
                Zacznij zarabiać
            </span>

        </div>

        <span className='hidden overflow-hidden h-[152px] md:block md:mx-auto lg:hidden lg:mx-0'>
            <Image
                src={`https://assets.x-kom.pl/public-spa/xkom/29edf7e03b09236a.png`}
                width={169}
                height={152}
                loading='lazy'
                alt='SalesMaster'
                title='SalesMaster'
                className='inline-block w-auto h-auto max-w-full max-h-full'
            />
        </span>
    </Link>
)

const Footer = () => {
    return (
        <footer>
            {/* Foot Layout page */}
            <div className='max-w-full w-[calc(100%-32px)] mx-auto md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]'>

                {/* Top Section Newsletter , Appmobile && Partner program */}
                <div className='flex flex-col mb-10 lg:flex-row lg:flex-wrap'>
                    {/* NewsLetter */}
                    <Newsletter />
                    {/* Mobile App Box */}
                    <MobileAppBox />
                    {/* Sales Master */}
                    <SaleMasterBox />
                </div>

                {/* Bottom Section Orders, Promotion, x-kom, Contact */}
                <div>
                    {/* Orders... */}
                    <div className='flex flex-col-reverse justify-between pb-[52px] md:flex-row' >
                        {/* Orders ... */}
                        <FooterExpandNavigation items={footerItems} />


                        {/* Desktop/Tablet Navigation*/}
                        <FooterNavigation items={footerItems} />


                        {/* Contact */}
                        <div className='md:flex-1'>
                            {/* Address */}
                            <div>
                                <p title='Kontakt' className='mb-5 text-lg font-bold'>Kontakt</p>
                                <address className='flex flex-col text-[#4d4d4d] font-lato'>
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
                                <Link href={`/`}>
                                    <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                        <Image
                                            src={facebookIcon}
                                            height={24}
                                            width={24}
                                            alt='facebook'
                                            className='w-6 h-6'
                                        />
                                    </span>
                                </Link>
                                <Link href={`/`}>
                                    <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                        <Image
                                            src={facebookIcon}
                                            height={24}
                                            width={24}
                                            alt='facebook'
                                            className='w-6 h-6'
                                        />
                                    </span>
                                </Link>
                                <Link href={`/`}>
                                    <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                        <Image
                                            src={facebookIcon}
                                            height={24}
                                            width={24}
                                            alt='facebook'
                                            className='w-6 h-6'
                                        />
                                    </span>
                                </Link>
                                <Link href={`/`}>
                                    <span title='facebook' className='flex items-center justify-center w-12 h-12 transition duration-300 grayscale hover:grayscale-0'>
                                        <Image
                                            src={facebookIcon}
                                            height={24}
                                            width={24}
                                            alt='facebook'
                                            className='w-6 h-6'
                                        />
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>



                    {/* Companies.. */}
                    <div className='flex flex-col'>

                        <div className='flex flex-wrap justify-center mb-6'>

                            <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 max-md:mb-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>
                            <span className='inline-flex items-center justify-center px-2 h-9 max-md:basis-1/5'>
                                <Image
                                    src={'https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png'}
                                    width={36}
                                    height={36}
                                    alt='blik'
                                    loading='lazy'
                                    title='Blik'
                                    className='inline-block w-auto h-auto max-w-full max-h-full'
                                />
                            </span>


                        </div>



                        <div className='text-center text-[#4d4d4d] mx-auto mb-11 max-w-full w-[calc(100%-32px)] md:w-[calc(100%-48px)] md:mb-4 lg:mb-7 lg:w-[calc(100%-64px)] lg:max-w-[1156px]'>
                            &copy; x-kom Clone 2023-2023
                        </div>
                    </div>
                </div>


            </div>
        </footer >
    )
}

export default Footer