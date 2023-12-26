/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import color from '../../../../assets/color/color';
import {fontSize, scalableheight} from '../../../../assets/responsiveness';

export default function PlanetsTypes({img, number, heading, style}) {
  return (
    <View style={styles.parentContainer}>
      <View style={{...styles.imgContainer, ...style}}>
        <View
          style={{
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            //  backgroundColor: 'red',
          }}>
          <Image
            source={img}
            resizeMode="contain"
            style={{
              width: scalableheight.three,
              height: scalableheight.three,
            }}
          />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.headingTxt}>{heading}</Text>
          <View
            style={
              {
                // width: '40%',
                // backgroundColor: 'red',
                // justifyContent: 'flex-end',
                // alignItems: 'flex-end',
              }
            }>
            <Text style={styles.numberTxt}>{number}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '47%',

  },
  imgContainer: {
    width: '100%',
    backgroundColor: '#E388001A',
 
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 7,
    height: 44,
  },
  txtContainer: {
    width: '75%',
    justifyContent: 'space-between',
    margin: 0,
    flexDirection: 'row',
  
  },
  numberTxt: {
    fontSize: fontSize.eleven,
    fontWeight: '700',
    marginRight: '7%',
    color: color.themeBlackColor,
    fontFamily:"SFProDisplay-Medium"
  },
  headingTxt: {
    fontSize: fontSize.eleven,
    fontWeight: '800',
    color: color.themeBlackColor,
    fontFamily:"SFProDisplay-Medium"
  },
});
