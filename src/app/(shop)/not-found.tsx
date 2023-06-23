'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ButtonPrimary } from '@/components/Buttons'

import image404 from '../../../public/Coding.png'

export default function NotFound() {
  const router = useRouter()
  return (
    <main className="mx-auto my-20 grid max-w-[1200px] grid-cols-1 items-center justify-items-center bg:grid-cols-2">
      {/* Picture */}
      <div className="col-start-1 col-end-1">
        <Image src={image404} width={340} height={300} alt="Coding" className="h-full w-full object-contain" />
      </div>

      {/* Context */}
      <div className="col-start-1 col-end-1 p-1.5 bg:col-start-2 bg:col-end-2">
        <h5 className="my-3 text-center text-gray-500">Error 404</h5>

        <h1 className="mb-3 mt-5 text-center text-3xl/8 font-bold bg:text-4xl/10">
          <span className="text-blue-600">Ups! </span>
          Strona w<span className="text-blue-600"> Budowie</span>
        </h1>

        <h5 className="my-2 text-center text-gray-500">lub</h5>

        <h4 className="pb-5 text-center text-lg text-[#1d1d1d]">Została prawdopodobnie usunięta / przeniesiona</h4>

        <ButtonPrimary onClick={() => router.push('/')} slug={''}>
          Przejdź do strony głównej
        </ButtonPrimary>
      </div>
    </main>
  )
}
