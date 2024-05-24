import useGetLobbyGuests from "../../hooks/useGetLobbyGuests"
import LobbyMember from "./LobbyMember"

const Lobby = () => {

  const {guestids, loading}= useGetLobbyGuests();
  console.log(guestids)
  return (
    <div className="px-4 flex-1 overflow-auto">
        <LobbyMember/>
    </div>
  )
}

export default Lobby
