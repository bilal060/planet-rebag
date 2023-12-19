/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import SegmentRoundBar from './SegmentRoundBar';
import { imgUrl } from '../../../../../utils/constants';
import { fontSize , scalableheight } from '../../../../assets/responsiveness';
import color from '../../../../assets/color/color';

export default function BagsTypes({img, number, heading, style, logoimg}) {

  return (
    <View style={styles.parentContainer}>
      
      <View style={{...styles.imgContainer, ...style}}>
  
        <View style={styles.txtContainer}>
         
          <View style={{flexDirection:"row", width:"82%", alignItems:"center"}}>
          
          <Image style={{width:20, height:20,}} resizeMode="contain" source={logoimg}/>
          
          <Text style={styles.headingTxt}>{heading}</Text>
          </View>
          <View
            style={
              {
               
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
    justifyContent:"center",
    // justifyContent: 'space-between',
    // flexDirection: 'row',
       borderRadius: 7,
    height: 44,
  },
  txtContainer: {
    width: '100%',
     justifyContent:"space-around",
     margin: 0,
     flexDirection: 'row',
    //  alignSelf:"center",
     alignItems:"center",
    // justifyContent:"center",
    // backgroundColor:"red",
    // height:"100%",
    paddingHorizontal:8

  
  },
  numberTxt: {
    fontSize: fontSize.eleven,
    fontWeight: '700',
    // marginRight: '7%',
    color: color.themeBlackColor,
    color:"#000000",
    fontFamily:"SFProDisplay-Medium"
  },
  headingTxt: {
    fontSize: fontSize.nine,
    fontWeight: '800',
    color: color.themeBlackColor,
    color:"#000000",
    fontFamily:"SFProDisplay-Medium",
    marginLeft:5
  },
});

