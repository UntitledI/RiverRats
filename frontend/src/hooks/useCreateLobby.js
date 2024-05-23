import { useState } from "react";
import toast from "react-hot-toast";

function useCreateLobby() {

    const [loading, setLoading] = useState(false);


    const createLobby = async ({name, password}) => {
        console.log(name, password)
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/lobby", {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, password})
            })
            const data = await res.json();
            if(data.error) {
                throw new Error(data.error)
            }
            
        } catch (error) {
            toast.error(error.message);
            
        } finally{
            setLoading(false);
        }
    }

    return {loading, createLobby};

}

export default useCreateLobby
