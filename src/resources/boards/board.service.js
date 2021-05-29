/** @module BoardService */

const boardsRepo = require('./board.memory.repository');
const taskService = require('../tasks/task.service');
const Board = require('./board.model');


/**
 * Returns all boards from the database
 *
 * @returns {Promise<Board[]>} Array Objects Board
 */
const getAll = async () =>  boardsRepo.getAll();

/**
 * Returns board for id
 *
 * @param {string} id Board id
 * @returns {Promise<Board>|undefined} Object Board 
 */
const get = async id =>  boardsRepo.get(id);

/**
 * Add new Board to DB
 * Returns new Board
 *
 * @param {Board} board new Board 
 * @returns {Promise<Board>} Object Board 
 */
const create = async board =>  boardsRepo.create(board);


/**
 * Changes Board properties by id
 * Returns the modified Board
 *
 * @param {string} id Board id 
 * @param {Board} board Object Board with modified parameters
 * @returns {Promise<Board>} Object Board 
 */
const put = async (id, board) =>  boardsRepo.put(id, board);

/**
 * Delete Board by id
 * Delete all tasks Board by id
 *
 * @param {string} id Board id 
 */
const del = async id => {
  await taskService.delByBoardId(id);
  await boardsRepo.del(id);
};

module.exports = { getAll, get, create, put, del };
