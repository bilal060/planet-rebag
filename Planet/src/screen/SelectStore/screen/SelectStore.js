/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TextInput,
  ScrollView,
  Modal,
  Pressable
} from 'react-native';

import images from '../../../assets/images/images';
import {showMessage} from 'react-native-flash-message';

import {scalableheight} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import StoreDeatil from '../components/StoreDeatil';
import {useDispatch, useSelector} from 'react-redux';
import color from '../../../assets/color/color';
import { generateBarcode } from '../../../Store/homeApi';

let payload = {
  name: "",
  sessionId: ""
 
};

export default function SelectStore({navigation, route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const {data} = route?.params;
  const dispatch = useDispatch();
  allStore;
  const {allStore, storeBySession} = useSelector(state => state.home);
  const [totalshopping, settotalshopping] = useState('');
  const [IsstoreOther, setIsstoreOther] = useState(false);

  const StoreData=[{storeName:"Walmart", storeImagesPath:images.walmart,total:"25$" , backgroundColor :'#004E9F1A'},{storeName:"Target", storeImagesPath:images.target,total:"40$" , backgroundColor: '#BF1C221A',} 
,{storeName:"Other", storeImagesPath:null, total:"20$"}]

  // const RenderAllStore = storeBySession?.map((data, index) => {
  //   return (
  //     <StoreDeatil
  //       key={index}
  //       data={data}
  //       NavigatetoScreen={NavigatetoScreen}
  //     />
  //   );
  // });

  const RenderAllStore = ()=>{
    let allStoredata  =[...allStore];
    allStoredata.push({
      name:"Other",
    })
    return(
      allStoredata?.map((data, index) => {
    return (
      <StoreDeatil
        key={index}
        data={data}
        NavigatetoScreen={NavigatetoScreen}
        index={index}
  
      />
    );
  })
)};


  function NavigatetoScreen(dataa) {
  
      // let payload = {
      //   storeid: dataa?._id,
      //   sessionId: data?._id,
      //   finalDiscountvalue: totalshopping,
      // };

      payload.name= dataa?.name;
      payload.sessionId = data?._id;

      if(dataa?.name =='Other')
      {
         setIsstoreOther(true);
      }
      else{
         setIsstoreOther(false)
      }
      setModalVisible(true)
  }

  function GenerateBarCode() {
    // console.log(data);
     //console.log(payload);
      // return;
      if(IsstoreOther == true)
      {
        payload.name= "Other";
      }
        //  console.log(payload);
      // return;
      // if(payload.name == '' && IsstoreOther == true )
      // {
      //   showMessage({
      //     message: 'Error',
      //     description: 'Please enter store name',
      //     type: 'error',
      //   });
      //   return;
      // }
      if(payload.name == '')
      {
        showMessage({
          message: 'Error',
          description: 'Please select any store.',
          type: 'error',
        });
        return;
      }
    dispatch(generateBarcode(payload));
    payload.name="";
    payload.sessionId="";
    navigation.replace("ThankyouScreen",{data:data});
  }
  return (
    <ScrollView>
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width:"100%", justifyContent:"flex-end", alignItems:"flex-end"}}>
            <Pressable
              // style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
             <Image style={{width:25, height:25,left:7}} resizeMode="contain" source={require('../../../../images/cross.jpg')}/>
            </Pressable>
            
            </View >
            <View style={{width:"100%", justifyContent:"center", alignItems:"center", height:"100%"}}>
            <Image style={{width:300, height:300,}} resizeMode="cover" source={require('../../../../images/recycleBox.png')}/>
            </View>
          </View>
        </View>
      </Modal>
    <View
      style={{
        height: '100%',
        // backgroundColor: 'white',
        padding: scalableheight.three,
        width: '100%',
      }}>
      <StatusBar hidden={true} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '6%',
            borderRadius: 8,
          }}>
          <Image
            source={images.backarrowicon}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />

          <View />
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 20,
        }}>
        <Text style={{fontSize: 22, color: '#1E252B', fontWeight: '700'}}>
          Recycling Location
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          // height: '70%',
          marginTop: 12,
        }}>
        {/* <StoreDeatil mall={true} />
        <StoreDeatil /> */}
        {RenderAllStore()}
      </View>
{/* {IsstoreOther == true &&
      <View
        style={{
          width: '100%',
          // height: '15%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:12
          // backgroundColor:"red"
        }}>
        <Text style={{fontSize: 16, color: '#1E252B', fontWeight: '700'}}>
          Enter store name
        </Text>
        <TextInput
          style={{
            width: '94%',
             height: 55,
            backgroundColor: '#e4e4e4',
            borderRadius: 7,
            paddingHorizontal: 12,
            marginTop: 6,
            color: 'black',
            fontSize: 15,
          }}
          // keyboardType="number-pad"
          placeholder="Enter .."
          value={totalshopping}
          onChangeText={txt => [settotalshopping(txt)]}
        />
      </View>
} */}

      <View
        style={{
          width: '100%',
          // height: '15%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:17
        }}>
       <TouchableOpacity
        onPress={() => {
          // NavigatetoScreen({});
          GenerateBarCode();
        }}
        style={{
          width: '100%',
          // height:475,
        }}>
        <View style={{ width: '94%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,

    
    // padding: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60
}}>
          <Text style={{ color: 'white',
    fontSize: 17,
    fontWeight: '700',
    // lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  }}>Finish Recycling</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#e4e4e4',
    // borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    height:"100%",
    width:"100%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    
  },
});