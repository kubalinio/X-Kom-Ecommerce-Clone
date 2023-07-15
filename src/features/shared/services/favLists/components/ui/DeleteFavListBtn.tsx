import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-start whitespace-nowrap bg-transparent w-full py-3 px-4 text-[#2a2a2a] hover:bg-[#f5f5f5] transition-colors duration-200',
  {
    variants: {
      variant: {
        default: '[&_span]:first:mr-3 rounded-none h-[48px]',
        mobile: '[&_span]:first:mr-3 rounded-none h-[48px]',
        desktop: ' [&_span]:first:mr-2 rounded-full h-[32px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  text?: string
}

export const DeleteFavListBtn: FC<ButtonProps> = ({ className, variant, text, ...props }) => {
  return (
    <button
      title={!text ? 'Usuń listę' : `${text}`}
      className={cn(buttonVariants({ variant, className, ...props }))}
      {...props}
    >
      <span className="mr-3 inline-block h-6 w-6 overflow-hidden">
        <HiOutlineTrash className="h-full w-full text-xl" />
      </span>

      <span>
        <span>{!text ? 'Usuń listę' : `${text}`}</span>
      </span>
    </button>
  )
}
