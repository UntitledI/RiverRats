import {create} from "zustand";

const useLobby = create((set) =>({
    selectedLobby: null,
    setSelectedLobby: (selectedLobby) => set({selectedLobby}),
    guestids:[],
    set: (guestids) => set({guestids})
}))

export default useLobby;