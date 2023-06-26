import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { basketReducer } from './basketSlice'
import { purchaseReducer } from './purchaseSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  basket: basketReducer,
  purchaseList: purchaseReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
