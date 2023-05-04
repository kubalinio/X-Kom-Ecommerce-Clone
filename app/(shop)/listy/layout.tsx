import { NavUser } from "./components/NavUser";
import { NeedHelpInfo } from "./components/UserShopList/NeedHelpInfo";

export default function ListsLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <main className='mx-auto mt-5 w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:mt-12 lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]'>
            <div className='w-full pt-1 pb-8 md:pt-3 md:pb-10 lg:pt-5'>
                {/* Flex Container */}
                <div className='flex flex-wrap'>
                    {/* Left Section only Desktop*/}
                    <div className='w-0 max-lg:hidden lg:px-4 lg:w-1/4'>
                        <NavUser />
                    </div>

                    {children}

                </div>

                {/* Help for mobile */}
                <div className='lg:hidden'>
                    <NeedHelpInfo />
                </div>
            </div>
        </main>
    )
}