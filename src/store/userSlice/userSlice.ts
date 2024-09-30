import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";


const initialState: IUser = {
    id: NaN,
    email: '',
    role: '',
    token: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload: userData }: PayloadAction<IUser>) => {
            state.id = userData.id
            state.email = userData.email
            state.role = userData.role
            state.token = userData.token
        },
        removeUser: (state) => {
            state.id = NaN
            state.email = ''
            state.role = ''
            state.token = ''
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export const userReducer = userSlice.reducer