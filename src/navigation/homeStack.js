import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTabs from "./bottomStack"
// colors
import colors from "../styles/colors"

const Home = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Home.Navigator initialRouteName='Main'>
      <Home.Screen
        name="Main"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
    </Home.Navigator>
  )
}

export default HomeStack
