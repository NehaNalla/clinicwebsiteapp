import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Homenavigation from './Homenavigation'

const Tab=createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
        <Tab.Screen name='Home' component={Homenavigation}
        
        options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="home" size={size} color="black" />
          )
        }}/>
        <Tab.Screen name='Appointment' component={Appointment}
        options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="calendar" size={size} color="black" />
          )
        }}/>
        <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon:({color,size})=>(
            <FontAwesome name="user-circle" size={size} color="black" />
          )
        }}/>
    </Tab.Navigator>
  )
}
