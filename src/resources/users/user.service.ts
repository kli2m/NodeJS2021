/** @module UserService */

import usersRepo from './user.memory.repository';
import User from './user.model';
import {userGetFuncType,userCreateFuncType,userPutFuncType,userDelFuncType} from './user.types'
// import taskService from '../tasks/task.service';
// import User from './user.model';

/**
 * Returns all users from the database
 *
 * @returns {Promise<User[]>} Array Users
 */
const getAll = async ():Promise<User[]> => usersRepo.getAll();

/**
 * Returns user for idnpm r
 *
 * @param {string} id User id
 * @returns {Promise<User>|undefined} Object User 
 */
const get:userGetFuncType= async id => usersRepo.get(id);

/**
 * Add new User to DB
 * Returns new User
 *
 * @param {User} user new User 
 * @returns {Promise<User>} Object User 
 */
const create:userCreateFuncType = async user => usersRepo.create(user)

/**
 * Changes user properties by id
 * Returns the modified user
 *
 * @param {string} id User id 
 * @param {User} user Object User with modified parameters
 * @returns {Promise<User>} Object User 
 */
const put:userPutFuncType = async (id, user) => usersRepo.put(id, user);

/**
 * Delete user by id
 * Delete all tasks user by id
 *
 * @param {string} id User id 
 */
const del:userDelFuncType = async id => {
//   taskService.setUserNullByUserId(id);
  usersRepo.del(id);
}

export = { getAll,get,create,put,del};
