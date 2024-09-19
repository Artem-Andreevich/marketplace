import { useMemo } from "react"
import { bindActionCreators } from "redux"
import { addProduct, removeProduct } from "../store/cart/cart.slice"
import { toggleFavorite, removeFavorites } from "../store/favorites/favorites.slice"
import { useAppDispatch } from "./useAppDispatch"

const rootActions = {
    addProduct,
    removeProduct,
    toggleFavorite,
    removeFavorites
}

export const useActions = () => {
    const dispatch = useAppDispatch()
    return useMemo( () => 
        bindActionCreators(rootActions, dispatch), [dispatch])
}