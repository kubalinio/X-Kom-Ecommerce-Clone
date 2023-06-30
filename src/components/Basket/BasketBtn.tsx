import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

const Icon = ({ icon }: { icon: ReactNode }) => (
  <span className="flex h-full w-full items-center justify-center text-gray-700">{icon}</span>
)

interface BasketBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isHover: boolean
  isScrollDown: boolean
  isLoading: boolean
  icon: ReactNode
  basketQuantity: number
}

export const BasketBtn: FC<BasketBtnProps> = ({ isHover, basketQuantity, icon, isScrollDown, isLoading }) => {
  return (
    <div
      className={cn('flex min-w-[64px] cursor-pointer items-center justify-center md:min-w-[88px]', {
        'rounded-t-lg shadow-xCom': isHover,
      })}
    >
      <Link href="/koszyk" className="flex h-full flex-col items-center justify-center max-lg:pointer-events-none">
        <div className="relative flex h-7 w-7 flex-col items-center justify-center text-2xl md:h-8 md:w-8 2xl:text-3xl">
          {basketQuantity > 0 ? (
            <div className="absolute -right-2 top-0">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 p-1 text-xs text-white shadow-sm-xCom shadow-white">
                {isLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : basketQuantity || 0}
              </div>
            </div>
          ) : null}
          <Icon icon={icon} />
        </div>

        <span
          className={cn(
            'mt-1 whitespace-nowrap text-[10px] transition-all duration-500 lg:translate-y-0 lg:scale-100 lg:opacity-100',
            {
              'lg:h-0 lg:translate-y-[-20px] lg:scale-0 lg:opacity-0': isScrollDown,
            }
          )}
        >
          Koszyk
        </span>
      </Link>
    </div>
  )
}
