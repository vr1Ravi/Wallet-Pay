import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { router } from './routes/route';
import { globalErrorHandler } from './ErrorHandler/globalErrorHandler';
import AppError from './ErrorHandler/AppError';
import { connectDataBase } from './utils/utils';
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
dotenv.config({ path: path.join(__dirname + '/.env') });
export const secret = process.env.JWT_SECRET;
export const mongo_url = process.env.MONGO_URL;

// connecte mongodb
connectDataBase()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

app.use('/api/v1', router);

app.all('*', (req, res, next) => {
  next(new AppError(`This path ${req.originalUrl} isn't on this server!`, 404));
});

app.use(globalErrorHandler);
app.listen(process.env.PORT, () => {
  console.log(`server in running`);
});
