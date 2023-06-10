import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const { data: approvedClasses = [] } = useQuery({
        queryKey: ['approved'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes?status=approved')
            return res.json()
        }
    })
console.log(approvedClasses);
    return (
        <div>
            <Helmet>
                <title>TuneTutor | Classes</title>
            </Helmet>
            <div>
                {
                    approvedClasses.map(approved => <div 
                        key={approved._id}
                    className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={approved.photo} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{approved.class}</h2>
                            <p>{approved.instructorName}</p>
                            <p>{approved.seats}</p>
                            <p>{approved.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Select Class</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;