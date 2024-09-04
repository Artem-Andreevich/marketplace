
import { useParams } from 'react-router-dom';
import CategoriesItems from '../components/CategoriesItems/CategoriesItems';


const CategoriesInnerPage = () => {

    const { categoryID } = useParams()

    return (
        <main className="page inner-page">
            <div className='container'>
                <CategoriesItems categoriesID={categoryID} />
            </div>
        </main>
    );
};

export default CategoriesInnerPage;