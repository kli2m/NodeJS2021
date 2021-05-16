const  {BoardsDB}  = require('../../common/myDB');
const  Board = require('./board.model') 

const getAll = async () => BoardsDB;

const get = async id => BoardsDB.find(board => board.id === id);

const create = async board => {
  const newBoard = new Board(board)
  BoardsDB.push(newBoard);
 return newBoard
};

const put = async (id, board) =>{
const index = BoardsDB.findIndex(currentBoard => currentBoard.id === id);
BoardsDB.splice(index, 1, { id, 'title': board.title, 'columns': board.columns })
return BoardsDB[index]
}

const del = async id => {
  const index = BoardsDB.findIndex(currentBoard => currentBoard.id === id);
  BoardsDB.splice(index, 1)
};

module.exports = { getAll, get, create, put, del };
