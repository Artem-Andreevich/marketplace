import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import AboutPage from "../pages/AboutPage"
import CategoriesInnerPage from "../pages/CategoriesInnerPage"
import ProductPage from "../pages/ProductPage"
import Layout from "../layout/Layout"
import Categories from "../components/Categories/Categories"
import CategoriesPage from "../pages/CategoriesPage"


export function AppRouter() {
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