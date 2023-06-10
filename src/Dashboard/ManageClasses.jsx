import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageClasses = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }
        
    })
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
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
                            <td>{sClass.instructorName}</td>
                            <td>{sClass.email}</td>
                            <td>{sClass.seats}</td>
                            <td>{sClass.price}</td>
                            <td className='text-red-400 font-medium'>{sClass.status}</td>
                            <td className='flex items-center gap-3'>
                                <button className="btn btn-primary">Approve</button>
                                <button className="btn btn-primary">Deny</button>
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