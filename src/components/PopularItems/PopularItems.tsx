import { IProduct } from "../../types/Product"
import { CatalogItem } from "../index"
import { useQuery } from 'react-query';
import { AppService } from '../../middleware/get-api';


export const PopularItems = () => {

    const { isLoading, data:products } = useQuery('popular list', () => AppService.getAllProducts(), {
        onError: (error: any) => {
            alert(console.log(error))
        },
        select: ({data}):IProduct[] => data.map( product => ({
            ...product
        }))
    })

    return (
        <div className='popular-items'>
            <div className='container'>
                <h2 className='popular-items__title'>Популярные товары</h2>
                
                { isLoading ? 
                    <div>Loading...</div> :
                    <div className='catalog__items'>
                        {products?.map((item: IProduct) => {
                            return (
                                <CatalogItem item={item} key={item.article}/>
                            )
                        })}
                    </div>
                }
                </div>

        </div>
    );
};
