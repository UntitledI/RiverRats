var config = require('./dbconfig');
const sql = require('mssql');



async function getUsers() {
    try{
        let pool = await sql.connect(config);
        let users = await pool.query("SELECT * FROM users");
        console.log(users);
        return users.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

async function addUser(user) {

    try{
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
        .input('id', sql.Int, user.id)
        .input('username', sql.NVarChar, user.username)
        .input('email', sql.NVarChar, user.email)
        .input('password', sql.NVarChar, user.password )
        .input('first_name', sql.NVarChar, user.first_name)
        .input('salt', sql.Int, user.salt)
        .input('profile_image', sql.NVarChar, user.profile_image)
        .execute('InsertUser');
    return insertUser.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports ={
    getUsers :getUsers ,
    addUser : addUser
}