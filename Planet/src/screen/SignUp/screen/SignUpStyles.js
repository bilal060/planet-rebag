/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize, scalableheight} from '../../../assets/responsiveness';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginHorizontal: 24,
    marginBottom: 40,
    marginTop: 22,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    color: color.green,
    fontSize: 32,
    fontWeight: '700',
    marginHorizontal: 24,
    lineHeight: 32,
    marginBottom: 16,
  },
  buttonContainer: {
    marginHorizontal: 24,
    marginVertical: 3.7,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
     fontWeight: 'bold',
    marginBottom: 8,
    fontFamily:"SFProDisplay-Medium"
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    width: '20%',
    fontWeight: '700',
  },
  Numberinput: {
    backgroundColor: '#F8F8F8',
    color: 'black',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '80%',
  },
  input: {
    color: '#A3A3A3',
    fontWeight: '500',
    fontSize: 14,
    paddingLeft: 11,
    backgroundColor: '#F8F8F8',
    height: 57,
    fontFamily:"SFProDisplay-Medium"
  },
  inputContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SubmitContainer: {},
  SubmitbuttonText: {
    color: 'white',
    fontSize: fontSize.fifteen,
    fontWeight: '700',
  },
  ButtonView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  haveAccountText: {
    color: color.green2,
    textAlign: 'center',
    fontSize: fontSize.sixteen,
    fontWeight: '700',
    fontFamily:"SFProDisplay-Medium"
  },

  Pcontainer: {
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'center',
    marginVertical: 3,
    marginHorizontal: 25,
    // backgroundColor: 'red',
  },
  privacyText: {
    fontSize: fontSize.twelve,
    padding: 0,
    margin: 0,
    color: '#777777',
    fontWeight: '600',
  },
  linkText: {
    color: color.green,
    fontSize: fontSize.thirteen,
    padding: 0,
    margin: 0,
    // top: 30,
    // bottom: 50,

    top: 4,
    // color: '#79AA00',
    fontWeight: '700',
    //position: 'absolute',
  },
  RadioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor:"red"
    // minWidth:"80%"
  },
  ButtonsConatiner: {
    margin: 24,
    marginTop:4
  },
  SigUpTypeContainer: {
    backgroundColor: '#F8F8F8',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },
  optionsText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  optionsTextSelected: {
    color: 'white',
    backgroundColor: color.green2,
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
  optionsFlex: {
    alignItems: 'center',
    height: 43,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: '#79AA0033',
    borderRadius: 5,
  },
});
export default styles;
