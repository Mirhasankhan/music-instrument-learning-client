import React from 'react';
import logo from '../assets/tutorlogo.jpg'
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="grid grid-cols-2 md:grid-cols-3 footer p-10 bg-[#111723] text-base-content">
                <div className='text-white'>
                    <div className='flex items-center'>
                        <img className='rounded-full h-12 md:h-16' src={logo} alt="" />
                        <h1 className='italic text-3xl font-semibold ml-2'>TuneTutor</h1>
                    </div>
                    <h1>Tune Tutor is your final destination for learning music instruments. We have some amazing instructors with long time experience. If you are intructor you can earn money safely from our site.</h1>
                </div>
                <div>
                    <span className="text-white text-xl">Contact Info</span>
                    <h3 className="text-gray-400">Address:</h3>
                    <p className="text-white">Lotif Tower, Trunk Road, Feni Bangladesh</p>
                    <h3 className="text-gray-400">Phone:</h3>
                    <p className="text-white">+96877450240</p>
                    <h3 className="text-gray-400">Email:</h3>
                    <p className="text-white">Example@gmail.com</p>
                   
                </div>
                <div className='text-white'>
                    <span className="text-xl">My Account</span>
                    <Link to="login">Login</Link>
                    <Link to="">Order History</Link>
                    <Link to="">My Wishlist</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className='text-3xl'></FaFacebook>
                        <FaYoutube className='text-3xl'></FaYoutube>
                        <FaTwitter className='text-3xl'></FaTwitter>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;