import {StyleSheet} from 'react-native'
import color from '../../../assets/color/color'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    card:{
        margin:24,
        borderColor:'#EEEEEE',
        borderRadius:8,
        borderWidth:1,
    },
    image:{
        width:31.67,
        height:25,
        resizeMode: 'cover',
    },
    imageContainer:{
        padding:7.5,
        backgroundColor:'#F8F8F8',
        borderRadius:6,
        marginRight:16
    },
    cardView:{
        backgroundColor: 'white',
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:16,
        paddingVertical:12,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        borderBottomWidth:1,
        borderColor:'#EEEEEE'
    },
    storeTitle:{
        fontSize:20,
        fontWeight:'700',
        lineHeight:20,
        color:'black'
    },
    displayparamData:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    paramDataText:{
        fontSize:13,
        fontWeight:'bold',
        lineHeight:13,
        color:'black',
        paddingVertical:7
    },
    optionsContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf:'flex-start',
        marginHorizontal:17,
    },
    optionsText:{
        fontSize: 16,
        color: '#A8A8A8',
        fontWeight: 'bold',
        paddingLeft:5,
    },
    optionsTextSelected:{
        color: 'white',
        backgroundColor:color.green2,
        borderRadius:8,
    },
    optionsFlex:{
        paddingHorizontal: 15,
        backgroundColor:'#F8F8F8',
        padding:10,
        borderRadius:8,
        margin:5,
        flexDirection:'row',
        alignItems: 'center',
    },
    optionsImg:{
        height:10,
        width:10,
        resizeMode:'contain',
        tintColor:'#A8A8A8'
    },
})

export default styles