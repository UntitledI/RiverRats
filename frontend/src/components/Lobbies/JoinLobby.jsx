import { useAuthContext } from "../../context/AuthContext";
import useLobby from "../../zustand/useLobby";
import useJoinLobby from "../../hooks/useJoinLobby";


const JoinLobby = () => {
    const {selectedLobby, setSelectedLobby} = useLobby();
    const {joinLobby, setJoinLobby} = useLobby();
    const {authUser} = useAuthContext()

    const{loading, userjoinLobby} = useJoinLobby();

    const handleJoinLobby = async () => {
        setJoinLobby(true);
        await userjoinLobby(authUser.id, selectedLobby.lobby_id)
    }
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <button className="btn  btn-success" onClick={handleJoinLobby}>Join {selectedLobby.name}?</button>
			</div>
		</div>
	);
};

export default JoinLobby
