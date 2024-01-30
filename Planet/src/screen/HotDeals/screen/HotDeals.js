/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Linking,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import images from '../../../assets/images/images';
import styles from './HotDealsStyle';
import {scalableheight} from '../../../assets/responsiveness';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllDeals} from '../../../Store/homeApi';
import {imgUrl} from '../../../../utils/constants';
import { showMessage } from 'react-native-flash-message';

const HotDeals = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {allDeals} = useSelector(state => state.home);
  const navigation = useNavigation();
  const RenderDeals = (
    imgpath,
    title,
    text1,
    IsRedeem,
    discount,
    redeemLink,
  ) => {
    //  console.log(imgpath);
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Linking.openURL(redeemLink)}>
        <View style={styles.dealsContainer}>
          {IsRedeem == false && (
            <View
              style={{
                position: 'absolute',
                zIndex: 10000,
                width: '100%',
                height: '100%',
                elevation: 10000,
              }}>
              <Image
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
                source={require('../../../assets/../../images/blue.png')}
              />
            </View>
          )}

          <View style={styles.dealsContentContainer}>
            <Image source={{uri: imgUrl + imgpath?.replace(/\\/g, '/')}} style={styles.dealsimg} />
            <View style={styles.dealsTextContainer}>
              <Text numberOfLines={1} style={styles.dealsTitle}>
                {title}
              </Text>
              <Text numberOfLines={2} style={styles.dealsText1}>
                {text1}
              </Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={{width:"100%", marginVertical:10, justifyContent:"flex-end", alignItems:"flex-end"}}>
          <Text numberOfLines={2} style={{...styles.dealsText1, textAlign:"right", marginRight:20 }}>
                { discount  +" discount" }
              </Text>
          </View>
         
        </View>
      </TouchableOpacity>
    );
  };

  const renderDeals = allDeals?.map((data, index) => {
    //  console.log(data);
    return (
      <React.Fragment key={index}>
        {RenderDeals(
          data?.image,
          data?.name,
          data?.description,
          true,
          data?.percentage,
          data?.link,
        )}
      </React.Fragment>
    );
  });

  useEffect(() => {
    // Alert.alert("dhdhg")
    // dispatch(getAllDeals());
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      
      // Alert.alert("Rewards will be coming soon!")
      setModalVisible(true)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.titleContainer}>
        <Text style={styles.title}>Rewards</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
      


          <View style={styles.modalView}>

          <View style={{width:"100%",height:20, justifyContent:"flex-end",alignItems:"flex-end", marginTop:20,marginRight:10}}>
          <Pressable     onPress={() => setModalVisible(!modalVisible)}>
           <Image resizeMode='contain' style={{width:30,height:30}} source={require('../../../../images/cross.jpg')}/>
           </Pressable>
          </View>

          <Pressable     onPress={() => setModalVisible(!modalVisible)}>
        <Image resizeMode='contain' style={{width:250,height:250}} source={require('../../../../images/rewards.png')}/>
        </Pressable>
            {/* <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
  
      <View style={{marginTop: scalableheight.onepointfive}}>
        {/* {renderDeals} */}
      </View> 
    </SafeAreaView>
  );
};

export default  React.memo( HotDeals);
