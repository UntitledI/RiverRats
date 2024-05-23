import SideBar from '../../components/sidebar/Sidebar'
import LobbyContainer from '../../components/Lobbies/LobbyContainer'
import LobbyChatContainer from '../../components/LobbyChat/LobbyChatContainer'

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <LobbyContainer />
      <LobbyChatContainer/>
    </div>
  )
}

export default Home

