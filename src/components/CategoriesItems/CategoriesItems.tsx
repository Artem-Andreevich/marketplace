import { useGetProductsByCategoryQuery, useGetProductsByQuery } from '../../store/api/api';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { CatalogItem, Sorting } from "../index"
import { Loader } from '../Loader';
import { ISortingData } from '../../types';
import { useEffect, useState } from 'react';


export const CategoriesItems = () => {

    const { search } = useLocation()
    const location = useLocation()
    const [ query, setQuery ]: any = useState("")
    const navigate = useNavigate()

    useEffect(()=> {
        setQuery(search)
        // navigate(query)

    },[])
    // useEffect(()=> {
    //     navigate(query)
    //     // setQuery(query)

    // },[query])


    const { isLoading, data: products } = useGetProductsByQuery(query)


    const colorsVariants = products?.map( item => item.details?.color)
    console.log(colorsVariants)


    // const { categoryID } = useParams()
    // const { isLoading, data: products } = useGetProductsByCategoryQuery(Number(categoryID))

    const sortingData: ISortingData = {
        minCoast: String(products?.reduce((prev, curr) => prev.newPrice < curr.newPrice ? prev : curr ).newPrice),
        maxCoast: String(products?.reduce((prev, curr) => prev.newPrice > curr.newPrice ? prev : curr ).newPrice)
    }
    const handler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery((prev: any) => `${prev}&_limit=1`)

        // event.currentTarget.checked ? 
        //     setQuery((prev: any) => `${prev}&_limit=1`) :
        //     setQuery(search)
    }
    const handlerColor = () => {
        setQuery()
    }




    const queryParams = new URLSearchParams(location.search);
    const [filterValue, setFilterValue] = useState<any>(queryParams);
    function handleParamUpdate() {
        // update query parameters
        queryParams.set("_limit", "2");
    
        // create new search string and navigate to it
        const newSearch = `?${queryParams.toString()}`;
        navigate({ search: newSearch });
    }

    function handleFilterUpdate(event: any) {
        event.preventDefault();
    
        // update query parameters with new filter value
        queryParams.set("_limit", filterValue);
        navigate({ search: queryParams.toString() });
      }

      useEffect(()=> {
            navigate(filterValue)
        // setQuery(query)

    },[filterValue])

    return (
        <div className='container'>
            <form onSubmit={handleFilterUpdate}>
                <label>
                    Filter:
                    <input
                        type="text"
                        value={filterValue || ""}
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                </label>
                <button type="submit">Apply Filter</button>
            </form>
            <button onClick={handleParamUpdate}>32312312</button>
            <label>
                <input type="checkbox" onChange={(event)=> handler(event)} />
                <span>Показать 1 товар</span>
            </label>

            {isLoading ? 
                <Loader /> :
                <> 
                    {products?.length ?
                        <>
                            <Sorting dataSort={sortingData}/>
                            <div className='catalog__items'>
                                {products.map(item => {
                                    return (
                                        <CatalogItem product={item} key={item.id}/>
                                    )
                                })}
                            </div>
                        </> :
                        <div>Продуктов нет в категории</div>
                    }
                </>
            }
        </div>
    );
};