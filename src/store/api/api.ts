import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = "http://localhost:3001"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<any, void>({
            query: () => '/products'
        }),
        getProductById: builder.query<any, any>({
            query: (id) => `/products/${id}`
        }),
        getProductByCategory: builder.query<any, any>({
            query: (id) => `/products/?categoriesID=${id}`
        }),
        getProductByLabel: builder.query<any, any>({
            query: (label) => `/products/?label=${label}`
        }),
        getCategories: builder.query<any, void>({
            query: () => '/categories'
        }),
    })
});

export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductByIdQuery, 
    useGetProductByLabelQuery, 
    useGetProductByCategoryQuery,  
} = apiSlice



