import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import AboutPage from "../pages/AboutPage"
import CategoriesInnerPage from "../pages/CategoriesInnerPage"
import ProductPage from "../pages/ProductPage"


export function AppRouter() {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="categories/:categoryID" element={<CategoriesInnerPage />} />
        <Route path="product/:productID" element={<ProductPage />} />
      </Routes>
    )
  }
export default AppRouter