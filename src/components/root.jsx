import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navber from './header/Header';
import { Toaster } from 'react-hot-toast';
import Loding from './loding/Loding';


const Root = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <Loding></Loding>
    }
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