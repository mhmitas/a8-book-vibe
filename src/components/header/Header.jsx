import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-200 shadow-xl p-4 mb-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" className="">Home</NavLink></li>
                            <li><NavLink to="/listedBooks" className="">Listed Books</NavLink></li>
                            <li><NavLink to="/pages-to-read" className="">Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-black text-xl">eBookVerse</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal font-semibold px-1">
                        <li><NavLink to="/" className="">Home</NavLink></li>
                        <li><NavLink to="/listedBooks" className="">Listed Books</NavLink></li>
                        <li><NavLink to="/pages-to-read" className="">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <NavLink to="/sign-in" className="btn btn-primary">Sign In</NavLink>
                    <Link to="/sign-up" className="btn btn-secondary">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;