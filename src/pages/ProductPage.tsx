import { Breadcrumbs, PopularItems, Product } from "../components"

export const ProductPage = () => {

    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <Product />
            <PopularItems />
        </main>
    );
};