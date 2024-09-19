import { IProduct } from "./Product"

export interface ICart {
    products: []
}

export interface IProductCart {
    product: IProduct,
    productCount: number
}