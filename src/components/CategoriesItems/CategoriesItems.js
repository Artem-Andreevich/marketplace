import { useState } from 'react';
import { CatalogItem } from "../index"
import { useQuery } from 'react-query';
import { AppService } from '../../middleware/get-api';

export const CategoriesItems = ({ categoriesID }) => {

    // const [ categoryItems, setCategoryItems ] = useState([])

    const {isLoading, data:products} = useQuery('product', () => AppService.getAllProducts(categoriesID), {
        select: ({data}) => data.map( products => { return products.categoriesID == categoriesID}),
    })

    return (
        <div className='container'>
            <div className='catalog__items'>
                {products.map((item) => {
                    return (
                        <CatalogItem item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    );
};