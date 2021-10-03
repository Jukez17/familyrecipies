import React, { createContext, useState } from "react"
import { firebase } from "../firebase/config"
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

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                loginSuccToast()
              }).then(() => navigation.navigate('Main'))
          } catch (e) {
            console.log(e)
            passErrorToast()
          }
        },
        register: async (email, password) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                registerSuccToast()
                const uid = firebase.auth().currentUser.uid
                firebase.database().ref(`Users/${uid}`).set({
                  email: email,
                })
              })
              .then(() => navigation.navigate("Main"))
          } catch (e) {
            console.log(e)
            userErrorToast()
          }
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
