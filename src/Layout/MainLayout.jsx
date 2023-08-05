import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Header from '../Shared/Header';

const MainLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Header/>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;