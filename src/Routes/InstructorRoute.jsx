import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const { user } = useAuth()
    const [checkUser, setCheckUser] = useState()

    useEffect(() => {
        fetch('https://music-instrument-learning-server-seven.vercel.app/users')
            .then(res => res.json())
            .then(data => setCheckUser(data))
    }, [])
    const instrucor = checkUser?.find(check => check.role === 'instructor' && check.email === user?.email)
    if (instrucor) {
        return children
    }

    return <Navigate to="/"></Navigate>
};

export default InstructorRoute;