import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import TopHeaderComp from '../../Components/TopHeaderComp'
import ImageSlider from '../../Components/ImageSlider'
import NewsSlider from '../../Components/NewsSlider'
import Myaccount from '../../Components/Myaccount'



const Dashboard = () => {
  return (
    <View style={{flex:1}}>
        {/* top header  */}
        <TopHeaderComp/>
        <ImageSlider/>
        <NewsSlider/>
        <View style={{marginBottom:10}}/>
       <Myaccount/>
       <View style={{marginBottom:10}}/>
    </View>
  )
}

export default Dashboard
