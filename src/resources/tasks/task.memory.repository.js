const Task = require('./task.model');
const { TasksDB } = require('../../common/myDB')

const getAll = async () => TasksDB;

const get = async id => TasksDB.find(task => task.id === id);

const create = async task => {
  const newTask = new Task(task)
  TasksDB.push(newTask);
  return newTask
};

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

const del = async id => {
  const index = TasksDB.findIndex(currentTask => currentTask.id === id);
  TasksDB.splice(index, 1)
};

const setNullByUserId = async userId => TasksDB.forEach(task=>{
  const currTask=task;
  if(currTask.userId===userId)
 if( task.userId===userId) currTask.userId=null;

})

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
