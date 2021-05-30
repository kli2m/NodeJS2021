import routerExpress, { Request, Response } from 'express'
import User from './user.model';
import usersService from './user.service';
import { RequestsParams} from './user.types'

const router = routerExpress.Router({ mergeParams: true });

router.route('/').get(async (_: Request, res: Response): Promise<void> => {
  try {
    const users = await usersService.getAll();
    if (users) res.json(users.map(User.toResponse));
    else res.status(404).send('Users is not found');
  } catch (error) {
    res.status(404).send('Could not find users');
  }
});

router.route('/:id').get(async (req: Request<RequestsParams>, res: Response): Promise<void> => {
  try {
    const {id}=req.params
    const user = await usersService.get(id);
    if (user) res.json(User.toResponse(user));
    else res.status(404).send('User is not found');
  } catch (error) {
    res.status(403).send('invalid input');
  }
});

router.route('/').post(async (req:Request, res: Response): Promise<void> => {
  try {
    const user = await usersService.create({
      login: req.body.login,
      name: req.body.name,
      password: req.body.password
    });  

    if (user) res.status(201).json(User.toResponse(user));
    else res.status(404).send('User not created');
  } catch (error) {
    res.status(404).send('Could not create a user');
  }
});

router.route('/:id').put(async (req: Request<RequestsParams>, res: Response): Promise<void>  => {
  try {
    const {id}=req.params
    const user = await usersService.put(id, req.body);
    if (user) res.json(User.toResponse(user));
    else res.status(404).send('User not created');
  } catch (error) {
    res.status(404).send(`User id=${req.params.id} not found`);
  }
});

router.route('/:id').delete(async (req: Request<RequestsParams>, res: Response):Promise<void> => {
  try {
    const {id}=req.params
    usersService.del(id);
    res.status(204).send('The user has been deleted');
  } catch (error) {
    res.status(404).send(`User id=${req.params.id} not found`);
  }
});


export default router;
