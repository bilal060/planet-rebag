/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';

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
    marginTop: '7%',
    // marginBottom: 46,
  },
  headerText: {
    flex: 0.9,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '800',
    color: 'black',
  },
  buttonContainer: {
    marginHorizontal: 24,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    width: '30%',
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    color: 'black',
    marginBottom: 16,
    paddingLeft: 10,
    height: 56,
    fontWeight: '700',
    fontSize: 14.5,
  },
  SubmitbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
  },
  ButtonView: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    backgroundColor: color.green2,
    marginVertical: 5,
    marginHorizontal: 24,
    justifyContent: 'center',
  },
  cancelButton: {
    borderWidth: 1.5,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    borderColor: color.green2,
    marginVertical: 5,
    marginHorizontal: 24,
    backgroundColor: '#ebe8e8',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    width: '30%',
    fontWeight: '700',
  },
  Numberinput: {
    backgroundColor: '#F8F8F8',
    color: 'black',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '70%',
    fontWeight: '700',
  },
});

export default styles;
