import { usePathname } from "next/navigation"
import { ButtonOutlined } from "../Buttons"

export const EmptyMiniBasket = ({ onClick }: { onClick: () => void }) => {

    const pathname = usePathname()

    return (
        <div className='flex flex-col justify-center h-full min-h-[150px]'>
            <div className='flex flex-col items-center px-4 py-8'>

                <p className='mb-1 text-2xl font-bold'>Twój koszyk jest pusty</p>
                <p className='mb-2'>Szukasz inspiracji?</p>

                <ButtonOutlined onClick={() => onClick()} slug={`${pathname === '/' ? 'promocje' : ''}`}>
                    Przejdź do {pathname === '/' ? 'promocji' : 'strony głównej'}
                </ButtonOutlined>
            </div>
        </div >
    )
}