import { useGetProductsByLabelQuery } from "../../store/api/api";
import { CatalogItem } from "../index"
import { Loader } from "../Loader";


export const PopularItems = () => {

    const queryParams = (arg1: string, arg2: string) => {
        return `${arg1}&_${arg2}`
    }
    const {isLoading, data: products} = useGetProductsByLabelQuery(queryParams("Хит", "limit=2"))

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
