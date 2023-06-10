import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
    const {user} = useAuth()
    const {data: myClass= []} = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`)
            return res.json()
        }
    })
    console.log(myClass);
    return (
        <div>
            myclsss
        </div>
    );
};

export default MyClasses;