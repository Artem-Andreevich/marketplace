import { combineReducers } from "redux"

import { cartReducer as cart } from "./cart"

export const reducers = combineReducers({
    cart
})