import jwt, { JwtPayload } from 'jsonwebtoken';
import { secret } from '.';
import { Response, NextFunction } from 'express';
import { IGetUserAuthInfoRequest } from './types/express';
export const authMiddleware = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({
      message: 'login first',
    });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, secret as string) as JwtPayload;
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({
      message: 'Invalid token',
    });
  }
};
