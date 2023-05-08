import { urlFor } from "@/lib/sanity.client";
import { BasketItem } from "@/store/basketSlice";
import Image from "next/image";
import Link from "next/link";

export const BasketProduct = ({ title, quantity, price, mainImage, slug, onClick }: BasketItem) => (
    <div className='py-3 border-b border-[#ddd] overflow-hidden'>
        <div className='flex'>
            <Link onClick={() => onClick!()} href={`/products/${slug}`}>
                <span className='inline-flex items-center justify-center h-[60px] w-[72px] overflow-hidden'>
                    <Image
                        src={urlFor(mainImage).url()}
                        width={72}
                        height={60}
                        alt={title}
                        title={title}
                        loading='lazy'
                        className='object-contain w-full h-full'
                    />
                </span>
            </Link>

            <div className='block w-full ml-3'>
                <div className='flex flex-col items-start'>
                    <Link onClick={() => onClick!()} href={`/products/${slug}`} title={title}>
                        <h3 className='mb-1 overflow-hidden max-w-[145px] line-clamp-2 underline-offset-auto hover:underline'>{title}</h3>
                    </Link>
                </div>

                <div className='flex items-end justify-between'>
                    <span className='text-[#707070] min-w-[40px] mr-2 text-left'>
                        {quantity} szt.
                    </span>
                    <div className='inline-block text-right'>
                        <span>
                            {price.toFixed(2).replace('.', ',')} zł
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* ??? */}
        <div className='text-[#1a1a1a] mt-4'></div>
    </div>
)