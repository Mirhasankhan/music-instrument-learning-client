import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth() 
    const [checkUser, setCheckUser] = useState()    

    useEffect(() => {
        fetch('https://music-instrument-learning-server-seven.vercel.app/users')
            .then(res => res.json())
            .then(data => setCheckUser(data))
    }, [])
    const addmin = checkUser?.find(check => check.role === 'admin' && check.email === user?.email)
    if(addmin){
       return children
    }
    
    if(!loading){
        return <Navigate to="/"></Navigate>
    }
    
};

export default AdminRoute;