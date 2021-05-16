const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  // const users = await usersService.getAll();
  // // map user fields to exclude secret fields like "password"
  // res.json(users.map(User.toResponse));
  try {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  } catch (error) {
    res.status(404).send('Could not find users');
  }
});

router.route('/:id').get(async (req, res) => {
  try {
  
    const user = await usersService.get(req.params.id);

    res.json(User.toResponse(user));
 

  } catch (error) {
    res.status(403).send('User is not found');
  }
});

router.route('/').post(async (req, res) => {
  try {

    const user = await usersService.create({
      login: req.body.login,
      name: req.body.name,
      password: req.body.password
    });  

    res.status(201).json(User.toResponse(user))

  } catch (error) {
    res.status(404).send('Could not create a user');
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const user = await usersService.put(req.params.id, req.body);
    res.json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(`User id=${req.params.id} not found`);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    usersService.del(req.params.id);
    res.status(204).send('The user has been deleted');
  } catch (error) {
    res.status(404).send(`User id=${req.params.id} not found`);
  }
});


module.exports = router;
