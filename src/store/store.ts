import { configureStore } from "@reduxjs/toolkit"
import { reducers } from "./reducers"
import { apiSlice } from "./api/api"
import { productApi } from "./api/productApi"

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            apiSlice.middleware,
            productApi.middleware
        ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch