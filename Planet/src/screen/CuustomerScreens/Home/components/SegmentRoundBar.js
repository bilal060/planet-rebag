/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';
import color from '../../../../assets/color/color';

export default function SegmentRoundBar({barColor}) {
  return (
    <View
      style={{
        width: '100%',
        //backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <AnimatedCircularProgress
        size={45}
        width={7}
        fill={40}
        tintColor={barColor}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#D9D9D9"
        arcSweepAngle={300}
        rotation={210}>
        {fill => (
          <Text
            style={{
              fontSize: 8,
              color: '#1E252B',
              // lineHeight: 20,
              fontWeight: '800',
            }}>
            {15 + '/' + 100}
          </Text>
        )}
      </AnimatedCircularProgress>
      {/* <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          bottom: '2%',
        }}>
        <Text style={{fontSize: 11, color: '#1E252B', fontWeight: '600'}}>
          {15 + '/' + 100}
        </Text>
        <Text style={{fontSize: 11, color: '#1E252B', fontWeight: '600'}}>
          {'bags / 100'}
        </Text>
      </View> */}
    </View>
  );
}
