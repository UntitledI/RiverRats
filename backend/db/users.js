class Users{
    constructor(id, username, password, email, first_name, salt, profile_image){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.first_name = first_name;
        this.salt = salt;
        this.profile_image = profile_image;
    }
}

module.exports = Users;