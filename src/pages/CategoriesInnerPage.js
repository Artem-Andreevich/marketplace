import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layout/Header/Header';
import CategoriesItems from '../components/CategoriesItems/CategoriesItems';
import Footer from '../layout/Footer/Footer';


const CategoriesInnerPage = () => {

    const { categoryID } = useParams()

    return (
        <div className='wrapper'>
            <Header />
            <main className="page inner-page">
                <div className='container'>
                    <CategoriesItems category={categoryID} />
                </div>
		    </main>
            <Footer />
        </div>
    );
};

export default CategoriesInnerPage;