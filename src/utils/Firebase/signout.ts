import { auth } from './config';
import { signOut } from 'firebase/auth';

export const signout = () => signOut(auth);
