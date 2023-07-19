import Image from 'next/image'


type Props = {
  finished: boolean
  image: string
  promotionGainTextLines?: {
    title: string
    value: string
  }
  title?: string
}

export const HotShotProductDetail = ({ finished, image, promotionGainTextLines, title }: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-full">
      {/* Photo */}
      <div className="relative flex flex-col gap-2">
        <h1 className="text-[26px] font-bold leading-7">Gorący strzał</h1>
        <div
          className={`inline-flex h-[220px] w-[262px] items-center justify-center self-center overflow-hidden ${finished ? 'opacity-60 grayscale-[50%]' : 'opacity-100 grayscale-0'
            }`}
        >
          <Image
            src={image}
            alt={title ?? 'image'}
            width={180}
            height={220}
            className="w-auto h-auto max-w-full max-h-full scale-150"
          />
        </div>
        {/* Position */}
        <div className="absolute right-0 top-2 md:hidden lg:block">
          <div className="w-[100px] rounded-lg bg-[#707070] px-2 py-[6px] text-center text-white">
            <div className="text-sm leading-4">{promotionGainTextLines?.title}</div>
            <span className="text-2xl leading-7">{promotionGainTextLines?.value}</span>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="mt-2 text-center">
        <span className="max-h-[58px] text-center text-2xl/7">
          <span className="w-full line-clamp-2 text-ellipsis">{title}</span>
        </span>
      </div>
    </div>
  )
}
