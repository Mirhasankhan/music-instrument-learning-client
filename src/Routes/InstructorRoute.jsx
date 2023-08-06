import { Navigate } from "react-router-dom";
import useUserrole from "../Hooks/useUserrole";
import loadings from '../assets/loading.json'
import Lottie from "lottie-react";

const InstructorRoute = ({children}) => {    
    const [addmin, instrucor, isStudent, isLoading] = useUserrole()
    if (isLoading) {
        return <div className="flex justify-center items-center h-[500px]"><Lottie animationData={loadings} loop={true} /></div>
    }
    else if (instrucor) {
        return children
    }
    else if(addmin || isStudent){
        return <Navigate to="/"></Navigate>
    }
   
};

export default InstructorRoute;