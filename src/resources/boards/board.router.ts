const router = require('express').Router();
const  Board  = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  try {
    const boards = await boardService.getAll();
    res.json(boards.map(Board.toResponse));
  } catch (error) {
    res.status(404).send('Could not find boards');
  }
});

router.route('/:boardId').get(async (req, res) => {
  try {
    const board = await boardService.get(req.params.boardId);
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send('Could not find a board');
  }
});

router.route('/').post(async (req, res) => {
  try {
    const board = await boardService.create(
      new Board({
        title: req.body.title,
        columns: req.body.columns
      })
    );
    
    res.status(201).json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send('Could not create a board');
  }
});

router.route('/:boardId').put(async (req, res) => {
  try {
    const board = await boardService.put(req.params.boardId, req.body);
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(`Board id=${req.params.boardId} not found`);
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  try {
    await boardService.del(boardId);
    res.status(204).send(`The Board id=${boardId} has been deleted`);
  } catch (error) {
    res.status(404).send(`Board id=${boardId} not found`);
  }
});

export default router;
