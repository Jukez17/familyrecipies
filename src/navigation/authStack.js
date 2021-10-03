import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// screens
import LoginScreen from "../screens/authentication/login/login"
import RegisterScreen from "../screens/authentication/register/register"
// colors
import colors from "../styles/colors"

const Auth = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen name="Register" component={RegisterScreen} />
    </Auth.Navigator>
  )
}

export default AuthStack
