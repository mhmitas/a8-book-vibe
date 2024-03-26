import React from 'react';
import Footer from '../footer/Footer';
import Banner from '../header/Banner';
import { useLoaderData } from 'react-router-dom';
import Books from '../books/Books';

const Home = () => {

    const books = useLoaderData()
    // console.log(books)

    return (
        <div>
            <div className="min-h-screen">
                <Banner></Banner>
                <div>
                    <h1 className='text-3xl font-bold text-center mt-20 mb-10'>Books</h1>
                    <Books books={books}></Books>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;