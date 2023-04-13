import Link from "next/link"
import { TfiHeadphoneAlt } from "react-icons/tfi"


export const Information = () => {
    return (
        <div className='pb-4 sm:flex sm:items-center sm:justify-between sm:w-full lg:block lg:w-fit'>

            <div className='flex items-center text-[18px] font-bold'>
                Masz pytania?
                <div className='inline-block ml-4'>
                    <Link href='tel:11 234 22 22' className='flex items-center text-[#4d4d4d] font-normal'>
                        <span className='h-[20px] w-[20px] mr-2'>
                            <TfiHeadphoneAlt className='w-full h-full text-[20px]' />
                        </span>

                        <div>
                            <span>
                                11 234 22 22
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='flex items-center pt-1 text-[#4d4d4d]'>
                <Link href='/' className='pr-4'>
                    Regulamin
                </Link>
                <Link href='/'>
                    Polityka prywatności
                </Link>
            </div>
        </div>
    )
}

