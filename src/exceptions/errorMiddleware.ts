import * as express from 'express';
import { HttpException } from './HttpException';

export function errorMiddleware(
  error: HttpException,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response.status(status).send({
    status,
    message,
  });
}
