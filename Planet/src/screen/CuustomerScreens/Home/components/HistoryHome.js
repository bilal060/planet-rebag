/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function HistoryHome({key ,data , index}) {
  // console.log(data?.createdAt?.toUTCString());
  // console.log(index)
  const RenderData = () => {
    return (
      <>
        <View key={data?.key} style={style.contentContainer}>
          <View style={{paddingHorizontal: '6%'}}>
            <Text style={style.headingtxt}>Recycled Bags</Text>
            <Text style={style.headingsideTxt}>
              {data?.returnBagsQty}
            </Text>
          </View>
          <View style={{marginLeft: '13%'}}>
            <Text style={style.headingtxt}>Time & Date</Text>
            <Text style={style.headingsideTxt}>
              {new Date(data?.createdAt).toLocaleString()}
            </Text>
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={{paddingHorizontal: '6%'}}>
            <Text style={style.headingtxt}>Recycled Bottles</Text>
            <Text style={style.headingsideTxt}>
              {data?.returnBottelsQty}
            </Text>
          </View>
          <View style={{marginLeft: '14%'}}>
            <Text style={style.headingtxt}>Name</Text>
            <Text style={style.headingsideTxt}>{data?.name}</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={style.parentContainer}>
      <View style={style.topContainer}>
        <Text style={style.topTxt}>{"#"+ Number(index)}</Text>
        {/* <Text style={style.topTxt}>{'AED ' + data?.sessionId?.total}</Text> */}
      </View>

      {RenderData()}
    </View>
  );
}

const style = StyleSheet.create({
  parentContainer: {
    borderRadius: 7,
    marginVertical: '4%',
    borderColor: '#EEEEEE',
    borderWidth: 1.8,
    //borderColor: 'red',
  },
  topContainer: {
    width: '100%',
    backgroundColor: '#29542A',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
    borderRadius:8
  },
  topTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
    // lineHeight: 15,
  },
  contentContainer: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  //  backgroundColor: 'red',
    marginVertical: '3%',
    paddingVertical: '1%',
  },
  headingtxt: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E252B',
    fontFamily:"SFProDisplay-Medium"

    //lineHeight: 15,
  },
  headingsideTxt: {
    fontSize: 12.3,
    fontWeight: '600',
    color: '#1E252B',
    top: 4,
    fontFamily:"SFProDisplay-Medium"
  },
});
