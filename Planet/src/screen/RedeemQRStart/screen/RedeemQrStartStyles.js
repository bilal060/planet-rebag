/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
const styles = StyleSheet.create({
  header: {
    //padding: 10,
    //paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '6%',
    borderRadius: 8,
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  BnCImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  ImgView: {
    backgroundColor: '#d4d4d4',
    paddingVertical: 13,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 13,
  },
  imageText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  Qrimg: {
    height: scalableheight.twenty,
    width: '94%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '7%',
    // backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
  },
  ButtonView: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: '#79AA00',
    borderRadius: 10,
    padding: 15,
    alignSelf: 'center',
    borderColor: '#79AA00',
  },
  TextQr: {
    color: '#1E252B',
    fontSize: fontSize.twentythree,
    textAlign: 'center',
    marginTop: '5%',
    fontWeight: '800',
  },
  wordsQr: {
    color: '#1E252B',
    fontSize: fontSize.fourteen,
    textAlign: 'center',
    marginTop: '9%',
    fontWeight: '400',
  },
});

export default styles;
