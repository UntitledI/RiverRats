import {create} from "zustand";

const useLobby = create((set) =>({
    selectedLobby: null,
    setSelectedLobby: (selectedLobby) => set({selectedLobby}),
    joinLobby: null,
    setJoinLobby: (joinLobby) => set({joinLobby}),
    guestids: [],
    setGuestIds: (guestids) => set({guestids})
}))

export default useLobby;