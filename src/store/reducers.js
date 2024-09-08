import { combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "./api/api"
import reducer from "./cart/cart.slice"

export const reducers = combineReducers({
    cart: reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})