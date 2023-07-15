import { Navigate } from "react-router-dom";
import useUserrole from "../Hooks/useUserrole";

const InstructorRoute = ({children}) => {    
    const [addmin, instrucor, isStudent, isLoading] = useUserrole()
    if (isLoading) {
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if (instrucor) {
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default InstructorRoute;