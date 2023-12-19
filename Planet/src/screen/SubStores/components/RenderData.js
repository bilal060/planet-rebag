import { View, Text, TouchableOpacity,Switch,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import color from '../../../assets/color/color'
import { CustomButton } from '../../../assets/customButton/CustomButton'

export default function RenderData ({data,navigation}) {
    const [availibility, setavailibility] = useState(false)
    return (
        <View style={styles.card}>
            <View style={styles.cardView}>
                <Text style={styles.storeTitle}>{data.storeName}</Text>
                <View style={styles.cardScndView}>
                    <Text style={[styles.storeTitle,{paddingHorizontal:5}]}>{availibility?'Available':'Unavailable'}</Text>
                    <Switch
                        trackColor={{false: '#CCCCCC', true: '#0064FA'}}
                        thumbColor={'#FFFFFF'}
                        ios_backgroundColor="#3e3e3e"
                        value={availibility}
                        onValueChange={() => setavailibility(!availibility)}
                    />
                </View>
            </View>
            <View style={{ padding:16,backgroundColor:'white'}}>
                <View style={styles.displayData}>
                    <View style={{
                        alignItems: 'flex-start',
                        width:'40%'
                    }}>
                        <Text style={styles.dataText}>Items Returned</Text>
                        <Text style={[styles.dataText,{fontWeight:'400'}]}>{data.itemReturned}</Text>
                    </View>
                    <View style={{
                        alignItems: 'flex-start',
                        width:'40%'
                    }}>
                        <Text style={styles.dataText}>Store ID</Text>
                        <Text style={[styles.dataText,{fontWeight:'400'}]}>{data.storeID}</Text>
                    </View>
                </View>
                <View style={styles.displayData}>
                    <View style={{
                        alignItems: 'flex-start',
                        width:'40%'
                    }}>
                        <Text style={styles.dataText}>No. of POS</Text>
                        <Text style={[styles.dataText,{fontWeight:'400'}]}>{data.numOfPOS}</Text>
                    </View>
                    <View style={{
                        alignItems: 'flex-start',
                        width:'40%'
                    }}>
                        <Text style={styles.dataText}>Total Redeem Price</Text>
                        <Text style={[styles.dataText,{fontWeight:'400'}]}>AED {data.totalRedeemPrice}</Text>
                    </View>
                </View>
                <Text style={styles.dataText}>Store Location</Text>
                <Text style={[styles.dataText,{fontWeight:'400'}]}>{data.storeLocation}</Text>
            </View>
            <CustomButton
                title={'View Stores'}
                action={() => navigation.navigate('DetailSubStore',data)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        margin:24,
        borderColor:'#EEEEEE',
        borderRadius:8,
        borderWidth:1,
    },
    cardView:{
        backgroundColor: '#EEEEEE',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:16,
        paddingVertical:12,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
    },
    cardScndView:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems: 'center',
    },
    storeTitle:{
        fontSize:15,
        fontWeight:'700',
        lineHeight:15,
        color:'black'
    },
    displayData:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dataText:{
        fontSize:13,
        fontWeight:'bold',
        lineHeight:13,
        color:'black',
        paddingVertical:7
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        top: '14%',
    },
    buttonContainer: {
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: 20,
        backgroundColor: color.green2,
        justifyContent: 'center',
    },
    buttonView:{
        padding: 16,
        borderTopWidth:1,
        borderColor:'#EEEEEE'
    }
})