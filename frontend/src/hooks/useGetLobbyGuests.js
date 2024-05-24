import { useEffect, useState } from "react";
import useLobby from "../zustand/useLobby";
import toast from "react-hot-toast";

function useGetLobbyGuests() {
    const[loading, setLoading] = useState(false);
    const {guestids, setGuestids, selectedLobby} = useLobby();

    useEffect(() => {
        const getGuests = async () => {
            setLoading(true);
            try {
                const res = await fetch (`http://localhost:3000/lobby/join/${selectedLobby.lobby_id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error)
                setGuestids(data);
            } catch (error) {
                toast.error(error.message)
                
            } finally {
                setLoading(false);
            }
        };

        if(selectedLobby?.lobby_id) getGuests();
    }, [selectedLobby?.lobby_id, setGuestids]);

    return {guestids, loading}

}

export default useGetLobbyGuests
