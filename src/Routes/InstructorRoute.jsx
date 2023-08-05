import { Navigate } from "react-router-dom";
import useUserrole from "../Hooks/useUserrole";

const InstructorRoute = ({children}) => {    
    const [addmin, instrucor, isStudent, isLoading] = useUserrole()
    if (isLoading) {
        return <span className="loading loading-spinner text-secondary"></span>
    }
    else if (instrucor) {
        return children
    }
    else if(addmin,isStudent){
        return <Navigate to="/"></Navigate>
    }
   
};

export default InstructorRoute;