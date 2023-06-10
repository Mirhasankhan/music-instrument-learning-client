import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../Hooks/useAuth';

const AllUsers = () => {
    const [isDisabled, setDisabled] = useState(false)
    const { user } = useAuth()
    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
    const handleMakeInstructor = (id)=>{   
        setDisabled(true)     
        fetch(`http://localhost:5000/users/instructor/${id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                alert('user listed as instructor')
            }
        })
    };

    const handleMakeAdmin = (id)=>{
        setDisabled(true)
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                alert('user listed as Admin')
            }
        })
    }

    return (
        <div className='w-full md:px-4'>
            <div className="overflow-x-auto">
                <table className="table">                
                    <thead className='bg-purple-400 text-white'>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Manage Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    <button  onClick={()=>handleMakeInstructor(user?._id)} className="btn btn-outline btn-info mr-2">Make Instructor</button>
                                    <button  onClick={()=>handleMakeAdmin(user?._id)} className="btn btn-outline btn-success">Make Admin</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;