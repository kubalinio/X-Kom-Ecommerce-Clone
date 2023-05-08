import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk'
import { purchaseReducer } from "./purchaseSlice";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    basket: basketReducer,
    purchaseList: purchaseReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch