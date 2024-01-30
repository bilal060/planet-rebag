/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import images from '../../../assets/images/images';
import styles from './ForgotStyles';
import {scalableheight} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import {forgotPassword, reserauth} from '../../../Store/auth';
import {useDispatch, useSelector} from 'react-redux';

const ForgorPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const {isForgot} = useSelector(state => state.auth);
  const [email, setemail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    if (email.trim() == '') {
      alert('enter your email address');
    } else {
      let payload = {
        email: email,
      };
      dispatch(forgotPassword(payload));
    }
  };

  useEffect(() => {
    if (isForgot) {
      dispatch(reserauth());
      setShowModal(true);
    }
  }, [isForgot]);
  return (
    <SafeAreaView style={{ flex: 1,
      backgroundColor: 'white',}}>
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.header}>
          <Image source={images.back} style={styles.img} />
        </View>
      </TouchableOpacity>
      <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
      <Image source={images.login} style={styles.loginimg} />
      </View>

      <Text style={styles.title}>Forgot Password?</Text>
      <Text
        style={{
          color: '#777777',
          marginHorizontal: 24,
          marginBottom: 20,
          fontSize: scalableheight.onepointfive,
          letterSpacing: 1,
          fontWeight: '400',
          top:7
        }}>
        Enter your email associated with your account and we'll send you an
        email with instructions to reset your password.
      </Text>

      <View style={styles.emailContainer}>
        <Text style={styles.buttonText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#A3A3A3'}
          placeholder={'@ Enter your Email'}
          onChangeText={e => setemail(e)}
          value={email}
        />
      </View>
      <Modal visible={showModal} transparent={true} animationType="slide">
        <View>
          <View style={styles.modalContent}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.checkemail} style={styles.modalImage} />
              <Text style={styles.modalText}>Check Your Mail</Text>
              <Text style={styles.modalText2}>
                Please check your mail and follow the instructions.
              </Text>
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                alignSelf: 'center',
                marginBottom: '20%',
              }}>
              <CustomButton
                title={'Next'}
                action={() => navigation.replace('Otp', {email: email})}
              />
            </View>
          </View>
        </View>
      </Modal>
      <CustomButton title={'Reset Password'} action={handleModal} />
    </ScrollView>
    </SafeAreaView>
  );
};

export default ForgorPassword;
