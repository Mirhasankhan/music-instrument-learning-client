import useAuth from "./useAuth"
import { useQuery } from "@tanstack/react-query"

const useUserrole = ()=>{   
    const { user , loading} = useAuth() 
    const {data: checkUser = [], isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await fetch('https://music-instrument-learning-server-seven.vercel.app/users')
            return res.json()
            
        }
    }) 
    
    const addmin = checkUser?.find(check => check.role === 'admin' && check.email === user?.email)
    const instrucor = checkUser?.find(check => check.role === 'instructor' && check.email === user?.email)
    let isStudent = false
    if(!addmin && !instrucor && !loading){
        isStudent = true
    }
    return [addmin, instrucor, isStudent, isLoading]
}

export default useUserrole;