import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StatusTab from './StatusTab';
import 'animate.css';

const MyClasses = () => {
    const { user } = useAuth()
    const { data: myClass = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://music-instrument-learning-server-seven.vercel.app/myClasses?email=${user?.email}`)
            return res.json()
        }
    })
    const approvedClass = myClass.filter(approve => approve.status === 'approved')
    const deniedClass = myClass.filter(deny => deny.status === 'denied')
    const pendingClass = myClass.filter(pending => pending.status === 'pending')
  
    // todo section title
    return (
        <div className='w-full p-5'>
            <h1 className=' text-5xl text-green-400 font-medium text-center mb-6'>My animation</h1>
            <Tabs>
                <TabList className="bg-purple-600 w-2/3 p-3 flex justify-between rounded-xl mb-3">
                    <Tab className="bg-green-500 text-white p-2 rounded-md">Approved Classes</Tab>
                    <Tab className="bg-red-500 text-white p-2 rounded-md">Denied Classes</Tab>
                    <Tab className="bg-orange-500 text-white p-2 rounded-md">Pending Classes</Tab>
                </TabList>

                <TabPanel>
                    <StatusTab status={approvedClass}></StatusTab>
                </TabPanel>
                <TabPanel>
                <StatusTab status={deniedClass}></StatusTab>
                </TabPanel>
                <TabPanel>
                <StatusTab status={pendingClass}></StatusTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyClasses;