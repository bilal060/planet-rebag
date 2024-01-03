/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable,
  Alert
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
  <View style={{height:"33.33%", width:"100%"}}>
    <TouchableOpacity
      onPress={() => {
        NavigatetoScreen && NavigatetoScreen(data)
        showMessage({
              message: 'Notification',
              description: 'Store ' + data?.name +" selected",
              type: 'success',
            });
        setselectedStore (data);
        }}>
      <View
        // resizeMode="contain"
        style={{
          width: '100%',
          height: "93%",
          // paddingHorizontal: 16,
           marginVertical: 4,

        
             backgroundColor: index == 0 ?  "#3486C11A" : index ==1 ? "#FF3D3D1A" :"#e4e4e4",
            borderColor: index == 0 ?  "#3486C11A" : index ==1 ? "#FF3D3D1A" :"#e4e4e4",
            // backgroundColor:"red",
          
        }}
        // source={require('../../../../images/storebg.png')}>
        >
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems:"center",
          //  paddingHorizontal: 140,
            //  backgroundColor:"red"
           
          }}>
            {data?.name =='Other'?
             <Text style={{color: '#1E252B', fontWeight: 'bold', fontSize: 25,textAlign:"center", textAlignVertical:"center"}}>
  
             {data?.name} 
           </Text>
          :<Image
            resizeMode="contain"
              source={{uri: imgUrl + data?.image?.replace(/\\/g, '/')}}
            // https://api.planetrebag.com/uploads\store\Walmart-Logo.png
              // source={{uri:"https://api.planetrebag.com/uploads/store/Walmart-Logo.png"}}
            style={{height: 150, width: 150 , justifyContent:"center",alignItems:"center"}}
          />
        }
        </View>
        <View
          style={{
            width: '100%',
            height: '25%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 13,
            position:"absolute",
            justifyContent:"flex-end",
            alignItems:"flex-end",
            bottom:"43%",
            // bottom:"15%",
            //  backgroundColor: 'red',
            // alignItems: 'center',
          }}>
            <Pressable onPress={()=>{
              NavigatetoScreen && NavigatetoScreen(data)
              showMessage({
                    message: 'Notification',
                    description: 'Store ' + data?.name +" selected",
                    type: 'success',
                  });
              setselectedStore (data);
            }}>
            <Image resizeMode='contain' style={{width:26, height:26}} source={require('../../../../images/icon.png')}/>
            </Pressable>
        </View>

      </View>

    </TouchableOpacity>
    </View>
   

  );
}
