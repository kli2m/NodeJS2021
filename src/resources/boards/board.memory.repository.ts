/** @module BoardMemoryRepository */

const  {BoardsDB}  = require('../../common/myDB');
const  Board = require('./board.model') 

/**
 * Returns all boards from the database
 *
 * @returns {Board[]} Array Objects Board
 */
const getAll = async () => BoardsDB;

/**
 * Returns board for id
 *
 * @param {string} id Board id
 * @returns {Board|undefined} Object Board 
 */
const get = async id => BoardsDB.find(board => board.id === id);

/**
 * Add new Board to DB
 * Returns new Board
 *
 * @param {Board} board new Board 
 * @returns {Board} Object Board 
 */
const create = async board => {
  const newBoard = new Board(board)
  BoardsDB.push(newBoard);
 return newBoard
};

/**
 * Changes Board properties by id
 * Returns the modified Board
 *
 * @param {string} id Board id 
 * @param {Board} board Object Board with modified parameters
 * @returns {Board} Object Board 
 */
const put = async (id, board) =>{
const index = BoardsDB.findIndex(currentBoard => currentBoard.id === id);
BoardsDB.splice(index, 1, { id, 'title': board.title, 'columns': board.columns })
return BoardsDB[index]
}

/**
 * Delete Board by id
 *
 * @param {string} id Board id 
 */
const del = async id => {
  const index = BoardsDB.findIndex(currentBoard => currentBoard.id === id);
  BoardsDB.splice(index, 1)
};

module.exports = { getAll, get, create, put, del };
