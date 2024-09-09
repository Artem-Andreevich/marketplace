import { useGetProductsByCategoryQuery } from '../../store/api/api';
import { useParams } from 'react-router-dom';
import { CatalogItem } from "../index"
import { Loader } from '../Loader';


export const CategoriesItems = () => {

    const { categoryID } = useParams()
    const {isLoading, data: products } = useGetProductsByCategoryQuery(Number(categoryID))

    return (
        <div className='container'>
            {isLoading ? 
                <Loader /> :
                <div className='catalog__items'>
                    {products?.map(item => {
                        return (
                            <CatalogItem product={item} key={item.id}/>
                        )
                    })}
                </div>
            }
        </div>
    );
};