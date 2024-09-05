export const cartActionsTypes = {
    ADD_TO_CART: 'CART.ADD_TO_CART'
}

export const cartActions = {
    addToCart: (product) => ({ type: cartActionsTypes.ADD_TO_CART, payload: product})
}