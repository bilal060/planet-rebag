/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import images from '../../../assets/images/images';
import styles from './RedeemQrStartStyles';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import {CountdownTimer, FlipNumber} from 'react-native-flip-countdown-timer';
import {useDispatch, useSelector} from 'react-redux';
import {imgUrl, rootUrl} from '../../../../utils/constants';

const RedeemQrStart = ({navigation}) => {
  const [timervalue, settimervalue] = useState(50155);
  const dispatch = useDispatch();
  const {allStore, Barcode} = useSelector(state => state.home);

  function calaculateSeconds() {
    const now = new Date().getTime();
    const futureDate = new Date(Barcode?.expireDate).getTime();

    // const futureDate = new Date(Barcode?.createdAt).getTime();

    const timeleft = futureDate - now;

    // convert milliseconds to seconds / minutes / hours etc.
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    // calculate remaining time
    const days = Math.floor(timeleft / msPerDay);
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / msPerHour);
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / msPerMinute);
    const seconds = Math.floor((timeleft % (1000 * 60)) / msPerSecond);

    // console.log(toSeconds(hours, minutes, seconds));
    console.log(
      days +
        ' days ' +
        hours +
        ' hours ' +
        minutes +
        ' minutes ' +
        seconds +
        ' seconds left',
    );
    settimervalue(toSeconds(hours, minutes, seconds));
  }
  React.useEffect(() => {
    calaculateSeconds();
  }, []);
  function toSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
  }

  React.useEffect(() => {
    // console.log(timervalue);
    // console.log('call123e');
  }, [timervalue]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: scalableheight.three,
      }}>
      <StatusBar hidden={true} />
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomStack', {screen: 'Home'})}>
        <View style={styles.header}>
          <Image source={images.backarrowicon} style={styles.img} />
          <Text style={styles.title}>Redeem</Text>
          <View />
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <Text style={[styles.TextQr]}>Scan Coupon Barcode</Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '55%',
          // backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          // source={{uri: imgUrl + Barcode?.barcodeURL}}
          source={images.barCode}
          style={{width: '100%', height: 200}}
        />

        <View style={{bottom: 31}}>
          <Text style={[styles.TextQr]}>{Barcode?.barCodeNumber}</Text>
        </View>
      </View>

      <CountdownTimer
        wrapperStyle={{
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        time={86397 + 3600}
        play={true}
        // flipNumberProps={{unit: 'hours'}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: scalableheight.two,
          width: '100%',
          alignSelf: 'center',
          marginBottom: scalableheight.two,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '104%'}}>
          <CustomButton
            action={() => navigation.navigate('BottomStack', {screen: 'Home'})}
            title={'Done'}
          />
        </View>
      </View>
    </View>
    //
  );
};

export default RedeemQrStart;
