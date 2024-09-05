import { cartActionsTypes} from "./actions"

const initionalState = {
    products: [],
}

export const cartReducer = ( state = initionalState, action ) => {
    switch(action.type) {
        case cartActionsTypes.ADD_TO_CART: 
            return {...state, products: [...state.products, action.payload]}

        default: 
            return state
    }
}