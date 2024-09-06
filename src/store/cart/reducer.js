import { cartActionsTypes} from "./actions"

const initionalState = {
    products: [],
}

export const cartReducer = ( cart = initionalState, action ) => {
    switch(action.type) {
        case cartActionsTypes.ADD_TO_CART: 
            // console.log(cart.products)
            return {...cart, products: [...cart.products, action.payload]}

        case cartActionsTypes.REMOVE_FROM_CART: 
            // console.log(cart.products)
            const lastAddedProduct = cart.products.findLastIndex( product => product.id === action.payload)
            return {...cart, products: [...cart.products].toSpliced(lastAddedProduct, 1)}

        default: 
            return cart
    }
}