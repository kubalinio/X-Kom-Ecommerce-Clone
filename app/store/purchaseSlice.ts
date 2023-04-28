
import { createSlice } from "@reduxjs/toolkit";

export type PurchaseListItem = {
    id: string
}

export type PurchaseList = {
    // id: string
    purchaseListItems: PurchaseListItem[]
}

const initialState: PurchaseList = {
    // id: '',
    purchaseListItems: [],
}

const purchaseListSlice = createSlice({
    name: 'purchaseList',
    initialState,
    reducers: {

        addToPurchaseList: (state, action) => {
            const itemInList = state.purchaseListItems.find((item) => item.id === action.payload.id);

            if (itemInList) {
                console.log('Product in List')
                
            } else {
                
                state.purchaseListItems.push({...action.payload});
            }
           
          },

          removePurchaseListItem: (state, action) => {
            const removeItem = state.purchaseListItems.filter((item) => item.id !== action.payload.id)
            state.purchaseListItems = removeItem
        },
        
    }
    
})

export const purchaseReducer = purchaseListSlice.reducer

export const {addToPurchaseList, removePurchaseListItem} = purchaseListSlice.actions

 

      