import { useGetCategoriesFiltersQuery, useGetProductsByQuery } from '../../store/api/api';
import { useLocation, useParams } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { CatalogFilter } from '../index';
import { Loader } from '../Loader';


export const CategoriesItems = () => {

    const { search } = useLocation()
    const { categoryID }: any = useParams()
    console.log(categoryID)
	const { isLoading, data: filters } = useGetCategoriesFiltersQuery(categoryID)
    const { isSuccess, data: data, isFetching } = useGetProductsByQuery(search)

    return (
        <div className='container'>
            {isSuccess ? 
                <> 
                    <Sorting />
                    <div className="catalog">
                        {isFetching ? 
                            <div>
                                <Loader type="spin" width='50px' height='50px'/>
                            </div> :
                            <CatalogFilter categoryFilters={filters} dataSort={data?.filters}/> 
                        }
                        {data?.products?.length ?
                            <>
                                <div className='catalog__items'>
                                    {data?.products.map((item: any) => {
                                        return (
                                            <CatalogItem product={item} key={item.id}/>
                                        )
                                    })}
                                </div>
                            </> :
                            <div>Продуктов нет в категории</div>
                        }
                    </div>
                </> :
                <div>
                    <Loader /> 
                </div> 
            }
        </div>
    );
};