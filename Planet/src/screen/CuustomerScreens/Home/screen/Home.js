/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomeStyles';
import images from '../../../../assets/images/images';
import Header from '../components/Header';
import color from '../../../../assets/color/color';
import SegmentRoundBar from '../components/SegmentRoundBar';
import PlanetsTypes from '../components/PlanetsTypes';
import AllComponent from '../components/AllComponent';
import HistoryHome from '../components/HistoryHome';
import {fontSize, scalableheight} from '../../../../assets/responsiveness';
import BagsTypes from '../components/BagsTypes';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import {CountdownTimer, FlipNumber} from 'react-native-flip-countdown-timer';
import AvialableCoupon from '../components/AvialableCoupon';
import {
  getAllstoreBycategory,
  getAllSessionsasUser,
  getSessionByStatus,
  getAllStore,
  getRedeemTranscationHistory,
  getUserProfileRedeemStatus,
  getstoreBySession,
  getPrice,
  getSessionPrice
} from '../../../../Store/homeApi';
import {useDispatch, useSelector} from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const {
    getAllstoreBottle,
    getAllstoreBag,
    getAllSessions,
    sessionBottleStatus,
    sessionBagStatus,
    allStore,
    allTranscationHistory,
    userRedeemStatus,
    getcalculatedPrice
  } = useSelector(state => state.home);
  const navigation = useNavigation();
  const options = ['Bags', 'Bottles'];
  const [timervalue, settimervalue] = useState(0);
  const [selectedOption, setSelectedOption] = useState('Bags');
  const [couponCount, setCouponCount] = useState(1);
  const renderSelectedOption = () => {
    if (selectedOption === 'Bags') {
      // navigation.navigate('RegisterBag');
      navigation.navigate('HomeBags', {category: 'Bags'});
    } else if (selectedOption === 'Bottles') {
      navigation.navigate('HomeBags', {category: 'Bottles'});
    } else {
      return null;
    }
  };

  useEffect(() => {
    // renderSelectedOption();
  }, [selectedOption]);

  useEffect(() => {
    dispatch(getAllStore());
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getPrice())
      dispatch(getSessionPrice())
      dispatch(getAllSessionsasUser());
      dispatch(getRedeemTranscationHistory());
       dispatch(getSessionByStatus({status: 'redeem', categoryName: 'bottles'}));
      dispatch(getSessionByStatus({status: 'redeem', categoryName: 'bags'}));
      // dispatch(getUserProfileRedeemStatus());
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const RenderAllStore = ()=> {

      return (
        <>
        <BagsTypes
          // key={index}
          style={{backgroundColor: '#e5ffe5'}}
            number={getcalculatedPrice?.totalCo2emission +" lbs"}
            heading={`CO2 Emissions \n Reduced`}
            logoimg ={require('../../../../../images/cloud.png')}
        />
        <BagsTypes
          // key={index}
          style={{backgroundColor: '#e5ffe5'}}
            number={getcalculatedPrice?.totalWasteRecycled  +" lbs"}
            heading={`Waste Recycled`}
            logoimg ={require('../../../../../images/lock1.png')}
        />
        </>
      );
    
  };

  const RenderAllStoreBottles = allStore?.map((data, index) => {
    if (data?.hasBags == true) {
      return (
        <BagsTypes
          key={index}
          image={images.carrefour}
          parentStyle={{
            backgroundColor: '#BF1C221A',
          }}
          barColor={'#BF1C22'}
          data={data}
          type={'bag'}
        />
      );
    }
  });

  function renderTransaction() {
    // Alert.alert('call');
    const dataa = allTranscationHistory?.filter(function (item) {
      return item.status != 'pending';
    });
    // return;
    // console.log(dataa?.length);
    if (dataa?.length <= 0) {
      return (
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '800',
            textAlign: 'center',
            marginVertical: 16,
            fontFamily:"SFProDisplay-Medium"
          }}>
          No record found
        </Text>
      );
    }
    return dataa.map(function (data, index) {
      //  console.log(data);
      return <HistoryHome key={index} data={data} index={index+1} />;
    });
  }

  function renderRedeem() {

    const data = getAllSessions?.filter(function (item) {
      return item.status == 'pending';
    });
    //  console.log(data);
    // return;
    if (data?.length <= 0) {
      return (
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: '800',
            textAlign: 'center',
            marginVertical: 16,
            fontFamily:"SFProDisplay-Medium"
          }}>
          No record found
        </Text>
      );
    }
    return data.map(function (data, index) {
      return <AvialableCoupon key={index} data={data}  index={index+1}/>;
    });
  }

  function renderCountDown() {
    // setTimeout(() => {
    return (
      <>
        <CountdownTimer
          wrapperStyle={
            {
              // width: '92%',
              // alignSelf: 'center',
              // justifyContent: 'center',
              // alignItems: 'center',
              // top: 200,
            }
          }
          time={timervalue + 3600}
          play={true}
          flipNumberProps={{unit: 'hours'}}
        />
      </>
    );
  }

  function calaculateSeconds() {
    const now = new Date().getTime();
    const futureDate = new Date(userRedeemStatus?.[0]?.unlockedTime).getTime();

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
    if (userRedeemStatus?.[0]?.isLocked === true) {
      calaculateSeconds();
    }
  }, [userRedeemStatus]);

  function toSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
  }

  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTxt}>Welcome!</Text>
        </View>
        

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '6%',
            paddingTop: 0,
            paddingBottom: 0,
          }}>
            {RenderAllStore()}
        </View>

        <View
          style={{
 
            marginTop: '3%',
            paddingHorizontal: '6%',
            
          }}>
          <Text style={{...styles.hsitroyTxt,   fontSize: fontSize.nineteen,
    fontWeight: '700',
    color: '#1E252B',
    fontFamily:"SFProDisplay-Medium"}}>
            Recycled Items
          </Text>
        </View>

        <View style={styles.parentPlanetType}>
          <PlanetsTypes
            style={{backgroundColor: '#E388001A'}}
            img={images.bagreturned}
            number={sessionBagStatus?.totalBags}
            heading={'Bags Recycled'}
          />
          <PlanetsTypes
            style={{backgroundColor: '#3486C11A'}}
            img={images.bottle1}
            number={sessionBottleStatus?.totalBottles}
            heading={'Bottles Recycled'}
          />
        </View>

        <View style={styles.parentAllcomponent}>
          <View style={styles.historyContainer}>
            <Text style={styles.hsitroyTxt}>{'Recycled History'}</Text>
          </View>
          <View style={styles.allcomponentContainer}></View>
        </View>
        <View style={{paddingHorizontal: '6%'}}>{renderTransaction()}</View>
        <View style={styles.parentAllcomponent}>
          <View style={styles.historyContainer}>
            <Text style={styles.hsitroyTxt}>{'Ready for Recycle'}</Text>
          </View>
          <View style={styles.allcomponentContainer}></View>
        </View>
        <View style={{paddingHorizontal: '6%'}}>
          {userRedeemStatus?.[0]?.isLocked == true &&
            timervalue > 0 &&
            getAllSessions?.length > 0 && (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 10000,
                  width: '100%',

                  elevation: 10000,

                  flex: 1,

                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,

                  alignSelf: 'center',
                  paddingHorizontal: '0%',
                  padding: 0,
                }}>
                <ImageBackground
                  resizeMode="cover"
                  style={{
                    width: '114%',
                    height: '100%',
                    paddingHorizontal: '0%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 0,
                    margin: 0,
                    // elevation: 100000,
                    // zIndex: 100000,
                    // backgroundColor: 'red',
                  }}
                  source={require('../../../../../images/blue.png')}>
                  <View style={{zIndex: 2, elevation: 2, marginTop: 10}}>
                    {renderCountDown()}
                  </View>
                </ImageBackground>
              </View>
            )}
          {renderRedeem()}
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
