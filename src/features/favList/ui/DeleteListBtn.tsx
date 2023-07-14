import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-start whitespace-nowrap bg-transparent w-full py-3 px-4 text-[#2a2a2a] hover:bg-[#f5f5f5] transition-colors duration-200',
  {
    variants: {
      variant: {
        default: '[&_span]:first:mr-3',
        mobile: '[&_span]:first:mr-3',
        desktop: ' [&_span]:first:mr-2',
      },
      size: {
        default: 'rounded-none h-[48px]',
        sm: 'rounded-none h-[48px]',
        lg: 'rounded-full h-[32px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const DeleteListBtn: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return (
    <button title="Usuń listę" className={cn(buttonVariants({ variant, size, className, ...props }))} {...props}>
      <span className="inline-block h-6 w-6 overflow-hidden ">
        <HiOutlineTrash className="h-full w-full text-xl" />
      </span>

      <span>
        <span>Usuń listę</span>
      </span>
    </button>
  )
}
