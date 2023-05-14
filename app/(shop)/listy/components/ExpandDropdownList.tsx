import { ReactNode, useEffect, useRef, useState } from "react"
import { AiOutlineMore } from "react-icons/ai"

type Props = {
    children: ReactNode,
    className: string
}

export const ExpandDropdownList = ({ children, className }: Props) => {
    const [expand, setExpand] = useState(false)

    const buttonRef = useRef<HTMLDivElement>(null)
    const expandBoxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const listener = (e: MouseEvent) => {
            if (!buttonRef.current?.contains(e.target as Node) || !buttonRef.current) {
                setExpand(false)
            }
        }
        window.addEventListener('click', listener)
        return () => window.removeEventListener('click', listener)
    }, [])

    return (
        <div className={`${expand ? 'z-[999]' : 'z-[1]'} ${className}`}>


            {/* Icon */}
            <div ref={buttonRef} >
                <div className="pointer-events-auto">
                    <button
                        onClick={() => setExpand(!expand)}
                        className="flex items-center justify-center rounded-full h-10 w-10 hover:bg-[#ddd] active:bg-[#ddd] focus:bg-[#ddd]"
                    >
                        <span className="inline-block w-6 h-6">
                            <AiOutlineMore className="w-full h-full text-2xl" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div
                className={`${expand ? 'pointer-events-auto' : 'relative overflow-hidden'} pointer-events-none`}
            >

                <div
                    ref={expandBoxRef}
                    className={`${expand ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} absolute flex flex-col text-left rounded-lg shadow-xCom py-2 z-[2] top-[46px] md:top-[56px] right-0 left-auto bg-white`}>

                    {children}

                </div>
            </div>

        </div>
    )
}