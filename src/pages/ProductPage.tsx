import { Breadcrumbs } from "../components"
import { useParams } from 'react-router-dom';

export const ProductPage = () => {

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