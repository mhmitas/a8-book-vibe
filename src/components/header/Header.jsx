import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-gray-900 text-white mb-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu font-extrabold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" className="">Home</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BookVerse</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-extrabold px-1">
                        <li><NavLink to="/" className="">Home</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link className="btn btn-primary">Sign In</Link>
                    <Link className="btn btn-primary">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;