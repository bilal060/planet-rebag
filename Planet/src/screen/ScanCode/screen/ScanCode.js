/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';
import images from '../../../assets/images/images';
import styles from './ScanCodesStyle';
import RenderQRView from '../components/RenderQRView';
import RenderIDView from '../components/RenderIDView';

const ScanCode = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('Scan QR Code');
  const options = ['Scan QR Code', 'Scan ID'];
  const renderSelectedOption = () => {
    if (selectedOption === 'Scan QR Code') {
      return <RenderQRView />;
    } else if (selectedOption === 'Scan ID') {
      return <RenderIDView />;
    } else {
      return null;
    }
  };
  const PointsDisplay = (img, points, customColor) => {
    return (
      <View style={[styles.pointView, {backgroundColor: customColor}]}>
        <Image source={img} style={styles.pointsImg} />
        <Text style={styles.pointsText}>+{points}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AppMainHeader title="Scan Code" navigation={navigation} />
      <View style={styles.optionsContainer}>
        {options.map(option => (
          <TouchableOpacity
            style={[
              styles.optionsButton,
              selectedOption === option && styles.selectedOptionButton,
            ]}
            key={option}
            onPress={() => setSelectedOption(option)}>
            <Text
              style={[
                styles.optionsLabel,
                selectedOption === option && styles.selectedoptionsLabel,
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{margin: 24}}>
        <View style={styles.cashContainer}>
          <Image source={images.cash1} style={styles.cashimg} />
          <Text style={styles.cashText}>AED 10.00</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {PointsDisplay(images.carrefour, 1, 'rgba(52, 134, 193, 0.1)')}
          {PointsDisplay(images.lulu, 1, 'rgba(0, 169, 80, 0.1)')}
          {PointsDisplay(images.almaya, 1, 'rgba(191, 28, 34, 0.1)')}
        </View>
      </View>
      {renderSelectedOption()}
    </View>
  );
};

export default ScanCode;
