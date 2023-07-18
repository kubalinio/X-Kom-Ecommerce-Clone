import { Basket } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getCookie } from 'cookies-next'

import { ExtendedBasketItem } from '@/types/db'

type BasketData = Basket & { Items: ExtendedBasketItem[] }

export const useGetBasketProducts = (initialBasketData?: BasketData) => {
  const currentBasketToken = getCookie('basketToken')

  return useQuery({
    queryKey: ['basketProducts'],
    queryFn: async () => {
      const { data } = await axios.get<BasketData>(`/api/baskets/${currentBasketToken}/basicData`)
      return data
    },
    refetchOnWindowFocus: false,
    initialData: initialBasketData,
  })
}

// @@ BasketNav
// const [fetchData, setFetchData] = useState(false)
//  const basketCookie = useBasketToken((state) => state.basketToken)
//  const [basketTok, setBasketTok] = useState(basketToken ?? basketCookie)

// useEffect(() => {
//   if (basketToken) {
//     setFetchData(true)
//     setBasketTok(basketToken)
//   } else if (basketCookie) {
//     setFetchData(true)
//     setBasketTok(basketCookie)
//   } else return setFetchData(false)
// }, [basketCookie, basketToken])

// const {
//   data: basketProducts,
//   isFetching,
// } = useQuery({
//   queryFn: async () => {
//     const { data } = await axios.get(`/api/baskets/${basketTok}/basicData`)
//     return data as Basket[]
//   },
//   queryKey: ['basketProducts'],
//   refetchOnWindowFocus: false,
//   enabled: fetchData,
// })
