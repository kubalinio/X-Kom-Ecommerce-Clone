import Image from 'next/image'
import Link from 'next/link'
import image404 from '../public/Coding.png'
import { AuthButton } from './components/AuthButtons'

export default function NotFound() {
    return (
        <main className='grid grid-cols-1 justify-items-center items-center mx-auto my-20 max-w-[1200px] bg:grid-cols-2'>
            {/* Picture */}
            <div className='col-start-1 col-end-1'>
                <Image
                    src={image404}
                    width={340}
                    height={300}
                    alt='Coding'
                    className='object-contain w-full h-full'
                />
            </div>

            {/* Context */}
            <div className='col-start-1 col-end-1 p-1.5 bg:col-start-2 bg:col-end-2'>
                <h5 className='my-3 text-center text-gray-500'>Error 404</h5>

                <h1 className='mt-5 mb-3 font-bold text-center text-3xl/8 bg:text-4xl/10'>
                    <span className='text-blue-600'>Ups! </span>
                    Strona w
                    <span className='text-blue-600'> Budowie</span>
                </h1>

                <h5 className='my-2 text-center text-gray-500'>lub</h5>

                <h4 className='text-center text-[#1d1d1d] text-lg pb-5'>Została prawdopodobnie usunięta / przeniesiona</h4>

                <AuthButton slug={''}>
                    Przejdź do strony głównej
                </AuthButton>
            </div>

        </main>
    )
}