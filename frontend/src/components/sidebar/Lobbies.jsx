import useGetLobbies from "../../hooks/useGetLobbies"
import Lobby from "./Lobby"

const Lobbies = () => {

    const {loading, lobbies} = useGetLobbies();
    const lobbyRows = lobbies?.rows || [];

  return (

    <div className='py-2 flex flex-col overflow-auto' >
        {lobbyRows.map((lobby, idx) => (
            <Lobby
            key={lobby.lobby_id}
            lobby={lobby}
            lastidx={idx === lobbyRows.length - 1}
            />
        ))}

        {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Lobbies
