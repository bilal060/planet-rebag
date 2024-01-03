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
         
          <View style={{ width:"82%",}}>
          
          <Image style={{width:25, height:25, marginVertical:4}} resizeMode="contain" source={logoimg}/>
          
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
    borderTopRightRadius:12,
    borderBottomLeftRadius:12,
     borderRadius:4,
    height: 44,
  },
  txtContainer: {
    width: '100%',
     justifyContent:"space-around",
     margin: 0,
    //  flexDirection: 'row',
    //  alignItems:"center",
   
    paddingHorizontal:18,
    paddingVertical:8

  
  },
  numberTxt: {
    fontSize: fontSize.sixteen,
    fontWeight: '800',
    // marginRight: '7%',
    color: color.themeBlackColor,
    color:"#000000",
    marginVertical:1,
    fontFamily:"SFProDisplay-Medium"
  },
  headingTxt: {
    fontSize: fontSize.thirteen,
    fontWeight: '500',
    color: color.themeSilver,
    color:"#000000",
    fontFamily:"SFProDisplay-Medium",
    marginVertical:2
    // marginLeft:5
  },
});

