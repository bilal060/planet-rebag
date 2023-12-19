/* eslint-disable prettier/prettier */
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import color from '../color/color';
import React from 'react';

export function CustomButton({title, action}) {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.GuestButtonContainer}>
        <Text style={styles.GuestButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  GuestButtonContainer: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    backgroundColor: color.green2,
    marginVertical: 5,
    marginHorizontal: 24,
    justifyContent: 'center',
  },
  GuestButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    top: '14%',
  },
});
