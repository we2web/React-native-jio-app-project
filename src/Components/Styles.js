import { StyleSheet, Text, View } from 'react-native'

export default Styles = StyleSheet.create({
    TopHeaderCompMain: {
        flex: 0.25,
        backgroundColor: '#214697',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    TopHeaderCompDir: {
        flexDirection: 'column',
        height: '35%',
        marginVertical:9,
    },
    TopHeaderCompTopbar: {
        flexDirection: 'row',
        width: '94%',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
        alignItems: 'center',
    },
    TopheaderTopbarImg:{
        width:'10%',
        height:45,
    },
    
    TobbarInput:{
    flexDirection:'row',
    borderColor:'#21438B',
    alignItems:'center',
    flex:0.9,
    justifyContent:'space-between',
    paddingHorizontal:'10%',
    height:45,
    borderRadius:20,
    backgroundColor:'#a9bbdd',
},
TopbarIconView:{
    backgroundColor:'#a9bbdd',
    padding:'2%',
    width:'14%',
    borderRadius:20, 
},
TopbarIconViewImg:{
    width:'100%',
    height:35,
}

})



