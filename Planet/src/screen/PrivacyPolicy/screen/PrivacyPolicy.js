/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import images from '../../../assets/images/images';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';

const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppMainHeader title={'Privacy Policy'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textView}>
          <Text style={styles.title}>Acceptance of the Privacy Policy</Text>
          <Text style={styles.texttwo}>
            Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.
            Lorem ipsum dolor sit amet consectetur. Pretium lacus congue
            maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue
            maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue
            maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue
            maec.Lorem ipsum dolor sit amet consectetur. Pretium lacus congue
            maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue
            maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue
            maec.
            {'\n'}
            {'\n'}Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur.
            {'\n'}
            {'\n'}Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet
            consectetur. Pretium lacus congue maec. Pretium lacus congue maec.
            Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.
            Lorem ipsum dolor sit amet consectetur. Pretium lacus con.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginVertical: 22,
    marginLeft: 22,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },
  headerText: {
    flex: 0.84,
    textAlign: 'center',
    fontSize: fontSize.eightteen,
    fontWeight: '800',
    color: 'black',
  },
  textView: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 18,
  },
  texttwo: {
    color: '#777777',
    marginTop: 10,
    fontWeight: '600',
    fontSize: fontSize.fourteen,
    lineHeight: 18,
  },
});
