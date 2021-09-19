import React, {useEffect, useState} from 'react';
import {decode, encode} from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import AddRecipeScreen from '../screens/recepies/addRecepies';
import LoginScreen from '../screens/authentication/login/login';
import RegisterScreen from '../screens/authentication/register/register';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === 'Add recipe') {
            iconName = focused ? 'md-book' : 'md-book-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add recipe" component={AddRecipeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Root = createNativeStackNavigator();

const Navigation = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <Root.Navigator>
        {user ? (
          <Root.Screen
            name="HomeTabs"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Root.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Root.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
