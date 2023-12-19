import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        padding:24,
        marginVertical:5,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    img:{
        height:20,
        width:20,
        resizeMode:'contain'
    },
    HeaderContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText:{
        color:'black',
        fontSize:20,
    },
    Title:{
        color:'black',
        fontSize:20,
        marginHorizontal:24,
        marginVertical:10,
        fontWeight:'bold',
    },
    buttonimg:{
        height:20,
        width:20,
        resizeMode:'contain',
        tintColor:'black'
    },
    buttonView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:24,
        marginVertical:12
    },
    buttonSecondView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText:{
        color:'black',
        fontSize:16,
        marginHorizontal:10
    },
    logoutButtonView:{
        marginTop:40,
    },
    termsView:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:60
    },
    termsText:{
        color:'black',
        fontSize:14
    }
})
export default styles;