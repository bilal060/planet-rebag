/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import color from '../../../../assets/color/color';
import {fontSize, scalableheight} from '../../../../assets/responsiveness';
import images from '../../../../assets/images/images';

export default function PlanetsTypes({img, number, heading, style}) {
  return (
    <View style={{...styles.parentContainer, ...style}}>
      <Image
        resizeMode="contain"
        source={img}
        style={{width: 52, height: 52}}
      />
      <View style={{marginTop: scalableheight.onepointfive}}>
        <Text style={styles.numberTxt}>{number}</Text>
        <Text style={styles.headingTxt}>{heading}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '48.5%',
    height: scalableheight.twenty,
    backgroundColor: '#9FC1341A',
    borderRadius: 10,
    padding: scalableheight.twopointseven,
  },
  numberTxt: {
    color: '#79AA00',
    fontWeight: '800',
    fontSize: fontSize.twentyeight,
  },
  headingTxt: {
    color: '#1E252B',
    fontWeight: '700',
    fontSize: fontSize.fourteen,
  },
});
