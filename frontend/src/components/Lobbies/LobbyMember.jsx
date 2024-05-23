function LobbyMember() {
  return (
    <div className="flex flex-col w-full">
        <div className="grid h-15 card bg-base-300 rounded-box gap-1 place-items-center px-4 py-2 mb-2">
            <span className="label-text">USERNAME</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
        </div>
        <div className="divider"></div> 
    </div>
  )
}

export default LobbyMember
