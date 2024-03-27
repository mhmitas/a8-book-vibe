import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { getReadBooksFromLocalStorage } from '../../utils/local-storage';

const ListedBooks = () => {

    const [index, setIndex] = useState(0)

    // control short by-->
    // load read books
    const [books, setBooks] = useState([])
    useEffect(() => {
        const readBooks = getReadBooksFromLocalStorage()
        setBooks(readBooks)
    }, [])
    console.log(books)


    // ---------->>


    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20 mb-10 bg-base-200 p-4'>Books</h1>
            <div className="text-center mt-20 mb-10 p-4">
                <select name="SortBy" className='p-3 bg-secondary text-base-100 font-semibold rounded-md' id="SortBy">
                    <option value="Sort By">Sort By</option>
                    <option value="Rating">Rating</option>
                    <option value="Number of pages">Number of pages</option>
                    <option value="Publisher year">Publisher year</option>
                </select>
            </div>
            <div role="tablist" className="tabs tabs-bordered my-8">
                <Link
                    onClick={() => setIndex(0)}
                    to=""
                    role="tab"
                    className={`tab ${index === 0 && 'tab-active'}`}
                >Read Books</Link>
                <Link
                    onClick={() => setIndex(1)}
                    to="wishlist"
                    role="tab"
                    className={`tab ${index === 1 && 'tab-active'}`}
                >Wishlist Books</Link>
            </div>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;