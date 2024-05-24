import { useState } from "react";
import toast from "react-hot-toast";

function useCreateLobby() {

    const [loading, setLoading] = useState(false);


    const createLobby = async ({name, password}) => {
        const success = handleInputErrors(name);
        if(!success) return false;
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
            toast.success("lobbycreated successfully!")
            return true;
            
        } catch (error) {
            toast.error(error.message);
            return false;
            
        } finally{
            setLoading(false);
        }
    }

    return {loading, createLobby};

}

export default useCreateLobby

function handleInputErrors(name) {
	if (!name) {
		toast.error("Please fill in name field!");
		return false;
	}

	return true;
}
