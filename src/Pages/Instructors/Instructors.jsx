import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Instructors = () => {
    const { data: allInstructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=instructor`)
            return res.json()
        }

    })

    return (
        <div>
            <h1 className='animate__animated animate__backInRight text-center font-medium w-1/2 mx-auto text-2xl md:text-3xl text-purple-600 my-8 border-b-2 pb-3'>Our Instructors</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-3'>
                {
                    allInstructors.map(ins => <div
                        key={ins._id}
                        className="card card-compact w-96 bg-purple-300 shadow-xl mx-auto">
                        <figure><img className='h-64 w-full' src={ins.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{ins.name}</h2>
                            <p className='text-xl font-normal'>{ins.email}</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-warning">Show Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;