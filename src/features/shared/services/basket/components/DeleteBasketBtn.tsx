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

const buttonVariants = cva('flex items-center bg-transparent hover:bg-[#ddd] transition-colors duration-300', {
  variants: {
    variant: {
      sm: 'ml-1 hidden h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-none md:inline-flex',
      long: 'inline-flex h-[48px] w-full  justify-start px-5 py-2 text-[#4d4d4d]',
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
      <span className="flex items-center justify-center">
        <Icon />
        <span className="whitespace-nowrap py-3">Usuń z koszyka</span>
      </span>
    </button>
  ) : null
}
