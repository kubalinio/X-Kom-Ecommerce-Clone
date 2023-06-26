import { createSlice } from '@reduxjs/toolkit'

export type BasketItem = {
  id?: string
  quantity: number
}

export type BasketItems = {
  basketItems: BasketItem[]
  basketTotalQuantity: number
}

const initialState: BasketItems = {
  basketItems: [],
  basketTotalQuantity: 0,
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemInBasket = state.basketItems.find((item) => item.id === action.payload.id)

      if (itemInBasket) {
        itemInBasket.quantity = itemInBasket.quantity + action.payload.quantity
      } else {
        state.basketItems.push({ ...action.payload, quantity: action.payload.quantity })
      }
    },

    addNewQuantity: (state, action) => {
      const itemInBasket = state.basketItems.find((item) => item.id === action.payload.id)

      if (itemInBasket) {
        itemInBasket.quantity = action.payload.newQuantity
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.basketItems.filter((item) => item.id !== action.payload)
      state.basketItems = removeItem
    },

    getTotals(state) {
      const { quantity } = state.basketItems.reduce(
        (basketTotal, basketItem) => {
          const { quantity } = basketItem
          basketTotal.quantity += quantity
          return basketTotal
        },
        {
          quantity: 0,
        }
      )
      state.basketTotalQuantity = quantity
    },
  },
})

export const basketReducer = basketSlice.reducer

export const { addToBasket, removeItem, addNewQuantity, getTotals } = basketSlice.actions

// addToBasket: (state, action) => {
//     const existingIndex = state.basketItems.findIndex((item) => item.id === action.payload.id)

//     if (existingIndex >= 0) {

//         state.basketItems[existingIndex] = {
//             ...state.basketItems[existingIndex],
//             basketQuantity: state.basketItems[existingIndex].basketQuantity + action.payload.basketQuantity

//         }
//     } else {
//         let tempProductItem = {
//             ...action.payload,
//             basketQuantity: action.payload.basketQuantity
//         }
//         state.basketItems.push(tempProductItem)
//     }
// },
