
export const cartActionsTypes = {
    ADD_TO_CART: 'CART.ADD_TO_CART',
    REMOVE_FROM_CART: 'CART.REMOVE_FROM_CART',
}

export const cartActions = {
    addToCart: (product) => ({ type: cartActionsTypes.ADD_TO_CART, payload: product}),
    removeFromCart: (id) => ({ type: cartActionsTypes.REMOVE_FROM_CART, payload: id})
}