import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize} from '../../../assets/responsiveness';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  OtpTextBoxcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 58,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 8,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 20,
    paddingVertical: 18,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  VerifybuttonText: {
    color: 'white',
  },
  ButtonView: {
    width: '100%',
    justifyContent: 'center',
    marginTop:60,
  },
  title: {
    color: color.green,
    fontSize: fontSize.twentyeight,
    fontWeight: 'bold',
    marginHorizontal: 20,
    letterSpacing: 1,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 15,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  modalText: {
    color: color.green,
    fontSize: fontSize.twentyeight,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: 20,
  },
  modalText2: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: fontSize.fifteen,
  },
  ModalbuttonText: {
    fontSize: 16,
    color: 'white',
  },
  modalImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  ModalButtonView: {
    width: '92%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    padding: 15,
    alignSelf: 'center',
  },
});
export default styles;
