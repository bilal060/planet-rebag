/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import styles from '../../screen/LandingStyles';
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export function Button({title, page, navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(page)}>
      <View
        style={
          title === 'Start as a Guest'
            ? styles.GuestButtonContainer
            : styles.buttonContainer
        }>
        <Text
          style={
            title === 'Start as a Guest'
              ? styles.GuestButtonText
              : styles.buttonText
          }>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
