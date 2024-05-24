import useLobby from "../../zustand/useLobby";
import Lobby from "./Lobby";
import StartGame from "./StartGame";
import JoinLobby from "./JoinLobby";

function LobbyContainer() {
    const {selectedLobby, setSelectedLobby} = useLobby();
    const {joinLobby, setJoinLobby} = useLobby();

  return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedLobby ? (
            <NoLobbySelected/>
        ) :  selectedLobby && !joinLobby ? (
            <JoinLobby/>

        ) : selectedLobby && joinLobby ? (
            <>
            <div className="bg-green-950 px-4 py-2 mb-2 flex items-center justify-center">
                <span className="text-gray-200 font-bold">LOBBY</span>
            </div>
            <Lobby/>
            <StartGame/>
        </>
        ) : null}
    </div>
  )
}


export default LobbyContainer

const NoLobbySelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome</p>
				<p>Select a Lobby to play</p>
			</div>
		</div>
	);
};

