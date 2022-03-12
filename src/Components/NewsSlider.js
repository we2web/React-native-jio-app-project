import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import NewsStyles from './NewsStyles'
import ImagePath from '../Constacts/ImagePath'


const NewsSlider = () => {
  return (
    <View style={NewsStyles.NewsMain}>
      <Image source={ImagePath.slider} 
      style={NewsStyles.MainImageStyle}
      />
    </View>
  )
}

export default NewsSlider
