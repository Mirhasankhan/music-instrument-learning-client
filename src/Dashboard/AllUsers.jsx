import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useUsers from '../Hooks/useUsers';

const AllUsers = () => {
    const [isDisabled, setDisabled] = useState(false)
    const [users] = useUsers()
    
    const handleMakeInstructor = (id)=>{   
        setDisabled(true)     
        fetch(`https://music-instrument-learning-server-seven.vercel.app/users/instructor/${id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                toast.success('User listed as instructor', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            }
        })
    };

    const handleMakeAdmin = (id)=>{
        setDisabled(true)
        fetch(`https://music-instrument-learning-server-seven.vercel.app/users/admin/${id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                toast.success('User listed as admin', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
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
            <Toaster></Toaster>
        </div>
    );
};

export default AllUsers;