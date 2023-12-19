import { View, Text,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader'
import images from '../../../assets/images/images'
import data from '../components/data'
import {RenderItem} from '../components/RenderItem'
import styles from './DetailSubStoreStyle'

const DetailSubStore = ({navigation,route}) => {
    const paramData = route.params
    const options = [{'name' : 'All'}, {'name' : 'Bag','image' : images.bag}, {'name' : 'Bottle','image' : images.bottle}];
    const [ optionsIndex , setoptionsIndex ] = useState(0)
    const [selected, setselected] = useState('All')
    const OptionsList = () => {
        return (
            <View style={styles.optionsContainer}>
                {options.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} style={[styles.optionsFlex, optionsIndex == index && styles.optionsTextSelected]}
                    onPress={() => setoptionsIndex(index, setselected(item.name))}>
                        {item.image ? (
                            <Image source={item.image} style={[styles.optionsImg, optionsIndex == index && {tintColor:'white'}]}/>
                        ):(
                            <></>
                        )}
                        <Text style={[styles.optionsText, optionsIndex == index && styles.optionsTextSelected]}>
                        {item.name}</Text>
                    </TouchableOpacity>
                ))}
                
            </View>
        )  
    };
    const FilterData = ({item}) => {
        if (selected == 'All') {
            return( <RenderItem item={item} />)
        }
        else if (item.itemType == selected) {
            return( <RenderItem item={item} />)
        }   
        else{
            return null
        }
    }
    return (
        <View style={styles.container}>
            <AppMainHeader title={paramData.storeName} navigation={navigation}/>
            <View style={styles.card}>
                <View style={styles.cardView}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={paramData.imageUrl}
                            style={styles.image}
                        />
                    </View>
                    
                    <Text style={styles.storeTitle}>{paramData.storeName}</Text>
                </View>
                <View style={{ padding:16,backgroundColor:'white'}}>
                    <View style={styles.displayparamData}>
                        <View style={{
                            alignItems: 'flex-start',
                            width:'40%'
                        }}>
                            <Text style={styles.paramDataText}>Items Returned</Text>
                            <Text style={[styles.paramDataText,{fontWeight:'400'}]}>{paramData.itemReturned}</Text>
                        </View>
                        <View style={{
                            alignItems: 'flex-start',
                            width:'40%'
                        }}>
                            <Text style={styles.paramDataText}>Store ID</Text>
                            <Text style={[styles.paramDataText,{fontWeight:'400'}]}>{paramData.storeID}</Text>
                        </View>
                    </View>
                    <View style={styles.displayparamData}>
                        <View style={{
                            alignItems: 'flex-start',
                            width:'40%'
                        }}>
                            <Text style={styles.paramDataText}>No. of POS</Text>
                            <Text style={[styles.paramDataText,{fontWeight:'400'}]}>{paramData.numOfPOS}</Text>
                        </View>
                        <View style={{
                            alignItems: 'flex-start',
                            width:'40%'
                        }}>
                            <Text style={styles.paramDataText}>Total Redeem Price</Text>
                            <Text style={[styles.paramDataText,{fontWeight:'400'}]}>AED {paramData.totalRedeemPrice}</Text>
                        </View>
                    </View>
                    <Text style={styles.paramDataText}>Store Location</Text>
                    <Text style={[styles.paramDataText,{fontWeight:'400'}]}>{paramData.storeLocation}</Text>
                </View>
            </View>
            <OptionsList />
            <FlatList
                data={data}
                renderItem={({item}) => <FilterData item={item}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default DetailSubStore
