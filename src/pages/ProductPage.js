import React from 'react';
import Header from '../layout/Header/Header';
import { useParams } from 'react-router-dom';
import Footer from '../layout/Footer/Footer';


const ProductPage = () => {

    const { productID } = useParams()

    console.log(productID)

    return (
        <div className='wrapper'>
            <Header />
            <main className="page inner-page">
                <div className='container'>
                    <h2>Product</h2>
                </div>
		    </main>
            <Footer />
        </div>
    );
};

export default ProductPage;