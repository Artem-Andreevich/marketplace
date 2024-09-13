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
            // forceRefetch({ currentArg, previousArg, state, endpointState}): any {
            //     // return currentArg !== previousArg
            //     console.log(currentArg, previousArg, state, endpointState)
            // },
            transformResponse: (response: IProduct[], meta, arg): any => { 
                return {
                    products: [...response],
                    filters: {
                        minCoast: Number(response?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
                        maxCoast: Number(response?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice),
                        colors: [...new Set(response?.map( item => item.details?.color))],
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
        getProductsByCategory: builder.query<IProduct[], number>({
            query: (id) => `products/?categoriesID=${id}`
        }),
        getProductsByLabel: builder.query<IProduct[], string>({
            query: (label) => `products/?label=${label}`
        }),
        getCategories: builder.query<ICategories[], void>({
            query: () => `categories`
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
} = apiSlice



