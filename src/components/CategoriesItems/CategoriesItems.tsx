import { useGetProductsByCategoryQuery, useGetProductsByQuery } from '../../store/api/api';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { Loader } from '../Loader';
import { ISortingData } from '../../types';
import { useEffect, useState } from 'react';


export const CategoriesItems = () => {

    const { search } = useLocation()
    const [ query, setQuery ]: any = useState("")
    const navigate = useNavigate()

    useEffect(()=> {
        setQuery(search)
    },[])
    useEffect(()=> {
        navigate(query)
    },[query])


    const { isLoading, data: products } = useGetProductsByQuery(query)
    console.log(products)


    // const { categoryID } = useParams()
    // const { isLoading, data: products } = useGetProductsByCategoryQuery(Number(categoryID))

    const sortingData: ISortingData = {
        minCoast: String(products?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
        maxCoast: String(products?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice)
    }

    return (
        <div className='container'>
            {isLoading ? 
                <Loader /> :
                <> 
                    {products?.length ?
                        <>
                            <Sorting dataSort={sortingData}/>
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