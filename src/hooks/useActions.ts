import { useMemo } from "react"
import { bindActionCreators } from "redux"
import { addProduct, removeProduct } from "../store/cart/cart.slice"
import { toggleFavorite, removeFavorites } from "../store/favorites/favorites.slice"
import { useAppDispatch } from "./useAppDispatch"
import { removeUser, setUser } from "../store/userSlice/userSlice"

const rootActions = {
    addProduct,
    removeProduct,
    toggleFavorite,
    removeFavorites,
    setUser,
    removeUser
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return useMemo( () => 
        bindActionCreators(rootActions, dispatch), [dispatch])
}