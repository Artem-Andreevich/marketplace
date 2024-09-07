import axios from "axios"
import { IProduct } from "../types/Product"
import { ICategories } from "../types/Categories"

const URL = "http://localhost:3001"

axios.defaults.baseURL = URL

export const AppService = {
    async getAllProducts(){
        return axios.get<IProduct[]>('/products')
    },
    async getCategories(){
        return axios.get<ICategories[]>('/categories')
    },
    async getProduct(id: number){
        return axios.get<IProduct>(`/products/${id}`)
    }
}