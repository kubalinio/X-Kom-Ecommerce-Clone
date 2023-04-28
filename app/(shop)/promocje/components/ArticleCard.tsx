import { urlFor } from "@/lib/sanity.client"
import { Promotion } from "@/app/typings"
import Image from "next/image"
import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"

const CartImgContainer = ({ image, title }: {
    image: Promotion['image']
    title: Promotion['title']
}) => (
    <div className="relative flex items-center justify-center w-full pt-[75%] overflow-hidden rounded-t-lg">
        <span className="absolute inset-0 inline-flex items-center justify-center w-full overflow-hidden">
            <Image
                loading="lazy"
                src={`${urlFor(image).url()}`}
                width={800}
                height={600}
                alt={title}
                title={title}
                className='object-contain w-full h-auto'
            />
        </span>
    </div>
)


const CartContextContainer = ({ slogan, slug, title }: {
    slogan: Promotion['slogan']
    slug: Promotion['slug']
    title: Promotion['title']
}) => (

    <div className="flex flex-col justify-between p-4 pt-3 grow">
        {/* Text */}
        <div>
            <h3 className="mb-2 font-bold text-lg/7">
                {title}
            </h3>
            <p className="text-[#4d4d4d] whitespace-pre-line">
                {slogan}
            </p>
        </div>
        {/* Redirect */}
        <div className="mt-2">
            <Link
                href={`/${slug.current}`}
                className='flex items-center justify-center bg-[#f5f5f5] w-full rounded-full px-4 py-2 hover:bg-[#ddd]'
            >
                Sprawdź
                <span className="inline-block pl-1 w-7 h-7">
                    <MdKeyboardArrowRight className="w-full h-full text-3xl" />
                </span>
            </Link>
        </div>

    </div>
)


export const ArticleCard = ({ title, slogan, slug, image }: Promotion) => {
    return (
        <div className="flex flex-col mb-2 w-full rounded-lg border border-[#ddd] md:mr-4 md:mb-4 md:w-[calc((100%-16px)/2)] md:max-lg:even:mr-0 lg:w-[calc((100%-33px)/3)] lg:[&:nth-child(3n+3)]:mr-0">
            {/* Top */}
            <CartImgContainer image={image} title={title} />

            {/* Bottom */}
            <CartContextContainer slogan={slogan} slug={slug} title={title} />

        </div>
    )
}

