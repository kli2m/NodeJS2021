import { v4 as uuid } from 'uuid';
/**
 * Class Board
 *
 * @class  Board 
 * @property {string} id - id
 * @property {string} title - title
 * @property {Array} columns - columns
 */
class Board {
  id: string;

  title: string;

  columns: ColumnType[];

  constructor({
    id = uuid(),
    title = 'title',
    columns = [],
  }: BoardType = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board): BoardType {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

interface ColumnType {
  id?: string,
  title: string,
  order: number
}


interface BoardType {
  id?: string,
  title?: string,
  columns?: ColumnType[],
}

// interface BoardCreateType {
//   title?: string,
//   columns?: ColumnType[],
// }

interface RequestsParams {
  id: string
}

interface BoardGetFuncType {
  (id: string): Promise<Board | undefined>
}

interface BoardCreateFuncType {
  (board: BoardType): Promise<Board | undefined>
}

interface BoardPutFuncType {
  (id: string, board: BoardType): Promise<Board | undefined>
}

interface BoardDelFuncType {
  (id: string): Promise<void>
}

export {
  Board,
  ColumnType,
  BoardType,
  RequestsParams,
  BoardGetFuncType,
  BoardCreateFuncType,
  BoardPutFuncType,
  BoardDelFuncType
}


