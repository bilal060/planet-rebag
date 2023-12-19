/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../../../../images/logo.png';
import styles from './LandingStyles';
import {Button} from '../components/buttons/CustomButton';
import images from '../../../assets/images/images';
import {scalableheight} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {registerGuestUser} from '../../../Store/auth';

const Landing = ({navigation}) => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state => state.auth);

  function callGuestUser() {
    dispatch(registerGuestUser({name:"odd"}));
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigation.replace('BottomStack');
      // navigation.replace('Home')
    }
  }, [isAuthenticated]);
  return (
    <View style={styles.container}>
      <View style={styles.topCirlcle}></View>

      <View style={styles.rightCircle}></View>
      <Image source={logo} style={styles.logo} />
      <View style={styles.TitleContainer}>
        <Text style={styles.LogoTitle}>PLANET RE-BAG</Text>
        <Text style={{color: 'black'}}>Scan and Earn Money</Text>
      </View>
      <View style={styles.buttonViewContainer}>
        {/* <Button
          title={'Store - Login or Sign up'}
          page={'StoreSignUp'}
          navigation={navigation}
        /> */}
        <Button
          title={'Login or Sign up'}
          page={'Login'}
          navigation={navigation}
        />
        <CustomButton
          title={'Start as a Guest'}
          action={() => callGuestUser()}
        />
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <Image
          style={{width: '100%', height: scalableheight.ten}}
          source={images.maskImg}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Landing;
