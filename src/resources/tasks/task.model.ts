import { v4 as uuid } from 'uuid';

/** 
 * Class Task
 *
 * @class  Task 
 * @property {string} id - id
 * @property {string} title - title
 * @property {number} order - order
 * @property {string} description - description
 * @property {string|null} userId - userId
 * @property {string|null} boardId - boardId
 * @property {string|null} columnId - columnId
 */
class Task {
  id: string;

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
    boardId = null,
    columnId = null
  }:TaskType = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: Task): TaskType {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

interface TaskType {
  id?: string;
  title?: string;
  order?: number;
  description?: string;
  userId?: string | null;
  boardId?: string | null;
  columnId?: string | null;
}

interface RequestsParams {
  id: string;
  boardId: string;
}

interface TaskGetAllFuncType {
  (boardId: string): Promise<Task[]>
}

interface TaskGetFuncType {
  (id: string): Promise<Task | undefined>
}

interface TaskCreateFuncType {
  (task: TaskType): Promise<Task>
}

interface TaskPutFuncType {
  (id: string, task: TaskType): Promise<Task | undefined>
}

interface TaskDelFuncType {
  (id: string): Promise<void>
}

interface TaskUserNullByUserId {
  (userId: string): Promise<void>
}

interface TaskdelByBoardId {
  (boardId: string): Promise<void>
}

export {
  Task,
  RequestsParams,
  TaskGetFuncType,
  TaskCreateFuncType,
  TaskPutFuncType,
  TaskDelFuncType,
  TaskGetAllFuncType,
  TaskUserNullByUserId,
  TaskdelByBoardId
}
