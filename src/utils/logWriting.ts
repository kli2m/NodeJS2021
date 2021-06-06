import { Response, Request, NextFunction } from 'express';
import { finished } from 'stream';
import logger from './winston';
import config from '../common/config';


const logWriting = (req: Request, res: Response, next: NextFunction) => {
  const { method, protocol, hostname, originalUrl, query, params } = req;
  const date = Date().substr(0, 24);

  finished(res, () => {
    const { statusCode } = res;
    const strModelView = `${date} ${method} ${protocol}://${hostname}:${config.PORT}${originalUrl} ${JSON.stringify(
      query
    )} ${JSON.stringify(params)} ${JSON.stringify(req.body)} ${statusCode}`;

    if (statusCode > 399) {
      logger.error(strModelView);
      return;
    }
    logger.info(strModelView);
    
  });
  next();
};

export default logWriting;
