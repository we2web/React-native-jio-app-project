import { StyleSheet, Text, View } from 'react-native'

 export default styles = StyleSheet.create({
     Myaccount:
    {flex:0.30, backgroundColor:'#fff', alignItems:'center'},
    SliderBtn: {
        justifyContent:'flex-start',
        alignItems: 'center',
        width:'40%',
    },
    MyaccountMain:
    {flexDirection:'row', flex:0.35, width:'90%', 
    justifyContent:'flex-start',alignItems:'center',},
    MyaccountMaindes:
    {fontSize:20, color:'#000', fontWeight:'700'},
    MyaccountMaindone:
    {flexDirection:'row', justifyContent:'flex-start',alignItems:'center',width:'40%', borderRadius:30, paddingHorizontal:8, paddingVertical:5, backgroundColor:'#d00', marginHorizontal:10,},
    MyaccountMaindesc2:
    {fontSize:14, fontWeight:'600', color:'#000'},
    MyaccountBtnpart:
    {flexDirection:'column', flex:0.65,justifyContent:'center',alignItems:'center', width:'90%'},
    MyaccountBtnpartstyle:
    {flexDirection:'row', justifyContent:'space-between',  width:'100%'},
    btnstylebtn:
    {width:'40%', backgroundColor:'#fff',borderColor:'#214696', borderWidth:1, alignItems:'center',justifyContent:'center',borderRadius:8, },
    btnstylebtn2:
    {width:'47%', backgroundColor:'#fff',borderColor:'#214696', borderWidth:1, alignItems:'center',justifyContent:'center',borderRadius:8, },
    btnstyletext:
    {color:'#214696', fontSize:18, fontWeight:'600', paddingVertical:10,},

    SliderBtnstyle: {
        width:'90%',
        backgroundColor: '#ef9501',
        borderRadius: 15,
        alignItems:'center',
     },
    SliderBtntextstyle:{ 
        color: '#fff',
        fontSize: 21,
        fontWeight:'800',
        paddingVertical: 13,
        paddingHorizontal: 3,
     }

 })