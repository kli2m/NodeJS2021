/** @module UserService */

import usersRepo from './user.memory.repository';
import {User,UserGetFuncType,UserCreateFuncType,UserPutFuncType,UserDelFuncType} from './user.model'
import taskService from '../tasks/task.service';
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
const get:UserGetFuncType= async id => usersRepo.get(id);

/**
 * Add new User to DB
 * Returns new User
 *
 * @param {User} user new User 
 * @returns {Promise<User>} Object User 
 */
const create:UserCreateFuncType = async user => usersRepo.create(user)

/**
 * Changes user properties by id
 * Returns the modified user
 *
 * @param {string} id User id 
 * @param {User} user Object User with modified parameters
 * @returns {Promise<User>} Object User 
 */
const put:UserPutFuncType = async (id, user) => usersRepo.put(id, user);

/**
 * Delete user by id
 * Delete all tasks user by id
 *
 * @param {string} id User id 
 */
const del:UserDelFuncType = async id => {
  taskService.setUserNullByUserId(id);
  usersRepo.del(id);
}

export = { getAll,get,create,put,del};
