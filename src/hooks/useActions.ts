import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { addProduct, removeProduct } from "../store/cart/cart.slice"

const rootActions = {
    addProduct,
    removeProduct
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo( () => 
        bindActionCreators(rootActions, dispatch), [dispatch])
}