/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
import images from '../../../assets/images/images';
import styles from './OtpStyles';
import {fontSize} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import {reserauth, verifyOtp} from '../../../Store/auth';
import {useDispatch, useSelector} from 'react-redux';

const Otp = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {loading, isVerifyOtp} = useSelector(state => state.auth);
  const {email} = route?.params;
  const inputRefs = Array(4)
    .fill()
    .map((_, index) => useRef(null));
  const [otp, setOtp] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOtpChange = (index, value) => {
    if (!value && index > 0) {
      inputRefs[index - 1].current.focus();
    } else if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    const updatedOtp = otp.split('');
    updatedOtp[index] = value;
    setOtp(updatedOtp.join(''));
  };

  const handleVerifyPress = () => {
    if (otp.length === 4) {
      // console.log(otp);
      let payload = {
        email: email,
        otp: otp,
      };
      dispatch(verifyOtp(payload));
      // setShowModal(true);
    } else {
      alert('Please enter all numbers in the OTP.');
    }
  };

  useEffect(() => {
    if (isVerifyOtp) {
      dispatch(reserauth());
      setShowModal(true);
    }
  }, [isVerifyOtp]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.header}>
          <Image source={images.back} style={styles.img} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Enter OTP</Text>
        <Text
          style={{
            color: 'black',
            margin: 20,
            marginTop: 12,
            fontSize: fontSize.fifteen,
          }}>
          {'A 4 digit code sent to '}
          {email}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.text}>Enter OTP</Text>
        <View style={styles.OtpTextBoxcontainer}>
          {inputRefs.map((ref, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              maxLength={1}
              onChangeText={value => handleOtpChange(index, value)}
              keyboardType="numeric"
              ref={ref}
            />
          ))}
        </View>
        <View style={styles.ButtonView}>
          <CustomButton title={'Verify'} action={handleVerifyPress} />
        </View>
      </View>
      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.congrats} style={styles.modalImage} />
              <Text style={styles.modalText}>Congratulations!</Text>
              <Text style={styles.modalText2}>
                Your account has been created successfully.
              </Text>
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                alignSelf: 'center',
                marginBottom: 20,
                // backgroundColor: 'red',
              }}>
              <CustomButton
                title={'Go To App'}
                action={() => {
                  setShowModal(false), navigation.navigate('Login');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Otp;
