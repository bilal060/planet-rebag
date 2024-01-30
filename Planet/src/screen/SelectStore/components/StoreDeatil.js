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

export default function StoreDeatil({mall, data, NavigatetoScreen , index, openAnimationModal}) {
  const navigation = useNavigation();
  const [selectedStore,setselectedStore]= useState(null);
  

  return (
  <View style={{height:93, width:"100%", marginTop:3}}>
    <TouchableOpacity
      onPress={() => {
        setselectedStore (data);
        NavigatetoScreen && NavigatetoScreen(data)
       
        }}>
      <View
        style={{
          width: '100%',
          height: "93%",
           backgroundColor:"#F5F5F5",
           borderRadius:8
        
        }}

        >
        <View
          style={{
            width: '100%',
            height: '100%',
            //  justifyContent: 'center',
             flexDirection:"row",
            alignItems:"center",
            paddingHorizontal:12
           
          }}>
            {/* <Image
            resizeMode="contain"
              source={require('../../../../images/itema.png')}
      
            style={{height: 50, width: 50 , justifyContent:"center",alignItems:"center"}}
          /> */}
            {data?.name =='Other'?
             <Text style={{color: '#1E252B', fontWeight: 'bold', fontSize: 25, textAlignVertical:"center",marginLeft:10}}>
  
             {data?.name} 
           </Text>
          :<Image
            resizeMode="contain"
              source={{uri: imgUrl + data?.image?.replace(/\\/g, '/')}}
            // https://api.planetrebag.com/uploads\store\Walmart-Logo.png
              // source={{uri:"https://api.planetrebag.com/uploads/store/Walmart-Logo.png"}}
            style={{height: 105, width: 105 , justifyContent:"center",alignItems:"center", marginLeft:6}}
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
            bottom:"38%",
            // bottom:"15%",
            //  backgroundColor: 'red',
            // alignItems: 'center',
          }}>
            <Pressable onPress={()=>{
              // NavigatetoScreen && NavigatetoScreen(data)
              openAnimationModal && openAnimationModal()
              
              
              setselectedStore (data);
            }}>
            <Image resizeMode='contain' style={{width:23, height:23}} source={require('../../../../images/Danger2.png')}/>
            </Pressable>
        </View>

      </View>

    </TouchableOpacity>
    </View>
   

  );
}
