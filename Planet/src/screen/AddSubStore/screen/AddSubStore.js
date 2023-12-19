/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import images from '../../../assets/images/images';
import countryCode from '../../../assets/country code/countrycode';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './AddSubStoreStyles';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';

const AddSubStore = ({navigation}) => {
  const InputFields = Title => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{Title}</Text>
        <TextInput
          placeholderTextColor={'#A3A3A3'}
          style={styles.input}
          placeholder={'Enter your ' + Title}
        />
      </View>
    );
  };
  const renderDropdownRow = rowData => {
    return (
      <View style={styles.dropdownRender}>
        <TouchableOpacity style={{padding: 10}}>
          <Text style={{color: 'black'}}>
            {rowData.country}: {rowData.code}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <AppMainHeader title={'Add Sub Store'} navigation={navigation} />
      <View style={{marginBottom: 30}}>
        {InputFields('Store Name')}
        {InputFields('Email')}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Contact Number</Text>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <ModalDropdown
              options={countryCode}
              defaultValue="UAE +971 ∨"
              renderRow={renderDropdownRow}
              style={styles.dropdown}
              textStyle={{color: 'black'}}
            />
            <TextInput style={styles.Numberinput} placeholder={'0123456789'} />
          </View>
        </View>
        {InputFields('Store Location')}
        {InputFields('Temporary Password')}
      </View>

      <TouchableOpacity>
        <View style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </View>
      </TouchableOpacity>
      <CustomButton
        title={'Submit'}
        action={() => navigation.navigate('SubStores')}
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
};

export default AddSubStore;
