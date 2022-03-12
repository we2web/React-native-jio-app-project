import { StyleSheet, Text, View } from 'react-native'

export default Imagestyles = StyleSheet.create({
    mainSlider: {
        flex: 0.23,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    Slider: {
        width: '92%',
        backgroundColor: '#f39803',
        height: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    Sliderclos: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    SliderImg: {
        flex: 1,
        flexDirection: 'row',
    },
    SliderImgText:
    {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 0.55,
    },
    SliderImgTextstyle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    SliderImgdes: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700'
    },
    SliderBtn: {
        flex: 0.45,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SliderBtnstyle: {
        backgroundColor: '#fff',
        borderRadius: 15,
     },
    SliderBtntextstyle:{ 
        color: '#21438b',
        fontSize: 21,
        paddingVertical: 20,
        paddingHorizontal: 3,
     }

})



