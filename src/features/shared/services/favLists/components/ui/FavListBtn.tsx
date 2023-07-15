'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

import { cn } from '@/lib/utils'

interface IconProp {
  isLiked: boolean
  isLoading: boolean
}

const Icon = ({ isLiked, isLoading }: IconProp) => {
  return (
    <span className="flex h-5 w-5 items-center justify-center overflow-hidden">
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
      ) : isLiked ? (
        <IoMdHeart className="h-full w-full text-[#BE0064]" />
      ) : (
        <IoMdHeartEmpty className="h-full w-full text-[#BE0064]" />
      )}
    </span>
  )
}

const buttonVariants = cva('relative cursor-pointer items-center border-none bg-transparent', {
  variants: {
    variant: {
      FavLong: 'inline-flex h-[48px] w-full  justify-start px-5 py-2 text-[#4d4d4d]',

      FavDesktop:
        ' ml-1 hidden h-[32px] w-[32px] justify-center rounded-full transition-colors duration-200 hover:bg-[#ddd] md:flex',

      FavGallery:
        'relative z-[5] mt-2 inline-flex h-10 w-10 justify-center rounded-full bg-white shadow-sm-xCom transition-colors duration-200 hover:bg-[#ddd]',
    },
  },
  defaultVariants: {
    variant: 'FavLong',
  },
})

interface FavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading: boolean
  isLiked: boolean
}

export const FavListBtn: FC<FavButtonProps> = ({ className, variant, isLiked, isLoading, ...props }) => {
  return variant === 'FavLong' ? (
    <button
      disabled={isLoading ? true : false}
      title="Zapisz jako liście"
      className={cn(buttonVariants({ variant, className }), {
        'text-gray-400': isLoading,
      })}
      {...props}
    >
      <Icon isLiked={isLiked} isLoading={isLoading} />

      <span className="flex flex-col">
        <span className="whitespace-nowrap py-3">{isLiked ? 'Edytuj na liście' : 'Zapisz na liście'}</span>
      </span>
    </button>
  ) : variant === 'FavDesktop' || variant === 'FavGallery' ? (
    <button disabled={isLoading ? true : false} className={buttonVariants({ variant, className })} {...props}>
      <Icon isLiked={isLiked} isLoading={isLoading} />

      <div
        className={cn(
          'absolute left-1/2 top-1/2 z-[10] h-10 w-10  -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[#BE0064]',
          {
            'animate-pulsOnceClick': isLiked,
          }
        )}
      />
    </button>
  ) : null
}
