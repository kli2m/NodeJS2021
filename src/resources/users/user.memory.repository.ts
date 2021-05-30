/** @module UserMemoryRepository */

import { UsersDB } from '../../common/myDB';
import { userGetFuncType, userCreateFuncType, userPutFuncType, userDelFuncType } from './user.types'
import User from './user.model';

/**
 * Returns all users from the database
 *
 * @returns {User[]} Array Users
 */
const getAll = async ():Promise<User[]> => UsersDB;

/**
 * Returns user for id
 *
 * @param {string} id User id
 * @returns {User|undefined} Object User 
 */
const get: userGetFuncType = async id => UsersDB.find(user => user.id === id);

/**
 * Create User
 *
 * @param {User} user User Data
 * @returns {User} new User
 */
const create: userCreateFuncType = async user => {
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
const put: userPutFuncType = async (id, user) => {
  const index = UsersDB.findIndex(currentUser => currentUser.id === id);
  UsersDB.splice(index, 1, { id, 'name': user.name, 'login': user.login, 'password': user.password })
  return UsersDB[index]
};

/**
 * Delete user by id
 *
 * @param {string} id User id 
 */
const del: userDelFuncType = async id => {
  const index = UsersDB.findIndex(currentUser => currentUser.id === id);
  UsersDB.splice(index, 1)
};

export = { getAll, get, create, put, del };
