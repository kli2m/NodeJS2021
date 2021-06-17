import routerExpress, { Request, Response } from 'express';
import boardService from './board.service';
import { Board, RequestsParams } from './board.model'

const router = routerExpress.Router({ mergeParams: true });

router.route('/').get(async (_: Request, res: Response): Promise<void> => {
  try {
    const boards = await boardService.getAll();
    if (boards) res.status(200).json(boards.map(Board.toResponse));
    else res.status(404).send('Boards is not found');
  } catch (error) {
    res.status(404).send('Could not find boards');
  }
});

router.route('/:id').get(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const board = await boardService.get(id);
    if (board) res.status(200).json(Board.toResponse(board));
    else res.status(404).send('Board is not found');
  } catch (error) {
    res.status(404).send('Could not find a board');
  }
});

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
  try {
    const board = await boardService.create(
      {
        title: req.body.title,
        columns: req.body.columns
      }
    );
    if (board) res.status(201).json(Board.toResponse(board));
    else res.status(404).send('User not created');

  } catch (error) {
    res.status(404).send('Could not create a board');
  }
});

router.route('/:id').put(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const board = await boardService.put(id, req.body);
    if (board) res.status(200).json(Board.toResponse(board));
    else res.status(404).send('Board not changed');
  } catch (error) {
    res.status(404).send(`Board not found`);
  }
});

router.route('/:id').delete(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await boardService.del(id);
    res.status(204).send(`The Board id=${id} has been deleted`);
  } catch (error) {
    res.status(404).send(`Board id=${id} not found`);
  }
});

export default router;
