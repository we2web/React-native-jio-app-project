import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import ImagePath from '../Constacts/ImagePath'
import React from 'react'
import Styles from './Styles'


const TopHeaderComp = () => {
  return (
    <View style={Styles.TopHeaderCompMain}>

      <View style={Styles.TopHeaderCompDir}>

        <View style={Styles.TopHeaderCompTopbar}>

          <Image source={ImagePath.menu} style={Styles.TopheaderTopbarImg} />

          <View style={Styles.TobbarInput}>

            <TextInput placeholder='MyJio Search'
              placeholderTextColor='#fff'
            />

            <Image source={ImagePath.mic} style={{ width: '15%', height: 30 }} />
          </View>

          <View style={Styles.TopbarIconView}>
            <Image source={ImagePath.qr}
              style={Styles.TopbarIconViewImg}
            />
          </View>

          <View style={Styles.TopbarIconView}>
            <Image source={ImagePath.noti}
              style={Styles.TopbarIconViewImg}
            />
          </View>

        </View>

      </View>


      {/* Header Navigation  */}
      <View style={{ flex: 1, width: '95%', marginLeft: '5%', marginBottom: 5, }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

          <View style={{ width: '90%', height: '100%', flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ backgroundColor: '#fff', width: '75%', padding: 6, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={ImagePath.phone}
                style={{ width: '50%', height: 40, }}
              />
            </View>
            <Text style={{ color: '#fff', fontWeight: '800', marginVertical: 5, fontSize: 14, }}> TeleCom</Text>
          </View>

          <View style={{ width: '90%', height: '100%', flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ backgroundColor: '#fff', width: '75%', padding: 6, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={ImagePath.phone}
                style={{ width: '50%', height: 40, }}
              />
            </View>
            <Text style={{ color: '#fff', fontWeight: '800', marginVertical: 5, fontSize: 14, }}> TeleCom</Text>
          </View>

          <View style={{ width: '90%', height: '100%', flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ backgroundColor: '#fff', width: '75%', padding: 6, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={ImagePath.phone}
                style={{ width: '50%', height: 40, }}
              />
            </View>
            <Text style={{ color: '#fff', fontWeight: '800', marginVertical: 5, fontSize: 14, }}> TeleCom</Text>
          </View>

          <View style={{ width: '90%', height: '100%', flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ backgroundColor: '#fff', width: '75%', padding: 6, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={ImagePath.phone}
                style={{ width: '50%', height: 40, }}
              />
            </View>
            <Text style={{ color: '#fff', fontWeight: '800', marginVertical: 5, fontSize: 14, }}> TeleCom</Text>
          </View>

          <View style={{ width: '90%', height: '100%', flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ backgroundColor: '#fff', width: '75%', padding: 6, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={ImagePath.phone}
                style={{ width: '50%', height: 40, }}
              />
            </View>
            <Text style={{ color: '#fff', fontWeight: '800', marginVertical: 5, fontSize: 14, }}> TeleCom</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TopHeaderComp

