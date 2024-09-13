import { useGetProductsByQuery } from '../../store/api/api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { Loader } from '../Loader';
import { ISortingData } from '../../types';
import { useEffect, useState } from 'react';
import { CatalogFilter } from '../CatalogFilter';


export const CategoriesItems = () => {

    const { search } = useLocation()
    // const [ searchParams, setSearchParams ] = useSearchParams(search);
    // console.log(searchParams)
	// const queryParams = new URLSearchParams(search);
    const { isLoading, data: data } = useGetProductsByQuery(search)
    // const [ initionalSort, setInitionalSort ] = useState<any>()
    // console.log(data.products)
    
    // useEffect( () => {
    //     const sortingData: ISortingData = {
    //         minCoast: Number(products?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
    //         maxCoast: Number(products?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice),
    //         colors: [...new Set(products?.map( item => item.details?.color))],
    //         memory: [...new Set(products?.map( item => item.details?.memory))],
    //     }
    //     setInitionalSort(sortingData)

    // },[isLoading])
    
    return (
        <div className='container'>
            {isLoading ? 
                <Loader /> :
                <> 
                    <Sorting />
                    <div className="catalog">
                        <CatalogFilter dataSort={data.filters}/>
                        {data.products?.length ?
                            <>
                                <div className='catalog__items'>
                                    
                                    {data.products.map((item: any) => {
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