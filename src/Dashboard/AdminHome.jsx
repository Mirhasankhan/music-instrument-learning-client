import React from 'react';
import useAuth from '../Hooks/useAuth';

const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className='uppercase'>Hi, {user?.displayName}</h1>
        </div>
    );
};

export default AdminHome;