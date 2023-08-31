import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Lottie from "lottie-react";
import useAuth from '../Hooks/useAuth';
import spinner from '../assets/animation_llxinh3q.json'

const MainLayout = () => {
    const {loading} = useAuth()
    return (loading ? <div className='flex justify-center items-center'><Lottie style={{ height: '400px', width: '600px' }} animationData={spinner} loop={true} /> </div> :
    <div>
        <Header></Header>
        <div className='min-h-[calc(100vh-100px)]'>
            <Outlet />                
        </div>
        <Footer></Footer>
    </div>
);
};

export default MainLayout;