/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:"100%",
    width:"100%",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // backgroundColor:"red"
  },
  topCirlcle: {
    position: 'absolute',
    width: 110,
    height: 110,
    top: '8%',
    left: '89%',
    backgroundColor: '#9FC134',
    borderRadius: 110 / 2,
    justifyContent: 'flex-end',
  },
  rightCircle: {
    position: 'absolute',
    width: 80,
    height: 80,
    top: '40%',
    right: '93%',
    backgroundColor: '#526D00',
    borderRadius: 80 / 2,
    justifyContent: 'flex-end',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  TitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  LogoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 2,
  },
  buttonContainer: {
    borderWidth: 1.5,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    borderColor: "#29542A",
    marginVertical: 5,
    marginHorizontal: 24,
    //  top: '20%',
  },
  buttonViewContainer: {
    // marginTop: '30%',
    width: '100%',
    position:"absolute",
    bottom:"6%"
  },
  GuestButtonContainer: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 20,
    backgroundColor: color.green2,
    marginVertical: 5,
    marginHorizontal: 24,
    justifyContent: 'center',
  },
  GuestButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    top: '14%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
    alignSelf: 'center',
    top: '14%',

  },
});

export default styles;
