
import { createSlice } from "@reduxjs/toolkit";

export type BasketItems = {
    basketItems: {
        id: string
        title: string
        price: number
        mainImage: string
        quantity: number
        slug: string
        special: boolean
    }[]
    basketTotalQuantity: number
   basketTotalAmount: number
}

const initialState: BasketItems = {
    basketItems: [],
   basketTotalQuantity: 0,
   basketTotalAmount: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

        addToBasket: (state, action) => {
            const itemInBasket = state.basketItems.find((item) => item.id === action.payload.id);

            if (itemInBasket) {
              itemInBasket.quantity++;
            } else {
              state.basketItems.push({ ...action.payload, quantity: 1 });
            }
          },
       

        removeItem: (state, action) => {
            const removeItem = state.basketItems.filter((item) => item.id !== action.payload)
            state.basketItems = removeItem
        },

        getTotals(state) {
            let { total, quantity } = state.basketItems.reduce(
                (basketTotal, basketItem) => {
                    const { price, quantity } = basketItem;
                    const itemTotal = price * quantity;

                    basketTotal.total += itemTotal;
                    basketTotal.quantity += quantity;

                    return basketTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.basketTotalQuantity = quantity;
            state.basketTotalAmount = total;
        },
    }
    
})

export const basketReducer = basketSlice.reducer

export const {addToBasket, removeItem, getTotals} = basketSlice.actions

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

      