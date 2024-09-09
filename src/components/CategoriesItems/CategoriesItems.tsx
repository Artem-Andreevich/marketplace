import { useGetProductsByCategoryQuery } from '../../store/api/api';
import { useParams } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { Loader } from '../Loader';
import { ISortingData } from '../../types';


export const CategoriesItems = () => {

    const { categoryID } = useParams()
    const { isLoading, data: products } = useGetProductsByCategoryQuery(Number(categoryID))

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