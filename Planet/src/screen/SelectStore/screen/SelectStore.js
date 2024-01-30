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
  Pressable,
  SafeAreaView
} from 'react-native';

import images from '../../../assets/images/images';
import {showMessage} from 'react-native-flash-message';

import {scalableheight} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import StoreDeatil from '../components/StoreDeatil';
import {useDispatch, useSelector} from 'react-redux';
import color from '../../../assets/color/color';
import { generateBarcode, getSessionPrice } from '../../../Store/homeApi';
import Header from '../../CuustomerScreens/Home/components/Header';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';

let payload = {
  name: "",
  sessionId: ""
 
};

export default function SelectStore({navigation, route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [animmodalVisible, setanimModalVisible] = useState(false);
  const {data} = route?.params;
  const dispatch = useDispatch();
  allStore;
  const {allStore, storeBySession} = useSelector(state => state.home);
  const [totalshopping, settotalshopping] = useState('');
  const [IsstoreOther, setIsstoreOther] = useState(false);

  const StoreData=[{storeName:"Walmart", storeImagesPath:images.walmart,total:"25$" , backgroundColor :'#004E9F1A'},{storeName:"Target", storeImagesPath:images.target,total:"40$" , backgroundColor: '#BF1C221A',} 
,{storeName:"Other", storeImagesPath:null, total:"20$"}]

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
        openAnimationModal={openAnimationModal}
  
      />
    );
  })
)};


  function NavigatetoScreen(dataa) {
  
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

  function openAnimationModal()
  {
    setanimModalVisible(true);
  }

  function GenerateBarCode() {
    
      if(IsstoreOther == true)
      {
        payload.name= "Other";
      }
       
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
    dispatch(getSessionPrice())
    payload.name="";
    payload.sessionId="";
    navigation.replace("ThankyouScreen",{data:data});
  }
  return (
    <><SafeAreaView style={{ flex: 0, backgroundColor: '#29542A' }} /><SafeAreaView style={{backgroundColor:"white"}}>
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
            {/* <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
             <Image style={{width:25, height:25,left:7}} resizeMode="contain" source={require('../../../../images/cross.jpg')}/>
            </Pressable> */}
            
            </View >
            <View style={{width:"100%", justifyContent:"center", alignItems:"center", height:"100%"}}>
              <View style={{width:"100%", height:"75%" ,  justifyContent:"center", alignItems:"center",}}>
            <Image style={{width:240, height:240,}} resizeMode="cover" source={require('../../../../images/recycleBox.png')}/>
            </View>
            <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       <TouchableOpacity
        onPress={() => {
          GenerateBarCode();
        
        }}
        style={{
          width: '100%',
        }}>
        <View style={{ width: '98%',
    alignItems: 'center',
    backgroundColor: "#29542A1A",
    borderRadius: 10,
    borderColor:"#29542A",
    borderWidth:0.8,

    
    // padding: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 61
}}>
          <Text style={{ color: '#29542A',
    fontSize: 17,
    fontWeight: '900',
    // lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  }}>Finish Recycling</Text>
        </View>
      </TouchableOpacity>
             </View>


             <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:12
        }}>
       <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
        style={{
          width: '100%',
        }}>
        <View style={{ width: '98%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,

    
    // padding: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 61
}}>
          <Text style={{ color: 'white',
    fontSize: 17,
    fontWeight: '800',
    // lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  }}>Back</Text>
        </View>
      </TouchableOpacity>
             </View>
            
            </View>

        
          </View>
        </View>
      </Modal>



      <Modal
        animationType="slide"
        transparent={true}
        visible={animmodalVisible}
        onRequestClose={() => {
          setanimModalVisible(!animmodalVisible);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width:"100%", justifyContent:"flex-end", alignItems:"flex-end", }}>
             <Pressable
              onPress={() =>   setanimModalVisible(!animmodalVisible)}>
             <Image style={{width:25, height:25,left:7}} resizeMode="contain" source={require('../../../../images/cross.jpg')}/>
            </Pressable> 
            
            </View >
            <View style={{width:"100%", justifyContent:"center", alignItems:"center", height:"100%",}}>
              <View style={{width:"100%", height:"100%" ,  justifyContent:"center", alignItems:"center"}}>
            <Image style={{width:400, height:420,}} resizeMode="cover"  source={require('../../../../images/RecycleItems.gif')}/>
            </View>
            </View>

          </View>
        </View>
      </Modal>



      <AppMainHeader title="Location" navigation={navigation} isBack={true}/>
    <View
      style={{
        height: '100%',
        // backgroundColor: 'white',
        padding: scalableheight.three,
        width: '100%',
      }}>
    
      
      <View
        style={{
          marginTop: 3,
        }}>
        <Text style={{fontSize: 22, color: '#1E252B', fontWeight: '700'}}>
         Choose Recycling Location
        </Text>
      </View>


      <View
        style={{
          width: '100%',
           height: '88%',
          marginTop: 10,

        }}>
        
        {RenderAllStore()}
      </View>


      {/* <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       <TouchableOpacity
        onPress={() => {
          GenerateBarCode();
        }}
        style={{
          width: '100%',
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
      </View> */}
    </View>
</SafeAreaView>
    </>
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
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  
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