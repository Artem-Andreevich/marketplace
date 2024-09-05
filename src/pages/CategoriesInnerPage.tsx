import { useParams } from 'react-router-dom';
import { CategoriesItems, Breadcrumbs } from "../components"

const CategoriesInnerPage = () => {

    const { categoryID } = useParams()

    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <CategoriesItems categoriesID={categoryID} />
            </div>
        </main>
    );
};

export default CategoriesInnerPage;