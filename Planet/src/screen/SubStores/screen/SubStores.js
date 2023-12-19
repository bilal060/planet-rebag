import { View,FlatList,StyleSheet} from 'react-native'
import React from 'react'
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader'
import RenderData from '../components/RenderData'
import images from '../../../assets/images/images'

const SubStores = ({navigation}) => {
    const sampleData = [
        {
            storeName: "Carrefour",
            imageUrl: images.carrefour,
            itemReturned: 1209,
            storeID: "CF783457",
            numOfPOS: 12,
            totalRedeemPrice: 5639.00,
            storeLocation: "Al Ain, Abu Dhabi",
        },
        {
            storeName: "Carrefour",
            imageUrl: images.carrefour,
            itemReturned: 1209,
            storeID: "CF783457",
            numOfPOS: 12,
            totalRedeemPrice: 5639.00,
            storeLocation: "Al Ain, Abu Dhabi",
        },
    ];
    return (
        <View style={styles.container}>
            <AppMainHeader title="Sub Stores" navigation={navigation}/>
            <View>
                <FlatList
                    data={sampleData}
                    renderItem={({ item }) => <RenderData data={item} navigation={navigation}/>}
                />
            </View>
            
        </View>
    )
}

export default SubStores
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
})