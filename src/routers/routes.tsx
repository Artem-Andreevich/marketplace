import { AboutPage, MainPage, CategoriesInnerPage, ProductPage, CategoriesPage, CartPage, FavoritesPage, AuthPage, RegisterPage} from "../pages"
import { Layout } from "../hoc"
import { useGetCategoriesNameByUrlQuery, useGetProductNameByIdQuery } from "../store/api/api";
import { AdminPage } from "../pages/Admin/AdminPage";


const DynamicProductBreadcrumb = ({ match }: any) => {
    const { data: name} = useGetProductNameByIdQuery(match.params.productID)
    return (<span>{name}</span>)
}

const DynamicCategoryBreadcrumb = ({ match }: any) => {
    const { data: name } = useGetCategoriesNameByUrlQuery(match.params.categoryID)
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
                    props: {title: "Главная"}
                },
                {
                    path: 'about',
                    element: <AboutPage />,
                    breadcrumb: "О нас",
                    props: {title: "О нас"}
                },
                {
                    path: 'categories',
                    element: <CategoriesPage />,
                    breadcrumb: 'Категории',
                    props: {title: "Категории"}
                },
                {
                    path: 'categories/:categoryID',
                    element: <CategoriesInnerPage />,
                    breadcrumb: DynamicCategoryBreadcrumb,

                },
                {
                    path: 'categories/:categoryID/:productID',
                    element: <ProductPage />,
                    breadcrumb: DynamicProductBreadcrumb
                },
                {
                    path: 'cart',
                    element: <CartPage />,
                    breadcrumb: "Корзина",
                    props: {title: "Корзина"}

                },
                {
                    path: 'favorites',
                    element: <FavoritesPage />,
                    breadcrumb: "Избранное",
                    props: {title: "Избранное"}
                },
                {
                    path: 'auth',
                    element: <AuthPage />,
                },
                {
                    path: 'register',
                    element: <RegisterPage />,
                }
            ]
		},
        {
            path: 'admin',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <AdminPage />,
                }
            ]
        }
	]
