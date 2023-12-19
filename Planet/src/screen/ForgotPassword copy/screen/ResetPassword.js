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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import images from '../../../assets/images/images';
import styles from './ResetPasswordtyles';
import {scalableheight} from '../../../assets/responsiveness';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import {ResetPassword, reserauth} from '../../../Store/auth';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

const Resetpassword = ({navigation}) => {
  const dispatch = useDispatch();
  const {isPasswordReset} = useSelector(state => state.auth);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    if (email.trim() == '') {
      showMessage({
        message: 'Error',
        description: 'Enter your correct email',
        type: 'danger',
      });
    } else if (password.trim() == '') {
      showMessage({
        message: 'Error',
        description: 'Enter your new password',
        type: 'danger',
      });
    } else {
      let payload = {
        email: email,
        newPassword: password,
      };
      dispatch(ResetPassword(payload));
    }
  };

  useEffect(() => {
    if (isPasswordReset) {
      dispatch(reserauth());
      setShowModal(true);
    }
  }, [isPasswordReset]);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.header}>
          <Image source={images.back} style={styles.img} />
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>New Password?</Text>
      <Text
        style={{
          color: '#777777',
          marginHorizontal: 24,
          marginBottom: 20,
          fontSize: scalableheight.two,
          letterSpacing: 1,
          fontWeight: '400',
        }}>
        Enter your new Password please.So we can reset your password.
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
      <View style={styles.emailContainer}>
        <Text style={styles.buttonText}>New password</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#A3A3A3'}
          placeholder={'@ Enter your new Password'}
          onChangeText={e => setpassword(e)}
          value={password}
        />
      </View>
      <Modal visible={showModal} transparent={true} animationType="slide">
        <View>
          <View style={styles.modalContent}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.checkemail} style={styles.modalImage} />
              <Text style={styles.modalText}>
                Congratulations your password has been reset.
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
                title={'Done'}
                action={() => navigation.replace('Login', {email: email})}
              />
            </View>
          </View>
        </View>
      </Modal>
      <CustomButton title={'Reset Password'} action={handleModal} />
    </ScrollView>
  );
};

export default Resetpassword;
