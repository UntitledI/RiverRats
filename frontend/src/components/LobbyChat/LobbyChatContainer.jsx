import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


function LobbyChatContainer() {
    const noLobbySelected = false;
  return (
    <div className=" md:min-w-[450px] flex flex-col">
        {noLobbySelected ? <NoLobbySelected/> : (
            <>
                <div className="bg-green-950 px-4 py-2 mb-2 flex items-center justify-center">
                    <span className="text-gray-200 font-semibold">CHAT: </span> <span className="text-gray-500 font-bold">LOBBY</span>
                </div>
            
                <Messages/>
                <MessageInput/> 
                    
            </>
        )}
      
    </div>
  )
}

export default LobbyChatContainer

const NoLobbySelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Lobby Chat</p>
                <IoChatboxEllipsesOutline className="text-3xl md:text-6xl text-center"/>
			</div>
		</div>
	);
};
