import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { urlFor } from '@/lib/sanity.client'
import { Promotion } from '@/types/typings'

const CartImgContainer = ({ image, title }: { image: Promotion['image']; title: Promotion['title'] }) => (
  <div className="relative flex w-full items-center justify-center overflow-hidden rounded-t-lg pt-[75%]">
    <span className="absolute inset-0 inline-flex w-full items-center justify-center overflow-hidden">
      <Image
        loading="lazy"
        src={`${urlFor(image).url()}`}
        width={800}
        height={600}
        alt={title}
        title={title}
        className="h-auto w-full object-contain"
      />
    </span>
  </div>
)

const CartContextContainer = ({
  slogan,
  slug,
  title,
}: {
  slogan: Promotion['slogan']
  slug: Promotion['slug']
  title: Promotion['title']
}) => (
  <div className="flex grow flex-col justify-between p-4 pt-3">
    {/* Text */}
    <div>
      <h3 className="mb-2 text-lg/7 font-bold">{title}</h3>
      <p className="whitespace-pre-line text-[#4d4d4d]">{slogan}</p>
    </div>
    {/* Redirect */}
    <div className="mt-2">
      <Link
        href={`/${slug.current}`}
        className="flex w-full items-center justify-center rounded-full bg-[#f5f5f5] px-4 py-2 hover:bg-[#ddd]"
      >
        Sprawdź
        <span className="inline-block h-7 w-7 pl-1">
          <MdKeyboardArrowRight className="h-full w-full text-3xl" />
        </span>
      </Link>
    </div>
  </div>
)

export const ArticleCard = ({ title, slogan, slug, image }: Promotion) => {
  return (
    <div className="mb-2 flex w-full flex-col rounded-lg border border-[#ddd] md:mb-4 md:mr-4 md:w-[calc((100%-16px)/2)] md:max-lg:even:mr-0 lg:w-[calc((100%-33px)/3)] lg:[&:nth-child(3n+3)]:mr-0">
      {/* Top */}
      <CartImgContainer image={image} title={title} />

      {/* Bottom */}
      <CartContextContainer slogan={slogan} slug={slug} title={title} />
    </div>
  )
}
