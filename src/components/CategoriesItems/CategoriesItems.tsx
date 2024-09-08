import { CatalogItem } from "../index"
import { useParams } from 'react-router-dom';
import { IProduct } from '../../types';
import { Loader } from '../Loader';
import { useGetProductByCategoryQuery } from '../../store/api/api';

export const CategoriesItems = () => {

    const { categoryID } = useParams()
    const {isLoading, data: products } = useGetProductByCategoryQuery(categoryID)

    return (
        <div className='container'>
            {isLoading ? 
                    <Loader /> :
                <div className='catalog__items'>
                    {products?.map((item: IProduct) => {
                        return (
                            <CatalogItem item={item} key={item.id}/>
                        )
                    })}
                </div>
            }
        </div>
    );
};