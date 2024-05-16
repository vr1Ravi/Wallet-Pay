import AppError from './AppError';

// Cast Error Handler
export const castErrorHandler = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};
// Duplicate Error Handler
export const duplicateErrorHandler = (err: any) => {
  const value = err.message.match(/(["'])(\\?.)*?\1/)[0];
  const message = `field value:${value} aleady exist. please use another`;
  return new AppError(message, 400);
};

// Validation Error Handler
export const validationErrorHandler = (err: any) => {
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};
// Zod Validation Error Handler
export const zodValidationError = (err: any) => {
  const errors = err.issues.map((el: any) => el.path[0]);
  const message = `These fields are required. ${errors.join(', ')}`;
  return new AppError(message, 400);
};
