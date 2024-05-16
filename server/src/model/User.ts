import mongoose from 'mongoose';
interface IUser {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}
const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  firstname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 10,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 10,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

export const User = mongoose.model('User', userSchema);
