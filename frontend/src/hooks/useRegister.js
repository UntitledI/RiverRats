import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useRegister() {
    const [loading, setLoading] = useState(false);

    const {setAuthUser}= useAuthContext();

    const register = async({email, username, password}) => {
        const success = handleInputErrors({email, username, password});
        if(!success) return;

        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/register", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({email, username, password})
            })
            const data = await res.json();
            if(data.error) {
                throw new Error(data.error)
            }
            
            localStorage.setItem("app-user", JSON.stringify(data))
            setAuthUser(data)
            
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }

    }

    return {loading, register};

}

export default useRegister

function handleInputErrors({email, username, password}) {
    if(!email || !username || !password) {
        toast.error('Input fields missing!')
        return false;
    }
    if(password.length < 4) {
        toast.error('Password must be at least 4 characters')
        return false;
    }

    return true;
}
