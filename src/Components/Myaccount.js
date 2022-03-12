import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Myaccountstyle from './Myaccountstyle';
import ImagePath from '../Constacts/ImagePath';


const Myaccount = () => {
  return (
    <View style={Myaccountstyle.Myaccount}>
    <View style={Myaccountstyle.MyaccountMain}>
    <Image source={ImagePath.person} 
    style={{width:40,height:35}}
    /> 
    <Text style={Myaccountstyle.MyaccountMaindes}> My Account</Text>
    <View style={Myaccountstyle.MyaccountMaindone}>
        
    <TouchableOpacity style={{flexDirection:'row',}}>
        <Image source={ImagePath.done} 
        style={{width:25, height:11,}}
        />
        <Text style={{color:'#fff', fontSize:14, fontWeight:'700'}}> Jio Prime</Text>
    </TouchableOpacity>
    </View>
    </View>

    <View style={{flexDirection:'column', flex:0.75, width:'90%'}}>
        <View style={{flexDirection:'row',paddingVertical:7,}}>
        <View style={{flexDirection:'column', width:'60%', }}>  
        <Text style={{fontSize:16, fontWeight:'bold', color:'#000'}}> +91-95557-28124</Text>

        <Text style={Myaccountstyle.MyaccountMaindesc2}> Prepaid VoLTE</Text>
        <Text style={Myaccountstyle.MyaccountMaindesc2}> Last used on Huawei E3372 </Text>
        </View>

        <View style={Myaccountstyle.SliderBtn}> 
              <TouchableOpacity style={Myaccountstyle.SliderBtnstyle}>
                <Text style={Myaccountstyle.SliderBtntextstyle}>Recharge</Text>
            </TouchableOpacity>
        </View>

        </View>
    </View>

    <View style={Myaccountstyle.MyaccountBtnpart}>

    <View style={Myaccountstyle.MyaccountBtnpartstyle}> 

    <TouchableOpacity style={Myaccountstyle.btnstylebtn}>
    <Text style={Myaccountstyle.btnstyletext}>Switch account</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Myaccountstyle.btnstylebtn2}>
    <Text style={Myaccountstyle.btnstyletext}>Link new account</Text>
    </TouchableOpacity>
    </View> 
    </View>
    </View>
  )
}

export default Myaccount
