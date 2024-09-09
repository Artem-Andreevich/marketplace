import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategories, IProduct } from '../../types';

const API_URL = "http://localhost:3001"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => '/products'
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`
        }),
        getProductsByCategory: builder.query<IProduct[], number>({
            query: (id) => `/products/?categoriesID=${id}`
        }),
        getProductsByLabel: builder.query<IProduct[], string>({
            query: (label) => `/products/?label=${label}`
        }),
        getCategories: builder.query<ICategories[], void>({
            query: () => '/categories'
        }),
    })
});

export const { 
    useGetCategoriesQuery, 
    useGetProductsQuery, 
    useGetProductByIdQuery, 
    useGetProductsByLabelQuery, 
    useGetProductsByCategoryQuery,  
} = apiSlice



