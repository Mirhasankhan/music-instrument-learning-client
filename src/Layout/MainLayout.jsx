import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='px-6'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;