import React, { useEffect, useState, useContext } from "react"
import { decode, encode } from "base-64"
if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from "../firebase/config"
import { AuthContext } from "./authProvider"
// screens
import AuthStack from "./authStack"
import HomeStack from "./homeStack"
// components
import Loading from "../components/loading"
// colors
import colors from "../styles/colors"

const Navigation = (props) => {
  const { user, setUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const auth = getAuth(firebaseApp)
  const onAuthStateChanged = (auth, (user) => {
    if (user) {
      const uid = user.uid
      setUser(user)
    } else {

    }
    console.log('user: ', user)
    if (initializing) setInitializing(false)
    setLoading(false)
    // setUser(user)
    // if (initializing) setInitializing(false)
    // setLoading(false)
  })
  
  useEffect(() => {
    const subscriber = onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {user ? <HomeStack /> : <AuthStack />}
    </>
  )
}

export default Navigation
