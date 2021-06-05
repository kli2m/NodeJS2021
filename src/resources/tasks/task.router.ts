import routerExpress, { Request, Response } from 'express'
import taskService from './task.service';
import {Task, RequestsParams } from './task.model'

const router = routerExpress.Router({ mergeParams: true });

router.route('/').get(async (req: Request<RequestsParams>, res: Response): Promise<void> => { 
  try {
    const { boardId } = req.params;
    const tasks = await taskService.getAll(boardId);
    if (tasks)  res.json(tasks.map(Task.toResponse));
    else res.status(404).send('Tasks is not found');
  } catch (error) {
    res.status(404).send('Could not find tasks');
  }
});

router.route('/:id').get(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const task = await taskService.get(id);
    if (task) res.status(200).json(Task.toResponse(task));
    else res.status(404).send('task is not found');
  } catch (error) {
    res.status(404).send(`Task not found`);
  }
});

router.route('/').post(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  try {
    const { boardId } = req.params;
    const task = await taskService.create(
      new Task({
        title: req.body.title,
        order: req.body.order,
        description: req.body.description,
        userId: req.body.userId,
        boardId,
        columnId: null
      })
    );   
    if (task)  res.status(201).json(Task.toResponse(task));
    else res.status(404).send('task not created');
  } catch (error) {
    res.status(404).send('Could not create a task');
  }
});

router.route('/:id').put(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const task = await taskService.put(id, req.body);
    if (task)  res.status(200).json(Task.toResponse(task));
    else res.status(404).send('task not changed');
  } catch (error) {
    res.status(404).send(`Task not found`);
  }
});

router.route('/:id').delete(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    await taskService.del(id);
    res.status(204).send(`The Task has been deleted`);
  } catch (error) {
    res.status(404).send(`Task not found`);
  }
});

export default router;
