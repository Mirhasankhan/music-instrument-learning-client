import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import PopularInstructors from './PopularInstructors';
import TopInstruments from './TopInstruments';


const Home = () => {    
    return (
        <div>
            <Helmet>
                <title>TuneTutor | Home</title>
            </Helmet>
            <div>
                {/* todo have to lower the height of image */}
                <Banner></Banner>
                <PopularInstructors></PopularInstructors>
                <TopInstruments></TopInstruments>
            </div>
        </div>
    );
};

export default Home;