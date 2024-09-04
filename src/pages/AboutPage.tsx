import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';


const AboutPage = () => {
    
    return (
        <div className='wrapper'>
            <Header />
            <main className="page inner-page">
                <div className='container'>
                    <h2>About Page</h2>
                </div>
		    </main>
            <Footer />
        </div>
    );
};

export default AboutPage;