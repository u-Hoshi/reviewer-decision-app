import { auth } from './config';
import { sendPasswordResetEmail } from 'firebase/auth';

export const forgetPass = (email: string) =>
  sendPasswordResetEmail(auth, email);
