import { CreateEmptyList } from '../../CreateEmptyList'

type Props = {
  listsLength: number | undefined
}

export const ShopListHead = ({ listsLength }: Props) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-3xl/10 md:text-4xl/10">Listy zakupowe</h2>
        {/* Future Build */}
        <CreateEmptyList listsLength={listsLength} />
      </div>
    </>
  )
}
