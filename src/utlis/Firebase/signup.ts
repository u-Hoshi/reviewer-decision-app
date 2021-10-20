import { auth } from './config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export type FireSignupType = {
  email: string;
  password: string;
};

export const signup = ({ email, password }: FireSignupType) =>
  createUserWithEmailAndPassword(auth, email, password);
