import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Imagestyles from './Imagestyles'
import ImagePath from '../Constacts/ImagePath'

const ImageSlider = () => {
  return (
    <View style={Imagestyles.mainSlider}>
    <View style={Imagestyles.Slider}> 
            <View style={Imagestyles.Sliderclos}>
          <Image source={ImagePath.clos} />
          </View>

          <View style={Imagestyles.SliderImg}> 
         
        <View style={Imagestyles.SliderImgText}>
        <Text style={Imagestyles.SliderImgTextstyle}> 
                5 hrs 15 mins...
        </Text>
            <Text style={Imagestyles.SliderImgdes}> 
              Your Plan is about to expire 
            </Text>
            </View>

            <View style={Imagestyles.SliderBtn}> 
              <TouchableOpacity style={Imagestyles.SliderBtnstyle}>
                <Text style={Imagestyles.SliderBtntextstyle}>Recharge now</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
        </View>
  )
}
export default ImageSlider
