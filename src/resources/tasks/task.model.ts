const uuid = require('uuid');

/** 
 * Class Task
 *
 * @class  Task 
 * @property {string} id - id
 * @property {string} title - title
 * @property {number} order - order
 * @property {string} description - description
 * @property {string} userId - userId
 * @property {string} boardId - boardId
 * @property {string} columnId - columnId
 */
class Task {
  constructor({
    id = uuid.v4(),
        title= 'title',
        order= 0,
        description= 'description',
        userId= null,
        boardId= '',
        columnId= null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order,description, userId,boardId,columnId} = task;
    return { id, title, order,description, userId,boardId,columnId };
  }
}

module.exports = Task;
