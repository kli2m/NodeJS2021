/** @module TaskService */

const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

/**
 * Returns all tasks from the database
 *
 * @returns {Promise<Task[]>} Array Tasks
 */
const getAll = async () => tasksRepo.getAll();

/**
 * Returns task for id
 *
 * @param {string} id Task id
 * @returns {Promise<Task>|undefined} Object Task 
 */
const get = async id => tasksRepo.get(id);

/**
 * Add new Task to DB
 * Returns new Task
 *
 * @param {Task} task new Task 
 * @returns {Promise<Task>} Object Task 
 */
const create = async task => tasksRepo.create(task);

/**
 * Changes Task properties by id
 * Returns the modified Task
 *
 * @param {string} id Task id 
 * @param {Task} task Object Task with modified parameters
 * @returns {Promise<Task>} Object Task 
 */
const put = async (id, task) => tasksRepo.put(id, task);

/**
 * Delete Task by id
 *
 * @param {string} id Task id 
 */
const del = async id =>{ tasksRepo.del(id)};

/**
 * Zeroes the UserId parameter for the user by the identifier in the task
 *
 * @param {string} userId User id 
 */
const setUserNullByUserId = async userId =>{ tasksRepo.setNullByUserId(userId)};

/**
 * deletes the task containing the BoardId parameter equal to the incoming id
 *
 * @param {string} boardId Board id 
 */
const delByBoardId = async boardId =>{ tasksRepo.delByBoardId(boardId)};

module.exports = {
  getAll,
  get,
  create,
  put,
  del,
  setUserNullByUserId,
  delByBoardId
};
