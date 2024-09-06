import { useQuery } from 'react-query';
import { AppService } from '../../middleware/get-api';
import { CatalogItem } from "../index"
import { useParams } from 'react-router-dom';
import { IProduct } from '../../types';
import { Loader } from '../Loader';

export const CategoriesItems = () => {

    const { categoryID } = useParams()

    const {isLoading, data:products} = useQuery('product', () => AppService.getAllProducts(), {
        select: ({data}) => data.filter( (products: IProduct) => products.categoriesID === Number(categoryID)),
    })

    return (
        <div className='container'>
            {isLoading ? 
                    <Loader /> :
                <div className='catalog__items'>
                    {products?.map((item) => {
                        return (
                            <CatalogItem item={item} key={item.id}/>
                        )
                    })}
                </div>
            }
        </div>
    );
};