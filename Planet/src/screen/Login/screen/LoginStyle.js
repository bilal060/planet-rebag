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
   
    fontFamily:"SFProDisplay-Bold"
  },
  buttonContainer: {
    marginHorizontal: 24,
    //backgroundColor: 'red',
    //backgroundColor: '#F8F8F8',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    fontFamily:"SFProDisplay-Medium"
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    color: 'black',
    marginBottom: 8,
    paddingLeft: 12,
    fontSize: fontSize.fifteen,
    height: 56,
    fontWeight: '600',

    //marginLeft: 10,
  },
  SubmitContainer: {},
  SubmitbuttonText: {
    color: 'white',
    fontSize: fontSize.eightteen,
    fontWeight: '800',
  },
  ButtonView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    padding: 16,
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
  contactText: {
    color: '#1E252B',
    textAlign: 'center',
    fontWeight: '400',
    // fontWeight: 'bold',
    fontSize: 18.5,
    marginTop: scalableheight.one,
    fontFamily:"SFProDisplay-Medium"
  },
  socialimageStyle: {
    height: 34,
    width: 34,
    resizeMode: 'contain',
    tintColor: color.green2,
  },
  socialImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: scalableheight.twopointfour,
    //marginHorizontal: 30,
    //backgroundColor: 'red',
    width: '64%',
    alignSelf: 'center',
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
  flexSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    marginRight: 20,
  },
  Numberinput: {
    backgroundColor: '#F8F8F8',
    color: 'black',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '80%',
  },
  RadioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 24,
  },
});
export default styles;
