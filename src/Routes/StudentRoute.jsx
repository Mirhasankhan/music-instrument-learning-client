import { Navigate } from "react-router-dom";
import useUserrole from "../Hooks/useUserrole";
import spinner from '../assets/animation_llxinh3q.json'
import Lottie from "lottie-react";

const StudentRoute = ({ children }) => {
    const [addmin, instrucor, isStudent, isLoading] = useUserrole()
    if (isLoading) {
        return <div className='flex justify-center items-center'><Lottie style={{ height: '400px', width: '600px' }} animationData={spinner} loop={true} /> </div>
    }
    else if (isStudent) {
        return children
    }
    else if(addmin || instrucor){
        return <Navigate to="/"></Navigate>
    }
   
};

export default StudentRoute;