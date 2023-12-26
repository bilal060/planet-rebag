/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import React ,{useState} from 'react';
import images from '../../../assets/images/images';
import {useNavigation} from '@react-navigation/native';
import {imgUrl} from '../../../../utils/constants';
import {showMessage} from 'react-native-flash-message';

export default function StoreDeatil({mall, data, NavigatetoScreen , index}) {
  const navigation = useNavigation();
  const [selectedStore,setselectedStore]= useState(null);
  

    //  console.log(imgUrl + data?.image);

  return (
  
    <TouchableOpacity
      onPress={() => {
        NavigatetoScreen && NavigatetoScreen(data)
        // console.log(data?.name)
        showMessage({
              message: 'Notification',
              description: 'Store ' + data?.name +" selected",
              type: 'success',
            });
        setselectedStore (data);
        }}>
      <ImageBackground
        resizeMode="contain"
        style={{
          width: '100%',
          height: 130,
          // paddingHorizontal: 16,
           marginVertical: 10,
        
            backgroundColor: index == 0 ?  "#3486C11A" : index ==1 ? "#FF3D3D1A" :"#e4e4e4",
            borderColor: index == 0 ?  "#3486C11A" : index ==1 ? "#FF3D3D1A" :"#e4e4e4",
          // borderWidth: selectedStore?.name == data?.name && 1
        }}
        source={require('../../../../images/storebg.png')}>
        <View
          style={{
            width: '40%',
            height: '100%',
            justifyContent: 'center',
            alignItems:"center",
            paddingHorizontal: 16,
           
          }}>
            {data?.name =='Other'?
             <Text style={{color: '#1E252B', fontWeight: 'bold', fontSize: 25}}>
  
             {data?.name} 
           </Text>
          :<Image
            resizeMode="contain"
              source={{uri: imgUrl + data?.image?.replace(/\\/g, '/')}}
            // https://api.planetrebag.com/uploads\store\Walmart-Logo.png
              // source={{uri:"https://api.planetrebag.com/uploads/store/Walmart-Logo.png"}}
            style={{height: 120, width: 120}}
          />
        }
        </View>
        <View
          style={{
            width: '90%',
            height: '25%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 13,
            bottom:"15%"
            // backgroundColor: 'red',
            // alignItems: 'center',
          }}>
          
        </View>

      </ImageBackground>

    </TouchableOpacity>
   

  );
}
