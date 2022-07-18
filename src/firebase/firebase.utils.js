import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const config = {
  apiKey: "AIzaSyDq_x8dzgpMF6PWCTIW8zKXq0bPHLKm3Vs",
  authDomain: "kia-db.firebaseapp.com",
  projectId: "kia-db",
  storageBucket: "kia-db.appspot.com",
  messagingSenderId: "292372176638",
  appId: "1:292372176638:web:f1264768753c09cc5c0faf",
  measurementId: "G-B3N1NBEZM9",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
