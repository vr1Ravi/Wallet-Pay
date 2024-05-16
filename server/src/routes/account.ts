import express from 'express';
import { getBalance, transferBalance } from '../controllers/account';
import { authMiddleware } from '../middleware';

export const accountRouter = express.Router();
accountRouter.route('/balance').get(authMiddleware, getBalance);
accountRouter.route('/transfer').post(authMiddleware, transferBalance);
