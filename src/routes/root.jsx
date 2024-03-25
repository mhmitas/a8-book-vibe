import React from 'react';
import Navber from '../components/header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;