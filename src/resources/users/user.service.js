const usersRepo = require('./user.memory.repository');

const getAll = async () =>  usersRepo.getAll();

const get = async id =>  usersRepo.get(id);

const create = async user =>  usersRepo.create(user)

const put = async (id, user) =>  usersRepo.put(id, user);

const del = async id =>   usersRepo.del(id);

module.exports = { getAll, get, create, put, del };
