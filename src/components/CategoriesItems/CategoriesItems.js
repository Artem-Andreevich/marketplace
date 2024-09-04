import React, { useEffect, useState } from 'react';
import { getProductsInCategory } from '../../middleware/get-api';
import CatalogItem from '../Catalog-item/CatalogItem';

const CategoriesItems = ({ category }) => {

    const [ categoryItems, setCategoryItems ] = useState([])

    useEffect( () => {
        getProductsInCategory( category, setCategoryItems )
    },[])

    return (
        <div className='container'>
            <div className='catalog__items'>
                {categoryItems.map((item) => {
                    return (
                        <CatalogItem item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    );
};

export default CategoriesItems;