import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StatusTab from './StatusTab';
import 'animate.css';
import { Helmet } from 'react-helmet-async';

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
        <div className='px-5'>
            <Helmet>
                <title>Dashboard | My Classes</title>
            </Helmet>
              <h1 className='animate__animated animate__backInRight text-center font-medium text-2xl md:text-3xl text-purple-600 my-8 border-b-2 pb-3'>My Classes With Admin Review</h1>
            <div className='w-full'>
                <Tabs>
                    <TabList className="bg-purple-600 w-full p-3 flex justify-between rounded-xl mb-3">
                        <Tab className="common-button text-white p-2 rounded-md">Approved Classes</Tab>
                        <Tab className="common-button text-white p-2 rounded-md">Denied Classes</Tab>
                        <Tab className="common-button text-white p-2 rounded-md">Pending Classes</Tab>
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
        </div>
    );
};

export default MyClasses;