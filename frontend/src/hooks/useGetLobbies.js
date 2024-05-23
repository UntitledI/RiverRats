import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useGetLobbies() {
    const [loading, setLoading] = useState(false);
    const [lobbies, setLobbies] = useState([]);

    useEffect(() => {
        const getLobbies = async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:3000/lobby');
                const data = await res.json();
                if(data.error) {
                    throw new Error(data.error) 
                }
                setLobbies(data)
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getLobbies();
    }, [])
  

    return {loading, lobbies}
}

export default useGetLobbies
