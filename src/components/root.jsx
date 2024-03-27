import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './header/Header';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <div>
                <Toaster />
            </div>
        </div>
    );
};

export default Root;