import LobbyMember from "./LobbyMember"

const Lobby = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
        <LobbyMember/>
        <LobbyMember/>
        <LobbyMember/>
        <LobbyMember/>
    </div>
  )
}

export default Lobby
