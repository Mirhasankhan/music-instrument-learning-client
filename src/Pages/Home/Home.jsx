import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import PopularInstructors from './PopularInstructors';
import TopInstruments from './TopInstruments';
import { ThemeContext } from '../../Providers/ThemeProvider';


const Home = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ background: isDarkMode ? 'black' : 'white' }}>
            <Helmet>
                <title>TuneTutor | Home</title>
            </Helmet>
            {/* <div>                
                <button className='btn btn-secondary' onClick={toggleTheme}>Toggle Theme</button>
            </div> */}
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