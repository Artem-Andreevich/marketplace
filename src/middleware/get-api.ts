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
        console.log(id)
        return axios.get<IProduct>(`/products/${id}`)
    }
}

// export async function getProductById(id) {
//     try {
//         const res = await fetch(`${URL}/products`)
//         const data = await res.json()
//         const [ product ] = data.filter( item => item.id == id)
//         return product

//     } catch {
//         console.log('Ошибка')
//     }
// }

// export async function getProductsByLabel(label) {
//     try {
//         const res = await fetch(`${URL}/products`)
//         const data = await res.json()
//         const product = data.filter( item => item.label === label)
//         return product

//     } catch {
//         console.log('Ошибка')
//     }
// }

// export async function getProductsByCategoryID(categoryID) {
//     try {
//         const res = await fetch(`${URL}/products`)
//         const data = await res.json()
//         const product = data.filter( item => item.categoriesID == categoryID)
//         return product

//     } catch {
//         console.log('Ошибка')
//     }
// }

// export async function getEndpoints(endpoint) {
//     try {
//         const res = await fetch(`${URL}/${endpoint}`)
//         const data = await res.json()
//         return data

//     } catch {
//         console.log('Ошибка')
//     }
// }


// export async function getPhone(endpoint: string, fn: any ): Promise<any> {
//     try {
//         const path =
//             process.env.NODE_ENV === 'development'
//             ? `http://localhost:3001/${endpoint}`
//             : `https://raw.githubusercontent.com/artem-andreevich/marketplace/gh-pages/static/db/${endpoint}.json`;
//         const res = await fetch(path)
//         const data = await res.json()
//         fn( data )

//     } catch {
//         console.log('Ошибка')
//     }
// }

// export async function getPhone(endpoint, fn) {
//     try {
//         const path =
//             process.env.NODE_ENV === 'development'
//             ? `http://localhost:3001/${endpoint}`
//             : `https://raw.githubusercontent.com/artem-andreevich/marketplace/gh-pages/static/db/${endpoint}.json`;
//         const res = await fetch(path)
//         const data = await res.json()
//         fn( data )

//     } catch {
//         console.log('Ошибка')
//     }
// }

// export async function getProductsInCategory(endpoint, fn) {
//     try {
//         const path =
//             process.env.NODE_ENV === 'development'
//             ? `http://localhost:3001/${endpoint}`
//             : `https://raw.githubusercontent.com/artem-andreevich/marketplace/gh-pages/static/db/${endpoint}.json`;
//         const res = await fetch(path)
//         const data = await res.json()
//         fn( data )

//     } catch {
//         console.log('Ошибка')
//     }
// }