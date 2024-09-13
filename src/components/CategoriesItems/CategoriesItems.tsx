import { useGetProductsByQuery } from '../../store/api/api';
import { useLocation } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { Loader } from '../Loader';
import { ISortingData } from '../../types';
import { useEffect, useState } from 'react';
import { CatalogFilter } from '../CatalogFilter';


export const CategoriesItems = () => {

    const { search } = useLocation()
    const { isLoading, data: products } = useGetProductsByQuery(search)
    const [ initionalSort, setInitionalSort ] = useState<any>()

    useEffect( () => {
        const sortingData: ISortingData = {
            minCoast: Number(products?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
            maxCoast: Number(products?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice),
            colors: [...new Set(products?.map( item => item.details?.color))],
            memory: [...new Set(products?.map( item => item.details?.memory))],
        }
        setInitionalSort(sortingData)

    },[isLoading])
    
    return (
        <div className='container'>
            {isLoading ? 
                <Loader /> :
                <> 
                    <Sorting dataSort={initionalSort}/>
                    <div className="catalog">
                        <CatalogFilter dataSort={initionalSort}/>
                        {products?.length ?
                            <>
                                <div className='catalog__items'>
                                    
                                    {products.map(item => {
                                        return (
                                            <CatalogItem product={item} key={item.id}/>
                                        )
                                    })}
                                </div>
                            </> :
                            <div>Продуктов нет в категории</div>
                        }
                    </div>
                    
                </>
            }
        </div>
    );
};