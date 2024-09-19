import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategories, ICategoryFilters, IProduct } from '../../types';

const API_URL = "http://localhost:3001"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `products`
        }),
        getProductsBy: builder.query<any, any>({
            query: (queryParams) => `products/${queryParams}`,
            transformResponse: (response: IProduct[], meta, arg): any => { 
                return {
                    products: [...response],
                    filters: {
                        minCoast: Number(response?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
                        maxCoast: Number(response?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice),
                        color: [...new Set(response?.map( item => item.details?.color))],
                        memory: [...new Set(response?.map( item => item.details?.memory))],
                    }
                }
            }
        }),
        getCategoriesFilters: builder.query<ICategoryFilters[], string>({
            query: (category) => `categoryFilters/?category=${category}`
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => `products/${id}`
        }),
        getProductNameById: builder.query<string, number>({
            query: (id) => `products/${id}`,
            transformResponse: (response: IProduct): string => { 
                return response.name
            }
        }),
        getProductsByCategory: builder.query<IProduct[], number>({
            query: (id) => `products/?categoriesID=${id}`
        }),
        getProductsByCategoryName: builder.query<any, string>({
            query: (name) => `products/?category=${name}`,
            transformResponse: (response: IProduct[], meta, arg): any => { 
                return {
                    products: [...response],
                    filters: {
                        minCoast: Number(response?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
                        maxCoast: Number(response?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice),
                        color: [...new Set(response?.map( item => item.details?.color))],
                        memory: [...new Set(response?.map( item => item.details?.memory))],
                    }
                }
            }
        }),
        getProductsByLabel: builder.query<IProduct[], string>({
            query: (label) => `products/?label=${label}`
        }),
        getCategories: builder.query<ICategories[], void>({
            query: () => `categories`
        }),
        getCategoriesNameByUrl: builder.query<string, string>({
            query: (url) => `categories/?url=${url}`,
            transformResponse: (response: ICategories[]): any => { 
                return response[0].name
            }
        }),
    })
});

export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductByIdQuery, 
    useGetProductsByLabelQuery, 
    useGetProductsByCategoryQuery,  
    useGetProductsByQuery,
    useGetCategoriesFiltersQuery,
    useGetProductNameByIdQuery,
    useGetCategoriesNameByUrlQuery,
    useGetProductsByCategoryNameQuery,
} = apiSlice



