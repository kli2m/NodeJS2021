const tasksRepo = require('./task.memory.repository');

const getAll = async () => tasksRepo.getAll();
const get = async id => tasksRepo.get(id);
const create = async task => tasksRepo.create(task);
const put = async (id, task) => tasksRepo.put(id, task);
const del = async id => tasksRepo.del(id);
const setUserNullByUserId = async userId => tasksRepo.setNullByUserId(userId);
const delByBoardId = async boardId => tasksRepo.delByBoardId(boardId);

module.exports = {
  getAll,
  get,
  create,
  put,
  del,
  setUserNullByUserId,
  delByBoardId
};
