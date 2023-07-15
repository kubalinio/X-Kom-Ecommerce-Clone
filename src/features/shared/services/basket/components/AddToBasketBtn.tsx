'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

import { cn } from '@/lib/utils'

interface IconProp {
  isLoading: boolean
}

const Icon = ({ isLoading }: IconProp) => {
  return isLoading ? (
    <Loader2 className="h-5 w-5 animate-spin" />
  ) : (
    <span className="h-6 w-6">
      <MdOutlineAddShoppingCart className="h-full w-full" />
    </span>
  )
}

const buttonVariants = cva('h-9 flex items-center justify-center rounded-full transition-colors duration-300', {
  variants: {
    variant: {
      sm: 'w-9 border border-[#119e00] bg-white text-[#119e00] hover:bg-[#109e00] hover:text-white focus:bg-[#1f8014] focus:text-white ',

      long: 'w-full bg-[#119e00] px-2 text-white hover:bg-[#1f8014] focus:bg-[#1f8014]',
    },
  },
  defaultVariants: {
    variant: 'sm',
  },
})

interface BasketBtn extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading: boolean
}

export const AddToBasketBtn: FC<BasketBtn> = ({ className, variant, isLoading, ...props }) => {
  return variant === 'sm' ? (
    <button disabled={isLoading ? true : false} className={cn(buttonVariants({ variant, className }))} {...props}>
      <Icon isLoading={isLoading} />
    </button>
  ) : variant === 'long' ? (
    <button
      title="Dodaj do koszyka"
      disabled={isLoading ? true : false}
      className={buttonVariants({ variant, className })}
      {...props}
    >
      <span className="flex items-center justify-center text-white">
        <Icon isLoading={isLoading} />
        <span>Dodaj do koszyka</span>
      </span>
    </button>
  ) : null
}
