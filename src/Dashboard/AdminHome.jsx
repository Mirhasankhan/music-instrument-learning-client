import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    const [ins, setIns] = useState(null)
    const [users] = useUsers()   
    useEffect(() => {
        fetch('https://music-instrument-learning-server-seven.vercel.app/users?role=instructor')
            .then(res => res.json())
            .then(data => setIns(data.length))
    }, [])
    const { user } = useAuth()
    return (
        <div className='p-5'>
            <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <div>
                <h1 className='uppercase text-3xl font-medium mb-4'>Hi, {user?.displayName}</h1>
                <div className="card h-96 w-full md:w-2/3 bg-wave bg-cover text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Total Instructors <span className='text-orange-600 text-5xl font-medium'>{ins}</span></h2>
                        <h1 className='text-2xl font-medium'>Total Users: <span className='text-orange-600 text-5xl font-medium'>{users.length}</span> </h1>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;