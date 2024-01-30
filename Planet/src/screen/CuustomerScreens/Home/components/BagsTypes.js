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
         
          <View style={{ width:"99%",height:120}}>
          <View style={{width:66, height:66,borderRadius:6,backgroundColor:"#F8F8F8", justifyContent:"center", alignItems:"center"}}>
          <Image style={{width:30, height:30, marginVertical:4}} resizeMode="contain" source={logoimg}/>
          </View>
          <Text style={styles.headingTxt}>{heading}</Text>
        
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
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '47%',



  },
  imgContainer: {
    width: '100%',
    backgroundColor: '#305543',
    alignItems: 'center',
    justifyContent:"center",
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // borderTopRightRadius:12,
    // borderBottomLeftRadius:12,
     borderRadius:9,
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
    fontSize: fontSize.ten,
    fontWeight: '600',
    // marginRight: '7%',
   
    color:"white",
    // marginVertical:1,
    fontFamily:"SFProDisplay-Medium"
  },
  headingTxt: {
    fontSize: fontSize.thirteen,
    fontWeight: '700',
    color: color.themeSilver,
    color:"white",
    fontFamily:"SFProDisplay-Medium",
    marginVertical:6
    // marginLeft:5
  },
});

