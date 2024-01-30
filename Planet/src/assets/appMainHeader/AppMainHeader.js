/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import images from '../images/images';
import {fontSize} from '../responsiveness';

export default function AppMainHeader({title, navigation, isBack}) {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => isBack && isBack ? navigation.goBack() : navigation.replace('BottomStack')}>
        <View style={styles.header}>
          <Image tintColor={"white"} source={images.backtwo} style={styles.img} />
        </View>
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <View />
      <View />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 24,
    marginVertical: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor:"white"
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:"#29542A"
  },
  headerText: {
    color: 'white',
    fontSize: fontSize.twenty,
    fontWeight: '500',
    fontFamily:"SFProDisplay-Medium"
  },
});
