import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductCart } from "../../types";


const initialState: [] | IProductCart[] = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (cart: IProductCart[], { payload: product }: PayloadAction<IProduct>) => {
            const isExists = cart.find( item => item.product.id === product.id )
            if(isExists)
                isExists.productCount += 1
            else 
                cart.push({
                    product: {...product},
                    productCount: 1
                })
        }, 
        removeProduct: (cart: IProductCart[], { payload: product }: PayloadAction<IProduct>) => {
            const isExists = cart.find(item => item.product.id === product.id )
            if(isExists && isExists?.productCount > 1)
                isExists.productCount -= 1
            else 
                cart.splice( cart.findIndex( item => item.product.id === product.id ), 1 )
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export const cartReducer = cartSlice.reducer