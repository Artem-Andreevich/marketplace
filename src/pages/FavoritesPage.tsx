import { Breadcrumbs, CatalogItem } from "../components"
import { useAppSelector } from "../hooks/useAppSelector";


export const FavoritesPage = () => {

    const favorites = useAppSelector( state => state.favorites)

    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className="container">
                {favorites?.length ?
                    <div className='catalog__items'>
                        {favorites.map(item => {
                            return (
                                <CatalogItem product={item} key={item.id}/>
                            )
                        })}
                    </div> :
                    <div>Список избранного пока пуст</div>
                }
            </div> 
        </main>
    );
};