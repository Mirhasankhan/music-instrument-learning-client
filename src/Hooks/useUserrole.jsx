import { useEffect, useState } from "react"
import useAuth from "./useAuth"

const useUserrole = ()=>{
    const [checkUser, setCheckUser] = useState()
    const { user , loading} = useAuth()  

    useEffect(() => {
        fetch('https://music-instrument-learning-server-seven.vercel.app/users')
            .then(res => res.json())
            .then(data => setCheckUser(data))
    }, [])
    const addmin = checkUser?.find(check => check.role === 'admin' && check.email === user?.email)
    const instrucor = checkUser?.find(check => check.role === 'instructor' && check.email === user?.email)
    let isStudent = false
    if(!addmin && !instrucor && !loading){
        isStudent = true
    }
    return [addmin, instrucor, isStudent]
}

export default useUserrole;