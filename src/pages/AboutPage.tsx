import { useGetProductsQuery } from "../store/api/api";
import { Breadcrumbs, CatalogItem } from "../components"
import { Loader } from "../components/Loader";


export const AboutPage = () => {

    const { isLoading, data: products } = useGetProductsQuery()
    
    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <h2 className='popular-items__title'>Все товары</h2>
                    {isLoading ? 
                        <Loader /> : 
                        products?.length ? 
                            <div className='catalog__items'>
                                {products.map(item => (
                                    <CatalogItem product={item} key={item.id}/>
                                ))}
                            </div> :
                            <span>Товары не найдены</span>
                    }
            </div>
        </main>
    );
};