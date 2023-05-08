import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileAppBox = () => {
    return (
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
}

export default MobileAppBox