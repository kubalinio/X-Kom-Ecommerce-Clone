'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { cn } from '@/lib/utils'

const Icon = () => {
  return (
    <span className="inline-block h-5 w-5">
      <HiOutlineTrash className="h-full w-full text-xl" />
    </span>
  )
}

const buttonVariants = cva('h-9 flex items-center justify-center rounded-full transition-colors duration-300', {
  variants: {
    variant: {
      sm: 'ml-1 hidden h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent transition-colors duration-200 hover:bg-[#ddd] md:inline-flex',
      long: '',
    },
  },
  defaultVariants: {
    variant: 'sm',
  },
})

interface BasketBtn extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading: boolean
}

export const DeleteBasketBtn: FC<BasketBtn> = ({ className, variant, isLoading, ...props }) => {
  return variant === 'sm' ? (
    <button disabled={isLoading ? true : false} className={cn(buttonVariants({ variant, className }))} {...props}>
      <Icon />
    </button>
  ) : variant === 'long' ? (
    <button
      title="Usuń z koszyka"
      disabled={isLoading ? true : false}
      className={buttonVariants({ variant, className })}
      {...props}
    >
      <span className="flex items-center justify-center text-white">
        <Icon />
        <span>Usuń z koszyka</span>
      </span>
    </button>
  ) : null
}
