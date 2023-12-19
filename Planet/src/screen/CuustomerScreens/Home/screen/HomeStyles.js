/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../../assets/color/color';
import {fontSize, scalableheight} from '../../../../assets/responsiveness';

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    // padding: '6%',
    backgroundColor: 'white',
  },
  welcomeContainer: {
    width: '100%',
    // marginTop: '8%',
    padding: '6%',
    paddingTop: '1%',
  },
  welcomeTxt: {
    fontSize: 23,
    fontWeight: '800',
    color: '#1E252B',
  },
  historyContainer: {
    width: '65%',
    // backgroundColor: 'red',
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  hsitroyTxt: {
    fontSize: fontSize.nineteen,
    fontWeight: '700',
    color: '#1E252B',
    fontFamily:"SFProDisplay-Medium"
    //lineHeight: 17,
  },
  allcomponentContainer: {
    width: '55%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  parentPlanetType: {
    width: '100%',
    // marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '6%',
    marginTop: '3%',
    // backgroundColor: 'red',
  },
  parentAllcomponent: {
    width: '100%',
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    //paddingVertical: '1%',
    paddingHorizontal: '6%',
  },
  optionsContainer: {
    marginTop: scalableheight.three,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    // borderWidth: 1,
  },
  optionsLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  optionsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingBottom: 13,
  },
  selectedOptionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderBottomWidth: 2,
    borderColor: color.green2,
    paddingBottom: 13,
  },
  selectedoptionsLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: color.green2,
  },
  cashContainer: {
    backgroundColor: color.themeSilver,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
  },
  cashText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
  },
  pointsImg: {
    height: 34,
    width: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  pointsText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
  },
  pointView: {
    padding: 16,
    width: 98,
    height: 80,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  qrImg: {
    width: 104,
    height: 104,
    resizeMode: 'contain',
  },
  imageBackgroundStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  qrView: {
    alignItems: 'center',
  },
  qrText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
    marginBottom: 32,
    marginTop: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    top: '14%',
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    backgroundColor: color.green2,
    justifyContent: 'center',
  },
  inputSyle: {
    borderRadius: 12,
    padding: 16,
    color: 'black',
    backgroundColor: color.themeSilver,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  IDText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    marginTop: 24,
  },
  IDContainer: {
    marginHorizontal: 24,
  },
  IDButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 24,
  },
});

export default styles;
