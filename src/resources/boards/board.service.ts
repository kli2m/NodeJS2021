/** @module BoardService */

import boardsRepo from './board.memory.repository';
import Board from './board.model';
import { boardGetFuncType, boardCreateFuncType, boardPutFuncType, boardDelFuncType } from './board.types'
import taskService from'../tasks/task.service';


/**
 * Returns all boards from the database
 *
 * @returns {Promise<Board[]>} Array Objects Board
 */
const getAll = async (): Promise<Board[]> => boardsRepo.getAll();

/**
 * Returns board for id
 *
 * @param {string} id Board id
 * @returns {Promise<Board>|undefined} Object Board 
 */
const get: boardGetFuncType = async id => boardsRepo.get(id);

/**
 * Add new Board to DB
 * Returns new Board
 *
 * @param {Board} board new Board 
 * @returns {Promise<Board>} Object Board 
 */
const create: boardCreateFuncType = async board => boardsRepo.create(board);


/**
 * Changes Board properties by id
 * Returns the modified Board
 *
 * @param {string} id Board id 
 * @param {Board} board Object Board with modified parameters
 * @returns {Promise<Board>} Object Board 
 */
const put: boardPutFuncType = async (id, board) => boardsRepo.put(id, board);

/**
 * Delete Board by id
 * Delete all tasks Board by id
 *
 * @param {string} id Board id 
 */
const del: boardDelFuncType = async id => {
  await taskService.delByBoardId(id);
  await boardsRepo.del(id);
};

export default { getAll, create, get, put, del };
