import express from 'express';
import {
  getUsers,
  userSignin,
  userSignup,
  userUpdate,
} from '../controllers/user';
import { authMiddleware } from '../middleware';

export const userRouter = express.Router();

userRouter.route('/signup').post(userSignup);
userRouter.route('/signin').post(userSignin);
userRouter.route('/update').put(authMiddleware, userUpdate);
userRouter.route('/bulk').get(authMiddleware, getUsers);
