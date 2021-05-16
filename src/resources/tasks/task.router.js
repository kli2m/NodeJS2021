const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const { boardId } = req.params;
    const tasks = await taskService.getAll(boardId);
    res.json(tasks.map(Task.toResponse));
  } catch (error) {
    res.status(404).send('Could not find tasks');
  }
});

router.route('/:taskId').get(async (req, res) => {
  try {
    const task = await taskService.get(req.params.taskId);
    res.json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(`Task id=${req.params.taskId} not found`);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const task = await taskService.create(
      new Task({
        title: req.body.title,
        order: req.body.order,
        description: req.body.description,
        userId: req.body.userId,
        boardId: req.params.boardId,
        columnId: null
      })
    );
    res.status(201).json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send('Could not create a task');
  }
});

router.route('/:taskId').put(async (req, res) => {
  try {
    const task = await taskService.put(req.params.taskId, req.body);
    res.json(Task.toResponse(task));
  } catch (error) {
    res.status(404).send(`Task id=${req.params.taskId} not found`);
  }
});

router.route('/:taskId').delete(async (req, res) => {
  try {
     taskService.del(req.params.taskId);
    res.status(204).send(`The Task id=${req.params.taskId} has been deleted`);
  } catch (error) {
    res.status(404).send(`Task id=${req.params.taskId} not found`);
  }
});

module.exports = router;
