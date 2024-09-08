import { configureStore } from "@reduxjs/toolkit"
import { reducers } from "./reducers"
import { apiSlice } from "./api/api"

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})