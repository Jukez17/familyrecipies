import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeScreen from "../screens/home"
import AddRecipeScreen from '../screens/recepies/addRecepies'
import ProfileScreen from '../screens/profile'
// colors
import colors from "../styles/colors"

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "md-home" : "md-home-outline"
          } else if (route.name === "Add recipe") {
            iconName = focused ? "md-book" : "md-book-outline"
          } else if (route.name === "Profile") {
            iconName = focused ? "md-person" : "md-person-outline"
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.black,
        headerTitleAlign: "center",
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add recipe" component={AddRecipeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs