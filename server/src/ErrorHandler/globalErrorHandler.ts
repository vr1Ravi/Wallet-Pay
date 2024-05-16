import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

import {
  castErrorHandler,
  duplicateErrorHandler,
  validationErrorHandler,
  zodValidationError,
} from './ErrorControllers';

export const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (err.name === 'CastError') err = castErrorHandler(err);
  if (err.code === 11000) err = duplicateErrorHandler(err);
  if (err.name === 'ValidationError') err = validationErrorHandler(err);
  if (err instanceof ZodError && 'issues' in err) err = zodValidationError(err);

  handleError(err, res);
};

function handleError(err: any, res: Response) {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'something went very wrong!',
    });
  }
}
