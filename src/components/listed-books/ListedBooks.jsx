import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ListedBooks = () => {

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20 mb-10 bg-base-200 p-4'>Books</h1>

            <div className='*:btn'>
                <NavLink to="">Read Books</NavLink>
                <NavLink to="wishlist">Wishlist Books</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;