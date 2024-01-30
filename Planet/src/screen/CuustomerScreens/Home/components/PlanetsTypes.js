/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import color from '../../../../assets/color/color';
import {fontSize, scalableheight} from '../../../../assets/responsiveness';

export default function PlanetsTypes({img, number, heading, style, boxImgStyle, textStyle}) {
  return (
    <View style={styles.parentContainer}>
      <View style={{...styles.imgContainer, ...style}}>
        <View
          style={{
            width: '17%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#29542A',
            height:"90%",
            // borderRadius:8,
            alignSelf:"center",
            marginLeft:10,
            ...boxImgStyle
            // backgroundColor:"red"
          }}>
          <Image
            source={img}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 
              '88%',
            }}
          />
        </View>
        <View style={styles.txtContainer}>
          {/* <Text style={styles.headingTxt}>{heading}</Text> */}
          <Text style={{...styles.numberTxt, ...textStyle}}>{number}</Text>
          <View
            style={
              {
                // width: '40%',
                // backgroundColor: 'red',
                // justifyContent: 'flex-end',
                // alignItems: 'flex-end',
              }
            }>
            <Text style={{...styles.headingTxt,...textStyle}}>{heading}</Text> 
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    

  },
  imgContainer: {
    width: '100%',
    backgroundColor: '#E388001A',
 
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 9,
    height: 67,
  },
  txtContainer: {
    width: '75%',
    // justifyContent: 'space-between',
    margin: 12,
    // flexDirection: 'row',
  
  },
  numberTxt: {
    fontSize: fontSize.fifteen,
    fontWeight: '700',
    // marginRight: '3%',
    color: color.themeBlackColor,
    fontFamily:"SFProDisplay-Medium"
  },
  headingTxt: {
    fontSize: fontSize.thirteen,
    fontWeight: '500',
    color: "#171D25",
    fontFamily:"SFProDisplay-Medium",
    marginTop:1.5
  },
});
