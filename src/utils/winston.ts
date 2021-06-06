import path from 'path';
import  { createLogger, format, transports } from 'winston';

const logger = createLogger({
  exitOnError: false,
  level: 'silly',
  format: format.combine(format.colorize(), format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(__dirname, '../log/error.log'),
      level: 'error',
      format: format.combine(format.uncolorize())
    }),
    new transports.File({
      filename: path.join(__dirname, '../log/info.log'),
      level: 'info',
      format: format.combine(format.uncolorize())
    })
  ],
  // exceptionHandlers: [
  //   new transports.File({
  //     level: 'error',
  //     filename: path.join(__dirname, '../log/exceptions.log')
  //   })
  // ],
 
  // rejectionHandlers: [
  //   new transports.File({
  //     filename: path.join(__dirname, '../log/rejections.log')
  //   })
  // ]
});


export default logger;
