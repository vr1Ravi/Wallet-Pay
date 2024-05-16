import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email(),
  firstname: z.string(),
  lastname: z.string(),
  password: z.string(),
});
export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const updateUserSchema = z.object({
  password: z.string().default(''),
  firstname: z.string().default(''),
  lastname: z.string().default(''),
});
export const transactionSchema = z.object({
  to: z.string(),
  amount: z.number(),
});
