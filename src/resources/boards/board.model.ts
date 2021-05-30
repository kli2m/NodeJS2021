import { v4 as uuid } from 'uuid';
import { ColumnType, boardType } from './board.types'
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
  }: boardType = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board): boardType {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export default Board;
