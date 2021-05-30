const uuid = require('uuid');

/**
 * Class Board
 *
 * @class  Board 
 * @property {string} id - id
 * @property {string} title - title
 * @property {Array} columns - columns
 */
class Board {
  constructor({
    id = uuid.v4(),
    title = 'title',
    columns = [ ],    
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;    
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
