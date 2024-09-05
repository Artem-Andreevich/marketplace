import { Route, Routes } from "react-router-dom"
import { AboutPage, MainPage, CategoriesInnerPage, ProductPage, CategoriesPage} from "../pages"
import { Layout } from "../hoc"

function AppRouter() {
    return (
      <Routes>
        <Route path="/" element={<Layout/>}>

			<Route index element={<MainPage />} />
			<Route path="about" element={<AboutPage />} />
			<Route path="categories" element={<CategoriesPage />} />
			<Route path="categories/:categoryID" element={<CategoriesInnerPage />}/>
			<Route path="product/:productID" element={<ProductPage />} />

        </Route>
      </Routes>
    )
}
export default AppRouter