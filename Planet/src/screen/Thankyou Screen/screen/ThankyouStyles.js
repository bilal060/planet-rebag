import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize} from '../../../assets/responsiveness';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: 20,
    // paddingHorizontal: 40,
  },
  content: {
    height:"40%",
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red"
  },
  img: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  title: {
    color: color.green,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily:"SFProDisplay-Medium",
    
  },
  message: {
    color: '#777777',
    fontSize: fontSize.nineteen,
    textAlign: 'center',
    // fontWeight: '700',
    lineHeight: 30,
    width: 300,
    fontFamily:"SFProDisplay-Medium"
  },
  buttonContainer: {
    marginBottom: 12,
    width: '100%',
  },
  button: {
    backgroundColor: '#79AA00',
    // padding: fontSize.twelve,
    alignItems: 'center',
    borderRadius: 10,
    width:"91%",
    height:60,
    alignSelf:"center",
 
    justifyContent:"center"
  },
  buttonText: {
    color: 'white',
    fontSize: fontSize.nineteen,
    fontFamily:"SFProDisplay-Medium",
    // fontWeight:"800"
  },
  dealsContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    // padding: 16,
    // marginTop: 16,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: 'white',
     width: '93%',
    // alignSelf: 'center',
  },
  dealsContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 24,
    height: 96,
  },
  dealsimg: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  dealsTextContainer: {
    paddingLeft: 16,
  },
  dealsTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    fontFamily:"SFProDisplay-Medium"
  },
  dealsText1: {
    color: '#1E252B',
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '500',
    width: 200,
    fontFamily:"SFProDisplay-Medium"
  },
  line: {
    borderBottomColor: '#EEEEEEEE',
    borderBottomWidth: 1,
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 6,
    height: 40,
  },
  redeemPointContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeemPoints: {
    color: '#1E252B',
    fontSize: fontSize.fourteen,
    fontWeight: '500',
  },
  RedeemBtnContainer: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 18,
  },
  redeemBtn: {
    width: 101,
    height: '82%',
    backgroundColor: '#A3A3A3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: fontSize.thirteen,
  },
});
export default styles;
