/** @module TaskMemoryRepository */

const Task = require('./task.model');
const { TasksDB } = require('../../common/myDB')

/**
 * Returns all tasks from the database
 *
 * @returns {Task[]} Array Tasks
 */
const getAll = async () => TasksDB;

/**
 * Returns task for id
 *
 * @param {string} id Task id
 * @returns {Task|undefined} Object Task 
 */
const get = async id => TasksDB.find(task => task.id === id);


/**
 * Add new Task to DB
 * Returns new Task
 *
 * @param {Task} task new Task 
 * @returns {Task} Object Task 
 */
const create = async task => {
  const newTask = new Task(task)
  TasksDB.push(newTask);
  return newTask
};

/**
 * Changes Task properties by id
 * Returns the modified Task
 *
 * @param {string} id Task id 
 * @param {Task} task Object Task with modified parameters
 * @returns {Task} Object Task 
 */
const put = async (id, task) => {
  const index = TasksDB.findIndex(currentTask => currentTask.id === id);
  TasksDB.splice(index, 1, {
    id,
    'title': task.title,
    'order': task.order,
    'description': task.description,
    'userId': task.userId,
    'boardId': task.boardId,
    'columnId': task.columnId,
  })
  return TasksDB[index]
};

/**
 * Delete Task by id
 *
 * @param {string} id Task id 
 */
const del = async id => {
  const index = TasksDB.findIndex(currentTask => currentTask.id === id);
  TasksDB.splice(index, 1)
};

/**
 * Zeroes the UserId parameter for the user by the identifier in the task
 *
 * @param {string} userId User id 
 */
const setNullByUserId = async userId =>{ TasksDB.forEach(task => {
  const currTask = task;
  if (currTask.userId === userId)
    if (task.userId === userId) currTask.userId = null;

})}

/**
 * deletes the task containing the BoardId parameter equal to the incoming id
 *
 * @param {string} boardId Board id 
 */
const delByBoardId = async boardId => {
  const index = TasksDB.findIndex(currentTask => currentTask.boardId === boardId);
  if (index !== -1) {
    TasksDB.splice(index, 1);
    delByBoardId(boardId);
  }
}

module.exports = {
  getAll,
  get,
  create,
  put,
  del,
  setNullByUserId,
  delByBoardId
};
