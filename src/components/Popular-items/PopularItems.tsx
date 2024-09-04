import React, { useEffect, useState } from 'react';
import { getProductsInCategory } from '../../middleware/get-api';
import IPhone from '../../types/Phone';
import CatalogItem from '../Catalog-item/CatalogItem';


const PopularItems = () => {

    const [ populerItems, setPopularItems ] = useState([])

    useEffect( () => {
        getProductsInCategory( 'iphone', setPopularItems )
    },[])

    return (
        <div className='popular-items'>
            <div className='container'>
                <h2 className='popular-items__title'>Популярные товары</h2>
                <div className='catalog__items'>
                {populerItems.map((item: IPhone) => {
                    return (
                        <CatalogItem item={item} key={item.id}/>
                    )
                })}
                </div>
            </div>
        </div>
    );
};

export default PopularItems;