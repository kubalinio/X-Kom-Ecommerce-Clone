import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";

export const store = configureStore({
    reducer: basketReducer
})

export type RootState = ReturnType<typeof store.getState>