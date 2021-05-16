const { UsersDB } = require('../../common/myDB')
const User = require('./user.model');

const getAll = async () =>  UsersDB;

const get = async id =>  UsersDB.find(user => user.id === id);

const create = async user => {
  const newUser = new User(user)
   UsersDB.push(newUser);
  return newUser
};

const put = async (id, user) => {
  const index = UsersDB.findIndex(currentUser => currentUser.id === id);
   UsersDB.splice(index, 1, { id, 'name': user.name, 'login': user.login, 'password': user.password })
  return user
};

const del = async id => {
  const index = UsersDB.findIndex(currentUser => currentUser.id === id);
   UsersDB.splice(index, 1)
};

module.exports = { getAll, get, create, put, del };
