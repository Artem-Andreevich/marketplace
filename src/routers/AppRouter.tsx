import { Route, Routes } from "react-router-dom"
import { AboutPage, MainPage, CategoriesInnerPage, ProductPage, CategoriesPage, CartPage, FavoritesPage} from "../pages"
import { Layout } from "../hoc"


export const AppRouter = () => {

    return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<MainPage />} />
				<Route path="products" element={<CategoriesInnerPage />} />
				{/* <Route path="products/:search" element={<CategoriesInnerPage />} /> */}
				{/* <Route path="products" element={<AboutPage />} /> */}
				<Route path="about" element={<AboutPage />} />
				<Route path="categories" element={<CategoriesPage />} />
				<Route path="categories/:categoryID" element={<CategoriesInnerPage />} />
				<Route path="product/:productID" element={<ProductPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="favorites" element={<FavoritesPage />} />
			</Route>
		</Routes>
    )
}