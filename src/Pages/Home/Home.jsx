import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';


const Home = () => {    
    return (
        <div>
            <Helmet>
                <title>TuneTutor | Home</title>
            </Helmet>
            <div>
                {/* todo have to lower the height of image */}
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;