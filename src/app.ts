import express, { Response, Request, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

import logger from './utils/winston';
import logWriting from './utils/logWriting';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(logWriting);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

app.use(() => {
  throw new Error("500 Server Error")
});

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(err.message);
  next();
});

process.on('uncaughtException', (error: Error, origin: string) => {
  const date = Date().substr(0, 24);
  logger.error(`${date} ${error} ${origin} ${error.stack} ${error.message}`);
  console.error(`captured error: ${error.message}`);
});

process.on('unhandledRejection', (reason: Error, promise) => {
  const date = Date().substr(0, 24);
  logger.error(
    `${date} Unhandled rejection detected: ${JSON.stringify(promise)} ${reason.stack} ${reason.message}`
  );
  console.error(`Unhandled rejection detected: ${reason.message}`);
});

export default app;
