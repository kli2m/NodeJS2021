import User from '../resources/users/user.model';
// const Board = require('../resources/boards/board.model');
// const Task = require('../resources/tasks/task.model');

const UsersDB = [new User({ name: 'ivan', login: 'ivan', password: 'ivan' }), new User({ name: 'vova', login: 'vova', password: 'vova' })]
// const BoardsDB = [new Board({ title: 'title1', columns: [{ title: 'Backlog', order: 1 }] }), new Board({ title: 'title2', columns: [{ title: 'Backlog', order: 1 }] })]
// const TasksDB = [new Task({ title: 'title1', order: 1, description: "description1", userId: "userId", boardId: "boardId", columnId: "columnId" }), new Task({ title: 'title2', order: 1, description: "description2", userId: "userId", boardId: "boardId", columnId: "columnId" })]

export { UsersDB };
