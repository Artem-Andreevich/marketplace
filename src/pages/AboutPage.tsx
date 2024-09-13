import { useGetProductsByQuery, useGetProductsQuery } from "../store/api/api";
import { Breadcrumbs, CatalogItem } from "../components"
import { Loader } from "../components/Loader";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";


export const AboutPage = () => {

    const { search } = useLocation()
    const [ query, setQuery ]: any = useState("")
    const navigate = useNavigate()

    useEffect(()=> {
        setQuery(search)
    },[])
    useEffect(()=> {
        navigate(query)
    },[query])


    const { isLoading, data: products } = useGetProductsByQuery(query)

    const handler = () => {
        setQuery((prev: any) => `${prev}&_limit=1`)
    }



    
    return (
        <main className="page inner-page">
              <input type="checkbox" onChange={handler} />

            <Breadcrumbs />
            <div className='container'>
                <h2 className='popular-items__title'>Все товары</h2>
                    {/* {isLoading ? 
                        <Loader /> : 
                        products?.length ? 
                            <div className='catalog__items'>
                                {products.map(item => (
                                    <CatalogItem product={item} key={item.id}/>
                                ))}
                            </div> :
                            <span>Товары не найдены</span>
                    } */}
            </div>
        </main>
    );
};