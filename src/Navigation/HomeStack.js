import { StyleSheet,} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from './HomeTab';
import NavigationString from '../Constacts/NavigationString';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    >

    <Stack.Screen
    name={NavigationString.HOMETAB} 
    component={HomeTab}
   
    />

    </Stack.Navigator>
  )
}



const styles = StyleSheet.create({})