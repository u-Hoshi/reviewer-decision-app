import { initializeApp } from "firebase/app"
import firebase from "firebase/compat/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD5m2lAmuPEb9s8-EffMddI0b5L44IVMyk",
  authDomain: "reviewer-decision-app.firebaseapp.com",
  projectId: "reviewer-decision-app",
  storageBucket: "reviewer-decision-app.appspot.com",
  messagingSenderId: "371084104166",
  appId: "1:371084104166:web:0ca07a3310d6f4600c4627",
}

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  console.log(user)
})

export default firebase
