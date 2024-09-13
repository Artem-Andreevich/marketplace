import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";


const initialState: [] | IProduct[] = []

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (favorites: IProduct[], { payload: product }: PayloadAction<IProduct>) => {
            const isExists = favorites.find( item => item.id === product.id )
            if(isExists)
                favorites.splice( favorites.findIndex( item => item.id === product.id ), 1 )
            else 
                favorites.push(product)
        }, 

        removeFavorites: (favorites: IProduct[]) => {
            if(favorites.length >= 1)
                favorites = []       
        }
    }
})

export const { toggleFavorite, removeFavorites } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer