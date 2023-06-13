import React from 'react';
import useAuth from '../Hooks/useAuth';

const InstructorHome = () => {
    const {user} = useAuth()
    return (
        <div className='p-5'>
            <div>
                <h1 className='uppercase text-3xl font-medium mb-4'>Hi, {user?.displayName}</h1>
                <div className="card h-96 w-full md:w-2/3 bg-wave bg-cover text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Total Classes <span className='text-orange-600 text-5xl font-medium'>44</span></h2>
                        <h1 className='text-2xl font-medium'>Total Users: <span className='text-orange-600 text-5xl font-medium'>44</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;