/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize} from '../../../../assets/responsiveness';

export default function HistoryHome() {
  const RenderData = () => {
    return (
      <>
        <View style={style.contentContainer}>
          <View style={{paddingHorizontal: '6%'}}>
            <Text style={style.headingtxt}>Returned Bags</Text>
            <Text style={style.headingsideTxt}>10</Text>
          </View>
          <View style={{marginLeft: '10%'}}>
            <Text style={style.headingtxt}>Time & Date</Text>
            <Text style={style.headingsideTxt}>10:19 AM | 23/07/2023</Text>
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={{paddingHorizontal: '6%'}}>
            <Text style={style.headingtxt}>Total Bags</Text>
            <Text style={style.headingsideTxt}>10</Text>
          </View>
          <View style={{marginLeft: '19%'}}>
            <Text style={style.headingtxt}>Location</Text>
            <Text style={style.headingsideTxt}>Dubai</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={style.parentContainer}>
      <View style={style.topContainer}>
        <Text style={style.topTxt}>Carrefour</Text>
        <Text style={style.topTxt}>AED 10.00</Text>
      </View>

      {RenderData()}
    </View>
  );
}

const style = StyleSheet.create({
  parentContainer: {
    borderRadius: 7,
    marginVertical: '4%',
    //borderColor: 'red',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  topContainer: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
  },
  topTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E252B',
    // lineHeight: 15,
  },
  contentContainer: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginVertical: '3%',
    paddingVertical: '1%',
  },
  headingtxt: {
    fontSize: fontSize.sixteen,
    fontWeight: '700',
    color: '#1E252B',

    //lineHeight: 15,
  },
  headingsideTxt: {
    fontSize: fontSize.fourteen,
    fontWeight: '500',
    color: '#1E252B',
    top: 4,
  },
});
