
import { AboutPage, MainPage, CategoriesInnerPage, ProductPage, CategoriesPage, CartPage, FavoritesPage} from "../pages"
import { Layout } from "../hoc"
import { useGetProductNameByIdQuery } from "../store/api/api";


const DynamicProductBreadcrumb = ({ match }: any) => {
    const { data: name} = useGetProductNameByIdQuery(match.params.productID)
    return (<span>{name}</span>)
}
    

export const routes = [
		{
			path: '/',
			element: <Layout />,
            children: [
                {
                    index: true,
                    element: <MainPage />,
                    breadcrumb: "Главная",
                },
                // {
                //     path: 'products',
                //     element: <CategoriesInnerPage />,
                //     breadcrumb: 'Продукты',
                // },
                {
                    path: 'about',
                    element: <AboutPage />,
                    breadcrumb: "О нас",
                },
                {
                    path: 'categories',
                    breadcrumb: 'Категории',
                    element: <CategoriesPage />,
                },
                {
                    path: 'categories/:categoryID',
                    element: <CategoriesInnerPage />,
                    breadcrumb: "Айфоны"
                },
                {
                    path: 'categories/:categoryID/:productID',
                    element: <ProductPage />,
                    breadcrumb: DynamicProductBreadcrumb
                },
                // {
                //     path: 'products/:productID',
                //     element: <ProductPage />,
                //     breadcrumb: DynamicProductBreadcrumb
                // },
                {
                    path: 'cart',
                    element: <CartPage />,
                    breadcrumb: "Корзина"
                },
                {
                    path: 'favorites',
                    element: <FavoritesPage />,
                    breadcrumb: "Избранное"
                }
            ]
		}
	]
