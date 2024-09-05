
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';


const ProductPage = () => {

    const { productID } = useParams()

    console.log(productID)

    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <h2>Product</h2>
            </div>
        </main>
    );
};

export default ProductPage;