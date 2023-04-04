import Image from 'next/image'
import Link from 'next/link'
import salesMasterIcon from '../../../public/icons/salesMasterIcon.svg'

const SaleMasterBox = () => {
    return (
        <Link href={`/`} className='flex flex-col justify-center group items-center w-full pt-5 pb-6 rounded-2xl bg-[#f9f9f9] shadow-sm-xCom transition-shadow duration-300 hover:shadow-xCom md:p-0 md:flex-row md:justify-between lg:py-4 lg:px-10 lg:mt-4'>

            <div className='flex flex-col items-center justify-center md:items-start md:py-6 md:px-8 lg:p-0 lg:items-center lg:w-full lg:flex-row lg:justify-between'>

                <span title='Program partnerski SalesMaster' className='inline-block h-10 overflow-hidden'>
                    <Image
                        src={salesMasterIcon}
                        alt='logo Sales Master'
                        width={120}
                        height={40}

                    />

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
}

export default SaleMasterBox