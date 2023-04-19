'use client'
import { Element } from "react-scroll"

export const ContestSection = () => {
    return (
        <Element className="relative" id="Konkursy" name="Konkursy">

            {/* Logic to scroll & dont hide Title */}
            <h2 className="relative pt-[58px] -top-[58px] mt-8 -mb-11 font-bold text-2xl/7 md:text-3xl/8">
                Konkursy
                <span className="ml-1 text-[#707070]">(0)</span>
                {/* Dynamic */}
            </h2>

            <div className="py-4 pr-2 pl-6 border border-[#ddd] rounded-lg">
                <p className="mb-1 text-lg/6">
                    Aktualnie nie mamy żadnego konkursu
                </p>
                <p className="text-[#707070]">
                    Masz pomysł, jak ulepszyć x-kom?
                    <a href="mailto:jsapalawebdev@gmail.com" className="ml-1 text-blue-500">
                        Napisz do nas.
                    </a>
                </p>
            </div>

        </Element>
    )
}