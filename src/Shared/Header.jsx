import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaUserAlt, FaBookmark, FaFilePdf, FaQuestionCircle, FaSlidersH, FaBars, FaTimes, FaHome, FaUserAltSlash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProvider';
import useUserrole from '../Hooks/useUserrole';
import logo from '../assets/tutorlogo.jpg'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [addmin, instrucor, isStudent] = useUserrole()
    const [detail, setDetail] = useState(false)
    const [smDevice, setSmDevice] = useState(false)
    const handleLogout = () => {
        logOut()
            .then(() => {
                setDetail(false)
                toast.error("Logout Successfully", {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
            .catch(() => { })
    }
    return (
        <div className='fixed z-10 bg-opacity-40 bg-black w-full'>
            <div>
                <div className="navbar md:px-12">
                    <div className="flex-1">
                        <img className='rounded-full h-12 md:h-16 mr-2' src={logo} alt="" />
                        <Link to="/"><h1 className='font-semibold text-3xl'>Tune<span className='text-sky-400'>Tutor</span></h1></Link>
                    </div>
                    <div className="md:flex hidden">
                        <ul className="menu menu-horizontal px-1 items-center font-semibold gap-5 text-xl text-white">
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/instructors">Instructors</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to="/classes">Classes</NavLink>
                            {
                                user?.email && <NavLink className={({ isActive }) => (isActive ? "text-[#261a3d]" : "")} to={addmin ? '/dashboard/adminHome' : instrucor ? '/dashboard/instructorHome' : '/dashboard/studentHome'}>Dashboard</NavLink>
                            }
                            
                            {
                                user?.email ? <img onClick={() => setDetail(!detail)} className='rounded-full h-16 md:h-10 w-10 text-black cursor-pointer' src={user?.photoURL} alt="" /> : <NavLink to="/login"><button className='common-button'>Login</button></NavLink>
                            }
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        {
                            smDevice ? <FaTimes className='text-xl' onClick={() => setSmDevice(!smDevice)} /> : <FaBars className='text-xl' onClick={() => setSmDevice(!smDevice)} />
                        }
                        {
                            smDevice && <div className="flex-none">
                                <ul data-aos="fade-right" data-aos-duration="1000" className="menu absolute top-0 left-0 z-20 font-semibold py-6 gap-4 px-6  text-sky-500 bg-black">
                                    <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/"><div className='flex items-center gap-2 text-xl'><FaHome/>Home</div></NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/instructors"><div className='flex items-center gap-2 text-xl'><FaUserAltSlash/>Instructors</div> </NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to="/classes"><div className='flex items-center gap-2 text-xl'><FaFilePdf/>Classes</div> </NavLink>
                                    {
                                        user?.email && <NavLink className={({ isActive }) => (isActive ? "text-white" : "")} to={addmin ? '/dashboard/adminHome' : instrucor ? '/dashboard/instructorHome' : '/dashboard/studentHome'}><div className='flex items-center gap-2 text-xl'><FaFilePdf/>Dashboard</div></NavLink>
                                    }

                                    {
                                        user?.email ? <FaUserAlt onClick={() => setDetail(!detail)} className='text-white text-2xl cursor-pointer' /> : <NavLink to="/login"><button className='formal-button'>Login</button></NavLink>
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                {
                    detail && <div data-aos="fade-left" data-aos-duration="1000" className='absolute right-0 shadow-lg p-4 z-20 bg-sky-400'>
                        <h1 className='text-xl font-bold pb-3'>{user?.email}</h1>
                        <div className="cursor-pointer my-3">
                            <NavLink to="/profile" className="flex items-center gap-3"><FaFilePdf /><h1 className='font-thin' >Profile</h1></NavLink>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaBookmark /><h1 className='font-thin' >My Jobs</h1>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer py-4">
                            <FaSlidersH /><h1 className='font-thin' >Settings</h1>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <FaQuestionCircle /><h1 className='font-thin' >Help Center</h1>
                        </div>
                        <div className="divider"></div>
                        <button onClick={handleLogout} className='danger-button'>Sign Out</button>
                    </div>
                }
            </div>
            {/* <div className='md:hidden navbar-end relative'>
                <FaBars onClick={() => setSmDevice(!smDevice)}></FaBars>
                {
                    smDevice && <div className="navbar-center absolute top-10 -right-2">
                        <ul data-aos="fade-left" className="menu menu-horizontal p-3 flex flex-col bg-orange-400">
                            <NavLink className='nav-links' to="/">Home</NavLink>
                            <NavLink className='nav-links' to="/allToys">All Toys</NavLink>
                            {
                                user?.email &&
                                <div className='flex flex-col'>
                                    <NavLink className='nav-links mr-3' to="/myToys">My Toys</NavLink>
                                    <NavLink className='nav-links' to="/addToys">Add A Toy</NavLink>
                                </div>
                            }
                            <NavLink className='nav-links' to="/blogs">Blogs</NavLink>
                            {
                                user?.email ? <div className='flex'>
                                    <button onClick={handleLogout} className='submit-button'>Logout</button>
                                </div>
                                    : <button className='main-button'><NavLink to="/login">Login</NavLink></button>
                            }
                        </ul>

                    </div>
                }
            </div> */}
        </div>
    );
};

export default Header;