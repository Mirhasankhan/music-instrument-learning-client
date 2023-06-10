import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }

    })

    const handleApprove = (id)=>{
        fetch(`http://localhost:5000/classes/${id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            refetch()
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
                                    <button className="btn btn-warning">Deny</button>
                                    <button className="btn btn-primary">Send Feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;