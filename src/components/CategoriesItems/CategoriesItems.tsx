import { useGetProductsByQuery } from '../../store/api/api';
import { useLocation } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { CatalogFilter } from '../index';
import { Loader } from '../Loader';


export const CategoriesItems = () => {

    const { search } = useLocation()
    const { isSuccess, data: data, isFetching } = useGetProductsByQuery(search)
    console.log(isSuccess)

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
                            <CatalogFilter dataSort={data?.filters}/> 
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