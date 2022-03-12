import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Routes from './src/Navigation/Routes'
import Dashboard from './src/Screens/Dashboard/Dashboard'

const App = () => {
  return (
    <View style={{flex:1}}>
    <Routes/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
