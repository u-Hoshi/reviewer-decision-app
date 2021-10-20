import { auth } from './config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export type FireLoginType = {
  email: string;
  password: string;
};

export const login = ({ email, password }: FireLoginType) =>
  signInWithEmailAndPassword(auth, email, password);
