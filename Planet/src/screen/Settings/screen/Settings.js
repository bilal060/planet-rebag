/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../../../assets/images/images';
import styles from './SettingsStyle';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';

const Settings = ({navigation}) => {
  const Button = (img, title, navPageName) => {
    const navigateTo = () => {
      if (navPageName != null) {
        console.log(navPageName), navigation.navigate(navPageName);
      } else {
        alert('contact our support');
      }
    };
    return (
      <View>
        <TouchableOpacity onPress={navigateTo} style={styles.buttonView}>
          <View style={styles.buttonSecondView}>
            <Image
              source={img}
              style={[
                styles.buttonimg,
                {tintColor: title === 'Log Out' ? 'red' : 'black'},
              ]}
            />
            <Text
              style={[
                styles.buttonText,
                {color: title === 'Log Out' ? 'red' : 'black'},
              ]}>
              {title}
            </Text>
          </View>
          <Image source={images.forward} style={styles.buttonimg} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppMainHeader title="Elvis Cadmora" navigation={navigation} />
      <Text style={styles.Title}>Your Account</Text>
      {Button(images.store, 'Add Sub Store', 'AddSubStore')}
      {Button(images.key, 'Change Password', 'ScanCode')}

      <Text style={styles.Title}>Support</Text>
      {Button(images.faq, 'FAQs', 'Faq')}
      {Button(images.contact, 'Contact Us', 'SubStores')}
      {Button(images.privacy, 'Privacy Policy', 'PrivacyPolicy')}
      {Button(images.rate, 'Rate This App')}
      <View style={styles.logoutButtonView}>
        {Button(images.logout, 'Log Out')}
      </View>

      <View style={styles.termsView}>
        <Text style={styles.termsText}>Terms and Conditions</Text>
        <Text style={{color: 'grey'}}>App version 1.0</Text>
      </View>
    </View>
  );
};

export default Settings;
