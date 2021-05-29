/** @module UserMemoryRepository */

const { UsersDB } = require('../../common/myDB')
const User = require('./user.model');

/**
 * Returns all users from the database
 *
 * @returns {User[]} Array Users
 */
const getAll = async () => UsersDB;

/**
 * Returns user for id
 *
 * @param {string} id User id
 * @returns {User|undefined} Object User 
 */
const get = async id => UsersDB.find(user => user.id === id);
/**
 * Create User
 *
 * @param {User} user User Data
 * @returns {User} new User
 */
const create = async user => {
  const newUser = new User(user)
  UsersDB.push(newUser);
  return newUser
};

/**
 * Changes user properties by id
 * Returns the modified user
 *
 * @param {string} id User id 
 * @param {User} user Object User with modified parameters
 * @returns {User} Object User 
 */
const put = async (id, user) => {
  const index = UsersDB.findIndex(currentUser => currentUser.id === id);
  UsersDB.splice(index, 1, { id, 'name': user.name, 'login': user.login, 'password': user.password })
  return UsersDB[index]
};

/**
 * Delete user by id
 * Delete all tasks user by id
 *
 * @param {string} id User id 
 */
const del = async id => {
  const index = UsersDB.findIndex(currentUser => currentUser.id === id);
  UsersDB.splice(index, 1)
};

module.exports = { getAll, get, create, put, del };
