/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../../../assets/images/images';
import color from '../../../assets/color/color';
import {scalableheight} from '../../../assets/responsiveness';

const RegisterBag = ({navigation}) => {
  const CounterDisplay = name => {
    const [count, setcount] = useState(0);
    const handleIncrement = () => {
      setcount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
      if (count > 0) {
        setcount(prevCount => prevCount - 1);
      }
    };
    return (
      <View>
        <Text style={styles.counterTitle}>{name}</Text>
        <View style={styles.counterConatiner}>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.addSubText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.counterNum}>{count}</Text>

          <TouchableOpacity onPress={handleIncrement}>
            <Text style={styles.addSubText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.backtwo} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Register Bag</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: scalableheight.four,
          width: '90%',
          alignSelf: 'center',
        }}>
        <View
          style={[
            styles.ImgView,
            {backgroundColor: 'rgba(52, 134, 193, 0.1)'},
          ]}>
          <Image
            source={images.bag}
            style={[styles.BnCImage, {tintColor: '#3486C1'}]}
          />
          <Text style={[styles.imageText, {color: '#3486C1'}]}>+1</Text>
        </View>
        <View
          style={[
            styles.ImgView,
            {backgroundColor: 'rgba(159, 193, 52, 0.1)'},
          ]}>
          <Image source={images.cash} style={styles.BnCImage} />
          <Text style={[styles.imageText, {color: '#79AA00'}]}>+1</Text>
        </View>
      </View>

      {CounterDisplay('Supermarket Bags')}
      {CounterDisplay('Other Bags')}
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ThankyouScreen');
          }}
          style={{
            position: 'absolute',
            bottom: scalableheight.nine,
            width: '100%',
            alignSelf: 'center',
            marginBottom: scalableheight.three,
          }}>
          <View style={styles.ButtonView}>
            <Text style={styles.buttonText}>Confirm Count</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterBag;
const styles = StyleSheet.create({
  backImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginVertical: 22,
    marginLeft: 22,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2.5%',
  },
  headerText: {
    flex: 0.9,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '800',
    color: 'black',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  BnCImage: {
    height: 35,
    width: 40,
    resizeMode: 'contain',
  },
  ImgView: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
    width: '47%',
  },
  imageText: {
    fontSize: 32,
    fontWeight: '700',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  ButtonView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '24%',
  },
  counterTitle: {
    marginHorizontal: 24,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: 'black',
    marginBottom: 8,
  },
  counterConatiner: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  addSubText: {
    backgroundColor: 'rgba(121, 170, 0, 0.4)',
    paddingHorizontal: scalableheight.two,
    borderRadius: 10,
    fontSize: 32,
    color: 'rgba(121, 170, 0, 1)',
  },
  counterNum: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 32,
    color: 'black',
  },
});
