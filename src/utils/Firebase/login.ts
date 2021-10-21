import { auth } from "./config"
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth"

export type FireLoginType = {
  email: string
  password: string
}

export const login = ({ email, password }: FireLoginType): Promise<UserCredential> =>
  signInWithEmailAndPassword(auth, email, password)
