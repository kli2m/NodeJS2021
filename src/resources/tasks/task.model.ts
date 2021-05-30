import { v4 as uuid } from 'uuid';
import { taskType } from './task.types';

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
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;

  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = null,
    boardId = '',
    columnId = null
  }:taskType = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task:Task):taskType {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

export default Task;
