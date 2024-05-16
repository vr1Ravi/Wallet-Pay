import mongoose from 'mongoose';
interface IAccount {
  _id: mongoose.Schema.Types.ObjectId;
  balance: number;
}

const accountSchema = new mongoose.Schema<IAccount>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  balance: {
    type: Number,
    required: true,
  },
});
export const Account = mongoose.model('Account', accountSchema);
