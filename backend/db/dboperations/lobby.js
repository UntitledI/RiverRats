const pool = require('../dbconfig');

async function createPrivateLobby(name, password) {
    const lobby = await pool.query("INSERT INTO lobby (name, password) VALUES ($1, $2) RETURNING *", 
    [name, password]);
    return lobby;
}

async function createPublicLobby(hostId, name) {
    const lobby = await pool.query("INSERT INTO lobby (hostid, name, capacity) VALUES ($1, $2, $3) RETURNING *", 
    [hostId, name, capacity]);
    return lobby;
}

async function addMember (userid, lobbyid) {
    const lobby = await pool.query("INSERT INTO lobby_member (userid, lobbyid) VALUES ($1, $2) RETURNING *", 
    [userid, lobbyid]);
    return lobby;
}

async function getLobbyMembers(lobbyid) {
    const users = await pool.query("SELECT userid FROM lobby_member WHERE lobbyid = $1",
    [lobbyid]);
    return users;
}

async function getOpenLobbies() {
    const lobbies = await pool.query("SELECT name, capacity, lobby_id FROM lobby WHERE lobby_open");
    return lobbies;
}

async function setLobbyStatus(lobbyid, lobbyStatus) {
    const lobby = await pool.one("UPDATE lobby SET lobby_open = $1 WHERE lobby_id = $2 RETURNING lobby_id",
    [lobbyStatus, lobbyid]);
    return lobby; 
}

async function updateLobby(userid, lobbyid) {
    const user = await pool.query("INSERT INTO lobby_member (userid, lobbyid) VALUES ($1, $2) RETURNING *",
        [userid, lobbyid]);
        return user;
}

module.exports ={
    createPublicLobby : createPublicLobby,
    createPrivateLobby : createPrivateLobby, 
    addMember : addMember,
    getLobbyMembers : getLobbyMembers,
    getOpenLobbies : getOpenLobbies,
    setLobbyStatus : setLobbyStatus,
    updateLobby : updateLobby
}