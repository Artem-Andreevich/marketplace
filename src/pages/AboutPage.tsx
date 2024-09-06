import { useQuery } from "react-query";
import { Breadcrumbs, CatalogItem } from "../components"
import { AppService } from "../middleware/get-api";
import { useState } from "react";
import { IProduct } from "../types/Product";


export const AboutPage = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    const { isLoading } = useQuery('all products', () => AppService.getAllProducts(), {
        onSuccess: ({data}) => {
            setProducts(data)
        },
        onError: (error: any) => {
            alert(error.message)
        }
    })
    
    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <h2 className='popular-items__title'>Все товары</h2>
                    {isLoading ? 
                        <div>Loading...</div> : 
                        products.length ? 
                            <div className='catalog__items'>
                                {products.map( product => (
                                    <CatalogItem item={product} key={product.article}/>
                                ))}
                            </div> :
                            <span>Товары не найдены</span>
                    }
            </div>
        </main>
    );
};