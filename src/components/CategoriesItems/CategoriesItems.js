import { useEffect, useState } from 'react';
import { getProductsByCategoryID} from '../../middleware/get-api';
import { CatalogItem } from "../index"

export const CategoriesItems = ({ categoriesID }) => {

    const [ categoryItems, setCategoryItems ] = useState([])

    useEffect( () => {
        getProductsByCategoryID(categoriesID)
            .then( products => setCategoryItems( products ))
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