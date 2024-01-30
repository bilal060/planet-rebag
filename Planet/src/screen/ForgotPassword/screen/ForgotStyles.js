/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize} from '../../../assets/responsiveness';

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
  loginimg: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
  },
  title: {
    color: "#000000",
    fontSize: fontSize.twentysix,
    fontWeight: '700',
    marginHorizontal: 24,
    lineHeight: 32,
    marginBottom: 16,
    top:20
  },
  buttonContainer: {
    marginHorizontal: 24,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    color: 'black',
    marginBottom: 16,
    paddingHorizontal: 13,
    height: 56,
    fontSize: 15,
    fontWeight: '700',
  },
  SubmitbuttonText: {
    color: 'white',
    fontSize: fontSize.fifteen,
    fontWeight: '800',
  },
  ButtonView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    padding: 17,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
  },
  emailContainer: {
    marginHorizontal: 24,
    marginTop: 6,
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
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: 20,
  },
  modalText2: {
    color: '#777777',
    fontWeight: '500',
    letterSpacing: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 14,
  },
  ModalbuttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '800',
  },
  modalImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  ModalButtonView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
export default styles;
