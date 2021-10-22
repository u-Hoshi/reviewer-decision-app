import { auth } from "./config"
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth"
import { VFC } from "react"

export type FireSignupType = {
  email: string
  password: string
}

export const signup = ({ email, password }: FireSignupType): Promise<UserCredential> =>
  createUserWithEmailAndPassword(auth, email, password)
