/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import images from '../../../assets/images/images';
import styles from './RedeemQrCodeStyles';
import {scalableheight} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';

const RedeemQrCode = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: scalableheight.three,
      }}>
      <StatusBar hidden={true} />
      <AppMainHeader title={'Redeem Qr Code'} navigation={navigation} />
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: '6%',
        }}>
        <View style={{...styles.ImgView, backgroundColor: '#3486C11A'}}>
          <Image
            source={images.bag}
            style={[styles.BnCImage, {tintColor: '#025cbd'}]}
          />
          <Text style={[styles.imageText, {color: '#025cbd'}]}>+1</Text>
        </View>
        <View style={{...styles.ImgView, backgroundColor: '#9FC1341A'}}>
          <Image source={images.cash1} style={styles.BnCImage} />
          <Text style={[styles.imageText, {color: 'green'}]}>+1</Text>
        </View>
      </View> */}

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <Text style={[styles.TextQr]}>Take a screenshot</Text>
        <Image source={images.qr} style={styles.Qrimg} />
        <Text
          style={[
            styles.wordsQr,
            {color: '#1E252B', fontWeight: '700', fontSize: 16},
          ]}>
          ID: KYT453267
        </Text>
        <Text style={[styles.wordsQr, {color: '#777777'}]}>
          Return the scanned bag to the supermarket and claim your reward using
          the QR Code.
        </Text>

        <Text style={[{color: 'grey', textAlign: 'center'}]}>Thanks!</Text>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            alignSelf: 'center',
            marginBottom: scalableheight.five,
          }}>
          <CustomButton
            action={() => navigation.navigate('BottomStack', {screen: 'Home'})}
            title={'Done'}
          />
        </View>
      </View>
    </View>
  );
};

export default RedeemQrCode;
