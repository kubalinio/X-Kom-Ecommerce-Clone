import { UserShopList } from './components/UserShopList/UserShopListContainer'

export type navUserItems = {
  title: string
  slug: string
  icon: JSX.Element
  iconActive?: JSX.Element
}

const ListsPage = () => {
  return (
    <section className="w-full sm:px-2 md:px-3 lg:w-3/4 lg:border-l lg:border-[#ddd] lg:px-4">
      <UserShopList />
    </section>
  )
}

export default ListsPage