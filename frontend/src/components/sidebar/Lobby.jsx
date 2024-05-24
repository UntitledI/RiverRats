import useLobby from "../../zustand/useLobby"

function Lobby({lobby, lastidx}) {

    const {selectedLobby, setSelectedLobby} = useLobby();

    const isSelected = selectedLobby?.lobby_id === lobby.lobby_id


  return <>
    <div className={`flex gap-2 items-center hover:bg-green-950 rounded p-2 py-4 cursor-pointer
        ${isSelected ? "bg-green-950" : ""} 
    `}
        onClick={() => setSelectedLobby(lobby)}
    >
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{lobby.name}</p>
            </div>
        </div>
    </div>

    {!lastidx && <div className="divider my-0 py-0 h-1" />}
    </>
}

export default Lobby
