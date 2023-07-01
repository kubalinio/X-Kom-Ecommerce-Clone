'use client'
import Link from 'next/link'

import { BasketInfo } from './BasketInfo'

export const BasketBottom = ({
  totalAmount,
  isDesktop,
  onClick,
}: {
  totalAmount: number
  isDesktop: boolean
  onClick: () => void
}) => (
  <>
    <div className="flex justify-between text-base font-bold">
      <span>Do zapłaty</span>
      {/* TODO */}
      <span>{totalAmount.toFixed(2).replace('.', ',')} zł</span>
    </div>

    <Link
      onClick={() => onClick()}
      href="/koszyk"
      className="mt-3 flex min-h-[40px] w-full items-center justify-center rounded-full bg-green-600 px-4 py-3 text-white hover:bg-green-700"
    >
      Przejdź do koszyka
    </Link>

    {isDesktop ? <BasketInfo /> : ''}
  </>
)
