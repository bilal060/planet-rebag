/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput, Text} from 'react-native';
import React from 'react';
import {fontSize, scalableheight} from '../responsiveness';

export function CustomInput({
  title,
  secure,
  value,
  onchangeTxt,
  error,
  keyboardType,
  onErrorTxt,
  Title,
}) {
  // console.log(error);
  return (
    <>
      <TextInput
        placeholderStyle={{color: '#A3A3A3', fontWeight: '900'}}
        placeholderTextColor={'#A3A3A3'}
        style={styles.input}
        placeholder={title}
        secureTextEntry={secure}
        onChangeText={txt => {
          onchangeTxt && onchangeTxt(txt, Title);
          onErrorTxt && onErrorTxt('', Title);
        }}
        keyboardType={keyboardType && keyboardType}
      />
      {error !== '' && (
        <Text style={{color: 'red', fontSize: 15, fontWeight: '700'}}>
          {error}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    color: 'black',
    marginBottom: 8,
    paddingLeft: 12,
    fontSize: fontSize.fifteen,
    height: 56,
    fontWeight: '600',
    fontFamily:"SFProDisplay-Medium"
  },
});
