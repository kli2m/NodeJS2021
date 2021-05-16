const usersRepo = require('./user.memory.repository');
const taskService = require('../tasks/task.service');


const getAll = async () => usersRepo.getAll();

const get = async id => usersRepo.get(id);

const create = async user => usersRepo.create(user)

const put = async (id, user) => usersRepo.put(id, user);

const del = async id => {
      await   taskService.setNullByUserId(id);
     await    usersRepo.del(id);
}

module.exports = { getAll, get, create, put, del };
