import React, { useEffect, useState } from 'react';
import IPhone from '../../types/Phone';
import CatalogItem from '../Catalog-item/CatalogItem';
import { getProductsByLabel } from '../../middleware/get-api';


const PopularItems = () => {

    const [ populerItems, setPopularItems ] = useState([])

    useEffect( () => {

        getProductsByLabel('Хит')
            .then( products => setPopularItems( products ))
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