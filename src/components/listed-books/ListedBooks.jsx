import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";

const ListedBooks = () => {

    const [index, setIndex] = useState(0)

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20 mb-10 bg-base-200 p-4'>Books</h1>
            <div className="text-center mt-20 mb-10 p-4">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-primary m-1">< RiArrowDropDownLine className='text-3xl' />Short By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" class="tabs tabs-bordered my-8">
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