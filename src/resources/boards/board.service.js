const boardsRepo = require('./board.memory.repository');
const taskService = require('../tasks/task.service');

const getAll = async () =>  boardsRepo.getAll();
const get = async id =>  boardsRepo.get(id);
const create = async board =>  boardsRepo.create(board);
const put = async (id, board) =>  boardsRepo.put(id, board);
const del = async id => {
  await taskService.delByBoardId(id);
  await boardsRepo.del(id);
};

module.exports = { getAll, get, create, put, del };
