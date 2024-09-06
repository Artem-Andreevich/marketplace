import { CategoriesItems, Breadcrumbs } from "../components"

export const CategoriesInnerPage = () => {

    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <CategoriesItems />
            </div>
        </main>
    );
};