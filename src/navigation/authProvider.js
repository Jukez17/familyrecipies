import React, { createContext, useState } from "react"
//import { firebase } from "../firebase/config"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"
import {
  loginSuccToast,
  userErrorToast,
  registerSuccToast,
  passErrorToast,
  signOutToast,
} from "../components/toasts"

export const AuthContext = createContext({})

export const AuthProvider = ({ children, navigation }) => {
  const [user, setUser] = useState(null)
  const auth = getAuth()
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            loginSuccToast()
          })
          .then(() => navigation.navigate('Main'))
          .catch((error) => {
            const errorCode = error.code
            passErrorToast()
          })
          // try {
          //   await firebase
          //     .auth()
          //     .signInWithEmailAndPassword(email, password)
          //     .then(() => {
          //       loginSuccToast()
          //     }).then(() => navigation.navigate('Main'))
          // } catch (e) {
          //   console.log(e)
          //   passErrorToast()
          // }
        },
        register: async (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user
            registerSuccToast()
            try {
              const docRef = addDoc(collection(db, 'Users'), {
                email: email
              })
            } catch (e) {
              userErrorToast()
            }

          })
          .then(() => navigation.navigate('Main'))
          .catch((error) => {
            const errorCode = error.code
          })
          // try {
          //   await firebase
          //     .auth()
          //     .createUserWithEmailAndPassword(email, password)
          //     .then(() => {
          //       registerSuccToast()
          //       const uid = firebase.auth().currentUser.uid
          //       firebase.database().ref(`Users/${uid}`).set({
          //         email: email,
          //       })
          //     })
          //     .then(() => navigation.navigate("Main"))
          // } catch (e) {
          //   console.log(e)
          //   userErrorToast()
          // }
        },
        logout: async () => {
          try {
            await firebase
              .auth()
              .signOut()
              .then(() => {
                signOutToast()
              })
          } catch (e) {
            console.log(e)
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  )
}
