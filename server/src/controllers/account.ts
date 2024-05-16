import { Account } from '../model/Account';
import { NextFunction, Response } from 'express';
import { IGetUserAuthInfoRequest } from '../types/express';
import { transactionSchema } from '../zod';
import mongoose from 'mongoose';
export const getBalance = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const accountId = req.userId;
  const account = await Account.findById(accountId);
  res.status(200).json({
    balance: account?.balance,
  });
};
export const transferBalance = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const data = req.body;
    transactionSchema.parse(data);

    const from_user_account = await Account.findById(req.userId).session(
      session
    );
    const to_user_account = await Account.findById(data.to).session(session);

    if (!to_user_account) {
      return res.status(400).json({
        message: 'Invalid Account',
      });
    }
    const user_balance = from_user_account?.balance as number;

    if (user_balance < data.amount) {
      return res.status(400).json({
        message: 'Insufficient balance',
      });
    }

    // perform transaction
    await Account.updateOne(
      { _id: req.userId },
      { $inc: { balance: -data.amount } }
    ).session(session);
    await Account.updateOne(
      { _id: data.to },
      { $inc: { balance: data.amount } }
    ).session(session);

    await session.commitTransaction();

    res.status(200).json({
      message: 'Transaction successfull',
    });
  } catch (error) {
    next(error);
  }
};
