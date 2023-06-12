import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Instructors = () => {
    const { data: allInstructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch(`https://music-instrument-learning-server-seven.vercel.app/users?role=instructor`)
            return res.json()
        }

    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3'>
            {
                allInstructors.map(ins => <div
                 key={ins._id}
                 className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={ins.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{ins.name}</h2>
                        <p className='text-xl font-normal'>{ins.email}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning">Show Classes</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Instructors;