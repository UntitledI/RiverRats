import SearchInput from "./SearchInput"
import Lobbies from "./Lobbies"
import Logout from "./Logout.jsx"
import CreateLobby from "./CreateLobby.jsx"

function Sidebar() {
    return (
      <div className=" p-4 flex flex-col">
        <CreateLobby/>
        <div className="divider px-3"></div>
        <SearchInput/>
        <div className="divider px-3"></div>
        <Lobbies/>
        <Logout/>
      </div>
    )
  }
  
  export default Sidebar

