import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast,{ Toaster } from 'react-hot-toast';

const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://music-instrument-learning-server-seven.vercel.app/classes')
            return res.json()
        }

    })

    const handleApprove = (id)=>{
        fetch(`https://music-instrument-learning-server-seven.vercel.app/classes/${id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                toast.success('Class Approved!!', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
                refetch()
            }
            
        })
    }

    const handleDeny = (id)=>{
        fetch(`https://music-instrument-learning-server-seven.vercel.app/class/${id}`,{
            method: 'PATCH'
        })
        .then(data =>{           
            if(data.status === 200){             
                toast.success('Class Denied!!', {
                    position: 'top-right',
                    style: { backgroundColor: 'red', color: 'white' }
                })
                refetch()
            }
            
        })
    }
   
    return (
        <div className='w-full px-6'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Detail</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(sClass => <tr
                                className='hover'
                                key={sClass._id}
                            >
                                <td><img className='h-12 w-12 rounded-full' src={sClass.photo} alt="" /> </td>
                                <td>{sClass.class}</td>
                                <td>
                                    <p className='font-medium text-xl'>{sClass.instructorName}</p>
                                    <p> {sClass.email}</p>
                                </td>

                                <td>{sClass.seats}</td>
                                <td>{sClass.price}</td>
                                <td className='text-red-400 font-medium'>{sClass.status}</td>
                                <td className='flex items-center gap-3'>
                                    <button onClick={()=>handleApprove(sClass._id)} className="btn btn-success">Approve</button>
                                    <button onClick={()=>handleDeny(sClass._id)} className="btn btn-warning">Deny</button>
                                    <button className="btn btn-primary">Send Feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>                  
                </table>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default ManageClasses;