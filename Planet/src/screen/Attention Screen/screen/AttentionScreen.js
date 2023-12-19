/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../../assets/images/images';
import styles from './AttentionStyles';
import {generateBarcode} from '../../../Store/homeApi';
import {useDispatch, useSelector} from 'react-redux';

const AttentionScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {getAllstoreBottle, getAllstoreBag} = useSelector(state => state.home);
  const {data} = route?.params;

  function GenerateBarCode() {
    // console.log(data);
    let payLoad = {
      storeId: data?.storeid,
      sessionId: data?.sessionId,
      amount: data?.finalDiscountvalue,
    };
    // console.log(payLoad);
    dispatch(generateBarcode(payLoad));
  }

  useEffect(() => {
    GenerateBarCode();
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../../../images/danger.png')}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.title}>Attention!</Text>
        <View style={{marginTop: 80}}>
          <Text style={styles.message}>
            After your redeem the promo code is valid for
          </Text>
          <Text
            style={{...styles.message, color: '#FF3D3D', fontWeight: 'bold'}}>
            03 Minutes
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RedeemQrStart')}
          style={styles.button}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AttentionScreen;
