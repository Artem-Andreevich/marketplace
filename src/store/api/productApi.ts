import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategories, ICategoryFilters, IProduct } from '../../types';

const API_URL = "http://localhost:3001"

export const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        createProduct: builder.mutation<any, any>({
            query(product) {
                return {
                    mode: "no-cors",
                    url: '/products',
                    method: 'POST',
                    credentials: 'include',
                    body: product
                }
            }
        }),
       
    })
});

export const { 
    useCreateProductMutation, 

} = productApi



