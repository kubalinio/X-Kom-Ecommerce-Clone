import { BiHeart } from 'react-icons/bi'
import NavUser from './NavUser'
import UserShopList, { NeedHelp } from './UserShopList'

export type navUserItems = {
    title: string
    slug: string
    icon: JSX.Element
}


const navUserItems: navUserItems[] = [
    {
        title: 'Zamówienia',
        slug: 'zamowienia',
        icon: <BiHeart />
    },
    {
        title: 'Zwroty i reklamacje',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'Listy zakupowe',
        slug: 'listy',
        icon: <BiHeart />
    },
    {
        title: 'Opinie',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'Dane do zamówienia',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'Ustawienia konta',
        slug: '',
        icon: <BiHeart />
    },
    {
        title: 'SalesMaster',
        slug: '',
        icon: <BiHeart />
    },

]

const ListsPage = () => {

    return (
        <main className='mx-auto w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:mt-12 lg:w-[calc(100%-64px)] lg:max-w-[1156px] 2xl:max-w-[1444px]'>
            <div className='w-full pt-1 pb-8 md:pt-3 md:pb-10 lg:pt-5'>
                {/* Flex Container */}
                <div className='flex flex-wrap'>
                    {/* Left Section only Desktop*/}
                    <div className='w-0 max-lg:hidden lg:px-4 lg:w-1/4'>
                        <NavUser items={navUserItems} />
                    </div>

                    <div className='w-full sm:px-2 md:px-3 lg:px-4 lg:w-3/4 lg:border-l lg:border-[#ddd]'>
                        <UserShopList />
                    </div>
                </div>

                {/* Help for mobile */}
                <div className='lg:hidden'>
                    <NeedHelp />
                </div>
            </div>
        </main>
    )
}

export default ListsPage