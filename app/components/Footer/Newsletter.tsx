import Image from "next/image"

// Validation for Form to do
const Newsletter = () => {
    return (
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
                                <span className='flex items-center justify-center whitespace-nowrap'>
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
}

export default Newsletter