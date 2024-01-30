/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize, scalableheight} from '../../../assets/responsiveness';

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 12.35,

    // elevation: 19,
    // backgroundColor: 'red',
  },
  parentPlanetType: {
    width: '100%',
    // marginTop: '3%',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: '6%',
    marginTop: '4%',
    // backgroundColor: 'red',
  },
  historyContainer: {
    width: '65%',
    flexDirection:"row",
     paddingHorizontal: '6%',
     marginTop: '4%',
  },
  hsitroyTxt: {
    fontSize: fontSize.nineteen,
    fontWeight: '700',
    color: '#1E252B',
    fontFamily:"SFProDisplay-Medium"
    //lineHeight: 17,
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
    width:"46%"
  //  marginTop: 13,
  },
  cashHeading: {
    color: '#1E252B',
    fontSize: 13,
    fontWeight: '600',
    fontFamily:"SFProDisplay-Medium",
    // lineHeight: 14,
    marginLeft: 10,
  },
  cashText: {
    color: 'black',
    fontSize: fontSize.fourteen,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily:"SFProDisplay-Medium",
    marginLeft:3

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
    marginTop: '2.5%',
  },
  headerText: {
    flex: 0.9,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '800',
    color: 'black',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  BnCImage: {
    height: 35,
    width: 40,
    resizeMode: 'contain',
  },
  ImgView: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
    width: '47%',
  },
  imageText: {
    fontSize: 32,
    fontWeight: '700',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily:"SFProDisplay-Medium",
    fontWeight:"700"
    
  },
  ButtonView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    height:60
    // marginTop: '24%',
  },
  counterTitle: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: 'white',
    textAlign:"center"
    // marginBottom: 8,
  },
  counterConatiner: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 9,
    alignItems: 'center',
   marginVertical:20
     
   
  },
  addSubText: {
    backgroundColor: '#29542A',
    // paddingHorizontal: scalableheight.two,
    borderRadius: 12,
    fontSize: 30,
    color: 'white',
    width:45,
    alignSelf:"center",
  
    textAlign:"center"
  },
  counterNum: {
    fontSize: fontSize.thirtytwo,
    fontWeight: '600',
    // lineHeight: 32,
    color: 'black',
     textAlign:"center",
     textAlignVertical:"center"
  },
});
export default styles;
