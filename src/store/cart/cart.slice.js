import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (cart, { payload: product }) => {
            const isExists = cart.find( (item) => item.product.id === product.id )
            if(isExists)
                isExists.productCount += 1
            else 
                cart.push({
                    product: {...product},
                    productCount: 1
                })
        }, 
        removeProduct: (cart, { payload: product }) => {
            const isExists = cart.find( (item) => item.product.id === product.id )
            if(isExists.productCount > 1)
                isExists.productCount -= 1
            else 
                cart.splice( cart.findIndex( (item) => item.product.id === product.id ), 1 )
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer