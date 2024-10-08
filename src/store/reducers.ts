import { combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "./api/api"
import { cartReducer }  from "./cart/cart.slice"
import { favoritesReducer }  from "./favorites/favorites.slice"

export const reducers = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})