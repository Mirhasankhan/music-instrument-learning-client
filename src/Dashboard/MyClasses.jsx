import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StatusTab from './StatusTab';

const MyClasses = () => {
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
  
    // todo section title
    return (
        <div className='w-full px-5'>
            <Tabs>
                <TabList className="bg-purple-600 w-2/3 p-3 flex justify-between rounded-xl mb-3">
                    <Tab className="bg-red-500 text-white p-2">Approved Classes</Tab>
                    <Tab className="bg-red-500 text-white p-2">Denied Classes</Tab>
                    <Tab className="bg-red-500 text-white p-2">Pending Classes</Tab>
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