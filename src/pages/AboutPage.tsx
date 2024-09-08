import { Breadcrumbs, CatalogItem } from "../components"
import { IProduct } from "../types/Product";
import { Loader } from "../components/Loader";
import { useGetProductsQuery } from "../store/api/api";

export const AboutPage = () => {

    const { isLoading, data: products } = useGetProductsQuery()
    
    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <h2 className='popular-items__title'>Все товары</h2>
                    {isLoading ? 
                        <Loader /> : 
                        products.length ? 
                            <div className='catalog__items'>
                                {products.map( (product: IProduct) => (
                                    <CatalogItem item={product} key={product.article}/>
                                ))}
                            </div> :
                            <span>Товары не найдены</span>
                    }
            </div>
        </main>
    );
};