/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar,
  LogBox
} from 'react-native';
import React, {useEffect} from 'react';
import images from '../../../assets/images/images';
import countryCode from '../../../assets/country code/countrycode';
import ModalDropdown from 'react-native-modal-dropdown';
import color from '../../../assets/color/color';
import routes from '../../../routes/routes';
import {deleteSecureInfo, getSecureInfo} from '../../../../utils';
import {_setUserData} from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { undefine } from 'xtype';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      LogBox.ignoreAllLogs();
      checkLoginalready();
      // deleteData();
    }, 2000);
  }, []);
  async function checkLoginalready() {
    // let userData = await getSecureInfo('userIsAuthenticated');
   
    // if(userData == undefined || userData == null)
    // {
    //   navigation.replace('Landing');
    //   return;
    // }
    // const data = await JSON.parse(userData);
   
    // if (data?.user?.id != undefined) {
    //   _setUserData(data);
    //   navigation.replace('BottomStack');
    // } else {
    //   navigation.replace('Landing');
    // }

    navigation.replace('Landing');
  }

  async function deleteData() {
    await deleteSecureInfo('userIsAuthenticated');
    AsyncStorage.clear();
  }
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
      }}>
      <StatusBar hidden={true} />
      <Image
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        source={require('../../../../images/SplashScreen.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginVertical: 22,
    marginLeft: 22,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
    // marginBottom: 46,
  },
  headerText: {
    flex: 0.9,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '800',
    color: 'black',
  },
  buttonContainer: {
    marginHorizontal: 24,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ebe8e8',
    borderRadius: 10,
    color: 'black',
    marginBottom: 16,
    paddingLeft: 10,
  },
  SubmitbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
  },
  ButtonView: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    backgroundColor: color.green2,
    marginVertical: 5,
    marginHorizontal: 24,
    justifyContent: 'center',
  },
  cancelButton: {
    borderWidth: 1.5,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    borderColor: color.green2,
    marginVertical: 5,
    marginHorizontal: 24,
    backgroundColor: '#ebe8e8',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebe8e8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    width: '30%',
  },
  Numberinput: {
    backgroundColor: '#ebe8e8',
    color: 'black',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '70%',
  },
});
