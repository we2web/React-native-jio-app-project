import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
// thrid parth depension 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// suporting file's 

import ImagePath from '../Constacts/ImagePath';
import NavigationString from '../Constacts/NavigationString';

//  use Screen Name 
import {Home,Dashboard,Recharge,Coupons,Myvouchers,Jiocare}from '../Screens/'


const BototmTab = createBottomTabNavigator();


export default function HomeTab () {
  return (
    <BototmTab.Navigator
    screenOptions={{headerShown:false, 
    tabBarActiveTintColor:'red',
    tabBarInactiveTintColor:'gray',
    tabBarStyle:{
      backgroundColor:'#fff',
    }
    }}
    >
      <BototmTab.Screen 
      name={NavigationString.DASHBOARD}
      component={Dashboard}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <Image 
            style={{tintColor: focused ? 'red': 'gray'}}
            source={ImagePath.Home}
            />
          )}
        }}    
      />
 

  
    <BototmTab.Screen 
      name={NavigationString.REACHARGE}
      component={Recharge}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <Image 
            style={{tintColor: focused ? 'red': 'gray'}}
            source={ImagePath.Rupees}
            />
          )}
        }}  
    />

<BototmTab.Screen 
      name={NavigationString.JIOCARE}
      component={Jiocare}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <Image 
            style={{tintColor: focused ? 'red': 'gray'}}
            source={ImagePath.Jiocare}
            />
          )}
        }}  
        />

        <BototmTab.Screen 
      name={NavigationString.COUPONS}
      component={Coupons}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <Image 
            style={{tintColor: focused ? 'red': 'gray'}}
            source={ImagePath.Charge}
            />
          )}
        }}  
        />

<BototmTab.Screen 
      name={NavigationString.MYVOUCHERS}
      component={Myvouchers}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <Image 
            style={{tintColor: focused ? 'red': 'gray'}}
            source={ImagePath.User}
            />
          )}
        }}  
    />


    </BototmTab.Navigator>

  )
}



