/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import images from '../../../../assets/images/images';
import color from '../../../../assets/color/color';
import {fontsfamily} from '../../../../assets/font/font';
import {fontSize} from '../../../../assets/responsiveness';

export default function Header() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.imageContainer}>
        {/* <Image source={images.humburgIcon} resizeMode="cover" /> */}
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.textStyle}>Home</Text>
      </View>
      <Image
        resizeMode="contain"
        style={{width: 41, height: 41}}
        source={{
          uri: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: '6%',
    marginTop: 4,
  },
  imageContainer: {
    width: '10%',
  },
  headingContainer: {
    width: '81%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  textStyle: {
    color: color.themeBlackColor,
    fontSize: fontSize.twenty,
    //fontFamily: fontsfamily.SFPRODISPLAYBOLD,
    fontWeight: '800',
  },
});
