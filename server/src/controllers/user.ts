import { NextFunction, Request, Response } from 'express';
import { IGetUserAuthInfoRequest } from '../types/express';
import { signupSchema, signinSchema, updateUserSchema } from '../zod';
import { User } from '../model/User';
import { createToken } from '../utils/utils';
import { Account } from '../model/Account';

export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    signupSchema.parse(data);

    // create user
    const user = await User.create({
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
    });

    // Create account
    await Account.create({
      _id: user._id,
      balance: Math.random() * 1000 + 1,
    });
    const token = createToken(user);
    res.status(201).json({
      message: 'Account created successfully',
      token,
    });
  } catch (error) {
    next(error);
  }
};
export const userSignin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    signinSchema.parse(data);
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return res.status(404).json({
        message: 'Account not found. Signup first',
      });
    }
    if (user.password !== data.password) {
      return res.status(404).json({
        message: 'Incorrect password',
      });
    }

    const token = createToken(user);
    res.status(200).json({
      message: 'Account loggedin successfully',
      token,
    });
  } catch (error) {
    next(error);
  }
};
export const userUpdate = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    updateUserSchema.parse(data);
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      return res.status(404).json({
        message: 'Account not found. Signup first',
      });
    }
    if (data.password) user.password = data.password;
    if (data.firstname) user.firstname = data.firstname;
    if (data.lastname) user.lastname = data.lastname;
    await user.save();

    res.status(200).json({
      message: 'Account updated successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const getUsers = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const filter = req.query.filter || (' ' as string);

    const users = await User.find({
      $or: [
        { firstname: { $regex: new RegExp(filter as string, 'i') } },
        { lastname: { $regex: new RegExp(filter as string, 'i') } },
      ],
    }).select('-password');

    res.status(200).json({
      users,
    });
  } catch (error) {
    next(error);
  }
};
