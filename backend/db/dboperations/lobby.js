const pool = require('../dbconfig');


async function createPrivateLobby(hostId, name, password, capacity) {
    const lobby = await pool.query("INSERT INTO lobby (hostid, name, password, capacity) VALUES ($1, $2, $3, $4) RETURNING *", 
    [hostId, name, password, capacity]);
    return lobby;
}

async function createPublicLobby(hostId, name, capacity) {
    const lobby = await pool.query("INSERT INTO lobby (hostid, name, capacity) VALUES ($1, $2, $3) RETURNING *", 
    [hostId, name, capacity]);
    return lobby;
}

async function addMember (userid, lobbyid) {
    const lobby = await pool.query("INSERT INTO lobby (userid, lobbyid) VALUES ($1, $2) RETURNING *", 
    [userid, lobbyid]);
    return lobby;

}

module.exports ={
    createPublicLobby : createPublicLobby,
    createPrivateLobby : createPrivateLobby, 
    addMember : addMember
}