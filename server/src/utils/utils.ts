import jwt from 'jsonwebtoken';
import path from 'path';
import { connect } from 'mongoose';

import { secret, mongo_url } from '..';

export const createToken = (user: any) => {
  if (secret) {
    return jwt.sign({ userId: user._id }, secret, {
      expiresIn: '3h',
    });
  }
};

export async function connectDataBase() {
  if (mongo_url) await connect(mongo_url);
}
