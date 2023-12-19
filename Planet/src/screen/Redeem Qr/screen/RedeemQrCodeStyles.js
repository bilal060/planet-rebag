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
    marginHorizontal: 5,
  },
  Qrimg: {
    height: scalableheight.twentysix,
    width: scalableheight.twentysix,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '7%',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  ButtonView: {
    width: '87%',
    alignItems: 'center',
    backgroundColor: '#79AA00',
    borderRadius: 10,
    padding: 15,
    alignSelf: 'center',
  },
  TextQr: {
    color: '#1E252B',
    fontSize: fontSize.eightteen,
    textAlign: 'center',
    // marginTop: '9%',
    fontWeight: '700',
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
