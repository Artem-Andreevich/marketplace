import { IProduct } from "../../types/Product"
import { CatalogItem } from "../index"
import { Loader } from "../Loader";
import { useGetProductByLabelQuery } from "../../store/api/api";


export const PopularItems = () => {

    const {isLoading, data: products} = useGetProductByLabelQuery('Хит')

    return (
        <div className='popular-items'>
            <div className='container'>
                <h2 className='popular-items__title'>Популярные товары</h2>
                {isLoading ? 
                    <Loader /> :
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
