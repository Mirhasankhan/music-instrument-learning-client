import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Legend, Line } from 'recharts';

const InstructorHome = () => {
    const { user } = useAuth()
    const { data: myClass = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`)
            return res.json()
        }
    })

    const approvedClass = myClass.filter(approve => approve.status === 'approved')
    const deniedClass = myClass.filter(deny => deny.status === 'denied')
    const pendingClass = myClass.filter(pending => pending.status === 'pending')

    const result = [
        { name: 'Approved', Number: approvedClass.length },
        { name: 'Denied', Number: deniedClass.length },
        { name: 'Pending', Number: pendingClass.length },
    ]

    return (
        <div className='p-5'>
            <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <div>
                <h1 className='text-3xl ml-5 mb-12 font-semibold'>Overview Of My Classes</h1>
                {
                    myClass.length > 0 ? <LineChart width={730} height={250} data={result}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="name" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Number" stroke="#82ca9d" />
                </LineChart> : <p className='text-center font-semibold'>No Class Added Yet</p>
                }
            </div>
        </div>
    );
};

export default InstructorHome;