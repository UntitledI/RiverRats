import { useState } from 'react';
import useLobby from '../zustand/useLobby';
import toast from 'react-hot-toast'

function useJoinLobby() {

    const[loading, setLoading] = useState(false);
    const {guestids, setGuestIds, selectedLobby} = useLobby();

    const userjoinLobby = async (userid, lobbyid) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/lobby/join",{
                method:"POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({userid, lobbyid})
        })
        const data = await res.json();
        if(data.error) throw new Error(data.error)

        setGuestIds(...guestids, data);

            
        } catch (error) {
            toast.error(error.message);
            
        } finally{
            setLoading(false);

        }

    }

    return{ loading, userjoinLobby}

}

export default useJoinLobby


