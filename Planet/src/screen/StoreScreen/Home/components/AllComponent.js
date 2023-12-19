/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import color from '../../../../assets/color/color';

export default function AllComponent({styles, img, heading, txtStyle}) {
  return (
    <View style={{...style.parentContainer, ...styles}}>
      {img && <Image source={img} />}
      <Text style={{...style.txtStyle, ...txtStyle, marginLeft: img ? 6 : 0}}>
        {heading}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  parentContainer: {
    //width: 40,
    //height: 24,
    // padding: '1%',

    paddingHorizontal: '7%',
    paddingVertical: '3%',
    backgroundColor: color.green,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 11,
  },
});
