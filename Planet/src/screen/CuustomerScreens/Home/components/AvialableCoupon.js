/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../../../../assets/color/color';
import {CountdownTimer, FlipNumber} from 'react-native-flip-countdown-timer';
import {useNavigation} from '@react-navigation/native';
import {getAllStore, getstoreBySession} from '../../../../Store/homeApi';
import {useDispatch, useSelector} from 'react-redux';
import data from '../../../Faq/components/data';
export default function AvialableCoupon(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  function calaculateSeconds() {
    const now = new Date().getTime();
    const futureDate = new Date('28 Sep 2023 06:40:00').getTime();

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
    // console.log(
    //   days +
    //     ' days ' +
    //     hours +
    //     ' hours ' +
    //     minutes +
    //     ' minutes ' +
    //     seconds +
    //     ' seconds left',
    // );
  }
  // console.log(props?.data);
  React.useEffect(() => {
    calaculateSeconds();
  }, []);
  function toSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
  }
  function renderCountDown() {
    // setTimeout(() => {
    return (
      <>
        <CountdownTimer
          wrapperStyle={{
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          time={props?.time + 3600}
          play={true}
          flipNumberProps={{unit: 'hours'}}
        />
      </>
    );
    // }, 1000);
  }
  return (
    <>
      <ImageBackground
        // key={props?.key}
        source={require('../../../../../images/couponbg.png')}
        style={style.parentContainer}>
        <View style={style.topContainer}>
          <Text style={style.topTxt}>{"#" + props?.index}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderBottomColor: '#79AA00',
                // borderBottomWidth: 1.4,
                width: 30,
                marginRight: 6,
              }}
            />
            {/* <Text style={style.topTxt}>53</Text> */}
          </View>
        </View>
        <View style={style.centerContianer}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              top: 10,
              color: color.green2,
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily:"SFProDisplay-Medium",
              minWidth:"80%"
            }}>
            {props?.data?.returnBagsQty +  " Bags and " + props?.data?.returnBottelsQty }
          </Text>

           <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              top: 10,
              color: color.green2,
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily:"SFProDisplay-Medium",
              // backgroundColor: color.green2,
            }}>
            {' Bottles are ready to recycle'}
          </Text> 
         
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',

            width: '100%',
            height: '150%',
            zIndex: 100,
            elevation: 100,
          }}>
          {/* {renderCountDown()} */}
        </View>
      </ImageBackground>
      <TouchableOpacity
        onPress={() => {
          // console.log(props?.data?._id);
          // return;

          dispatch(getstoreBySession({sessionId: props?.data?._id}));
          navigation.navigate('SelectStore', {data: props?.data});
        }}
        style={{
          width: '100%',
          bottom: 4,
          elevation: 1000,
          zIndex: 1000,
          // backgroundColor: 'red',
        }}>
        <View style={style.ButtonView}>
          <Text style={style.buttonText}>Recycle</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  parentContainer: {
    marginVertical: '4%',
    marginHorizontal: '4%',
    // paddingHorizontal: '4%',
    // paddingVertical: '4%',
    width: '100%',
    height: 150,
    alignSelf: 'center',
    //borderColor: 'red',
  },
  topContainer: {
    width: '100%',
    // backgroundColor: '#EEEEEE',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
  },
  topTxt: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1E252B',
    // fontFamily: 'Inter',
    // lineHeight: 15,
  },
  centerContianer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // width:"80%"
  },
  contentContainer: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginVertical: '3%',
    paddingVertical: '1%',
  },
  headingtxt: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E252B',

    //lineHeight: 15,
  },
  headingsideTxt: {
    fontSize: 12.3,
    fontWeight: '600',
    color: '#1E252B',
    top: 4,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily:"SFProDisplay-Medium"
  },
  ButtonView: {
    width: '97%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    height:55,
    // padding: 13,
    justifyContent: 'center',
    alignSelf: 'center',

    // marginTop: '24%',
  },
});
