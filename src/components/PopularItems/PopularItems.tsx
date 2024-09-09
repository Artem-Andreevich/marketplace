import { useGetProductsByLabelQuery } from "../../store/api/api";
import { CatalogItem } from "../index"
import { Loader } from "../Loader";


export const PopularItems = () => {

    const {isLoading, data: products} = useGetProductsByLabelQuery('Хит')

    return (
        <div className='popular-items'>
            <div className='container'>
                <h2 className='popular-items__title'>Популярные товары</h2>
                {isLoading ? 
                    <Loader /> :
                    <div className='catalog__items'>
                        {products?.map(item => {
                            return (
                                <CatalogItem product={item} key={item.article}/>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    );
};
