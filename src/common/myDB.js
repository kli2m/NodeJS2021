const  User  = require('../resources/users/user.model');

const UsersDB=[new User({name:'ivan',login:'ivan',password:'ivan'}),new User({name:'vova',login:'vova',password:'vova'})]


module.exports = {UsersDB };
