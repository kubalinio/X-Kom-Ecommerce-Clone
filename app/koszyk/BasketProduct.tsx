import { BasketItem } from "@/store/basketSlice"
import Link from "next/link"


const BasketProduct = ({ id, title, price, mainImage, quantity, slug, }: BasketItem) => {


    return (
        <li>
            <div>
                <div>
                    {/* Image Left*/}
                    <Link href={`/${slug}`}></Link>

                    {/* Right Section */}
                    <div>
                        {/* Top */}
                        <div></div>

                        {/* Bottom */}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default BasketProduct