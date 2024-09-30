import { combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "./api/api"
import { cartReducer }  from "./cart/cart.slice"
import { favoritesReducer }  from "./favorites/favorites.slice"
import { productApi } from "./api/productApi"
import { userReducer } from "./userSlice/userSlice"

export const reducers = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
})