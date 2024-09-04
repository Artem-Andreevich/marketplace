import React from 'react';
import Header from '../layout/Header/Header';
import PopularItems from '../components/Popular-items/PopularItems';
import Categories from '../components/Categories/Categories';
import Footer from '../layout/Footer/Footer';

const MainPage = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className="page">
                <Categories />
		    	<PopularItems />
		    </main>
            <Footer />
        </div>
    );
};

export default MainPage;