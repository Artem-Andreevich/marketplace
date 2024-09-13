import { useGetProductsByQuery } from '../../store/api/api';
import { useLocation } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { Loader } from '../Loader';
import { CatalogFilter } from '../CatalogFilter';


export const CategoriesItems = () => {

    const { search } = useLocation()
    const { isLoading, data: data } = useGetProductsByQuery(search)

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