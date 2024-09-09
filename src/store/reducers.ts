import { combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "./api/api"
import { cartReducer }  from "./cart/cart.slice"

export const reducers = combineReducers({
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})