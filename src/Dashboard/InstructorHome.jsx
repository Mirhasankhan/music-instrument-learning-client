import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const InstructorHome = () => {
    const {user} = useAuth()
    return (
        <div className='p-5'>
            <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <div>
                <h1 className='uppercase text-3xl font-medium mb-4'>Hi, {user?.displayName}</h1>
                <div className="card h-96 w-full md:w-2/3 bg-wave bg-cover text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-4xl">Total Classes: <span className='text-orange-600 text-5xl font-medium'>05</span></h2>
                        <h1 className='text-4xl font-medium'>Total Student: <span className='text-orange-600 text-5xl font-medium'>07</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;