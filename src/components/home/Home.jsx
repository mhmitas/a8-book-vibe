import React from 'react';
import Footer from '../footer/Footer';
import Banner from '../header/Banner';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Banner></Banner>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;