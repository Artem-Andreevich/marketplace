import { useGetProductsByQuery } from '../../store/api/api';
import { useLocation } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { Loader } from '../Loader';
import { ISortingData } from '../../types';
import { useEffect, useState } from 'react';


export const CategoriesItems = () => {

    const { search } = useLocation()
    const { isLoading, data: products } = useGetProductsByQuery(search)
    const [ initionalSort, setInitionalSort ] = useState<any>()



    useEffect( () => {
        const sortingData: ISortingData = {
            minCoast: String(products?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
            maxCoast: String(products?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice),
            colors: [...new Set(products?.map( item => item.details?.color))],
            memory: [...new Set(products?.map( item => item.details?.memory))],
        }
       setInitionalSort(sortingData)
    },[isLoading])

    console.log(initionalSort)


    return (
        <div className='container'>
            {isLoading ? 
                <Loader /> :
                <> 
                    {products?.length ?
                        <>
                            <Sorting dataSort={initionalSort}/>
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
                </>
            }
        </div>
    );
};