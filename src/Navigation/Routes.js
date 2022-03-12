import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeStack from './HomeStack'
import { NavigationContainer } from '@react-navigation/native'


export default function Routes() {
  return (
    <NavigationContainer>
      {HomeStack()}
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({})